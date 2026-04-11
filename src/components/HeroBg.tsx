import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

// ── Tuning constants ─────────────────────────────────────────────────────────
const TW = 208          // isometric tile width  (diamond horizontal span)
const TH = 104          // isometric tile height (= TW / 2)
const GAP = 5           // px inset on each vertex to create inter-cube gap
const GRID_DESKTOP = 24 // grid size on larger screens
const GRID_MOBILE  = 12 // grid size on small screens (≤ 640px wide)
const BASE_CH = 20      // base cube side height in px
const WAVE_AMP = 30     // wave vertical amplitude in px
const WAVE_SPEED = 0.45 // animation speed multiplier
const WAVE_SCALE = 0.12 // spatial frequency of the wave
const MOUSE_RADIUS = 170  // px — radius of mouse influence
const MOUSE_LIFT = 24     // max extra height at cursor
const LIGHT_BOOST = 48    // max brightness added by point light (0-100)
const WAVE_FPS = 30       // wave animation rate
const WAVE_MS  = 1000 / WAVE_FPS
const RESIZE_DEBOUNCE_MS = 150
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dark = theme === 'dark'
    const cvs  = canvas   // stable non-null ref for closures
    const c    = ctx

    let animId    = 0
    let t         = 0
    let dirty     = true  // draw at least once on mount
    let running   = true  // false when hidden or scrolled away
    let lastWaveTick = 0
    let resizeTimer  = 0

    // ── Helpers ──────────────────────────────────────────────────────────────
    // Convert a 0-100 lightness to an rgb hex string for hsl(220,9%,L%)
    // Pre-computed to avoid per-cube string formatting each frame.
    const colourCache = new Map<number, string>()
    function hslColour(L: number): string {
      const key = Math.round(L)
      let cached = colourCache.get(key)
      if (!cached) {
        // Convert hsl(220,9%,L%) → rgb manually (small, no dep needed)
        const h = 220 / 360, s = 0.09, l = key / 100
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        const hue2rgb = (t: number) => {
          if (t < 0) t += 1
          if (t > 1) t -= 1
          if (t < 1/6) return p + (q - p) * 6 * t
          if (t < 1/2) return q
          if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
          return p
        }
        const r = Math.round(hue2rgb(h + 1/3) * 255)
        const g = Math.round(hue2rgb(h)       * 255)
        const b = Math.round(hue2rgb(h - 1/3) * 255)
        cached = `rgb(${r},${g},${b})`
        colourCache.set(key, cached)
      }
      return cached
    }

    // ── Resize (debounced) ───────────────────────────────────────────────────
    function applyResize() {
      cvs.width  = cvs.offsetWidth
      cvs.height = cvs.offsetHeight
      dirty = true
    }
    applyResize()

    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(applyResize, RESIZE_DEBOUNCE_MS)
    })
    ro.observe(cvs)

    // ── Mouse ────────────────────────────────────────────────────────────────
    const section = cvs.parentElement
    function onMove(e: MouseEvent) {
      const r = cvs.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
      dirty = true
    }
    function onLeave() { mouseRef.current = { x: -9999, y: -9999 }; dirty = true }
    section?.addEventListener('mousemove', onMove)
    section?.addEventListener('mouseleave', onLeave)

    // ── Visibility: pause when tab is hidden ─────────────────────────────────
    function onVisibility() {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(animId)
      } else {
        running = true
        dirty = true
        lastWaveTick = 0   // reset so wave doesn't jump
        animId = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    // ── IntersectionObserver: pause when hero off-screen ─────────────────────
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          running = true
          dirty = true
          lastWaveTick = 0
          animId = requestAnimationFrame(draw)
        } else {
          running = false
          cancelAnimationFrame(animId)
        }
      },
      { threshold: 0 }
    )
    io.observe(cvs)

    // ── Draw loop ────────────────────────────────────────────────────────────
    function draw(now: number) {
      if (!running) return

      // Advance wave at WAVE_FPS
      if (now - lastWaveTick >= WAVE_MS) {
        t += (1 / WAVE_FPS) * WAVE_SPEED
        lastWaveTick = now
        dirty = true
      }

      if (!dirty) {
        animId = requestAnimationFrame(draw)
        return
      }
      dirty = false

      const W    = cvs.width
      const H    = cvs.height
      const GRID = W <= 640 ? GRID_MOBILE : GRID_DESKTOP

      c.clearRect(0, 0, W, H)

      const originX = W / 2
      // Center the grid: place the middle tile (GRID/2, GRID/2) at canvas center
      const originY = H / 2 - (GRID * TH) / 2
      const lx = W * 0.38
      const ly = -H * 0.4

      // Base lightness values (theme-dependent, constant per frame)
      const bTop   = dark ? 20 : 74
      const bLeft  = dark ? 13 : 60
      const bRight = dark ?  9 : 52

      for (let row = 0; row < GRID; row++) {
        for (let col = 0; col < GRID; col++) {
          const sx = originX + (col - row) * (TW / 2)
          const sy = originY + (col + row) * (TH / 2)

          if (sx < -TW * 2 || sx > W + TW * 2) continue
          if (sy < -TH * 5 || sy > H + TH * 5) continue

          // Height
          const wave  = Math.sin(col * WAVE_SCALE + row * WAVE_SCALE + t) * WAVE_AMP
          const dx    = sx - mouseRef.current.x
          const dy    = sy - mouseRef.current.y
          const mDist = Math.sqrt(dx * dx + dy * dy)
          const mLift = mDist < MOUSE_RADIUS
            ? (1 - mDist / MOUSE_RADIUS) ** 1.8 * MOUSE_LIFT
            : 0
          const ch = Math.max(3, BASE_CH + wave + mLift)

          // Top face position
          const tx = sx
          const ty = sy - ch

          // Point light factor
          const ldx   = tx - lx
          const ldy   = ty - ly
          const lf    = Math.min(1, 12000 / (ldx * ldx + ldy * ldy + 1))

          // Precomputed integer lightness → cached colour string
          const topCol   = hslColour(bTop   + lf * LIGHT_BOOST)
          const leftCol  = hslColour(bLeft  + lf * LIGHT_BOOST * 0.55)
          const rightCol = hslColour(bRight + lf * LIGHT_BOOST * 0.32)

          // Inset vertices
          const iNy = ty - TH / 2 + GAP
          const iEx = tx + TW / 2 - GAP
          const iSy = ty + TH / 2 - GAP
          const iWx = tx - TW / 2 + GAP

          // Top face
          c.beginPath()
          c.moveTo(tx,  iNy)
          c.lineTo(iEx, ty)
          c.lineTo(tx,  iSy)
          c.lineTo(iWx, ty)
          c.closePath()
          c.fillStyle = topCol
          c.fill()

          // Left face
          c.beginPath()
          c.moveTo(iWx, ty)
          c.lineTo(tx,  iSy)
          c.lineTo(tx,  iSy + ch)
          c.lineTo(iWx, ty  + ch)
          c.closePath()
          c.fillStyle = leftCol
          c.fill()

          // Right face
          c.beginPath()
          c.moveTo(tx,  iSy)
          c.lineTo(iEx, ty)
          c.lineTo(iEx, ty  + ch)
          c.lineTo(tx,  iSy + ch)
          c.closePath()
          c.fillStyle = rightCol
          c.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      section?.removeEventListener('mousemove', onMove)
      section?.removeEventListener('mouseleave', onLeave)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
