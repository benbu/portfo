import type { ProjectDetailData } from './types'

export const clipForgeDetail: ProjectDetailData = {
  slug: 'clip-forge',
  title: 'ClipForge',
  year: 2025,
  tagline: 'A cross-platform desktop video editor for content creators who want a focused, native editing experience without the bloat.',
  demoUrl: 'https://drive.google.com/file/d/1YfsvlVjbIPT-xWHrPwYWYyGiUlL2O19D/view?usp=drive_link',
  demoLabel: 'Download for Mac',
  githubUrl: 'https://github.com/benbu/clip-forge',
  videoUrl: 'https://drive.google.com/file/d/13etFQziKReydv7kIYbfAdIwsRAutfepX/preview',
  videoIsEmbed: true,
  imageUrl: '/images/clipforge.gif',
  techTags: ['Electron v38', 'React v19', 'TypeScript', 'FFmpeg (WASM)', 'Zustand', 'Vite v7', 'Tailwind CSS v4', 'electron-builder'],
  overview: `ClipForge is a cross-platform desktop video editor built with Electron. It targets the gap between overly simple built-in screen recorders and the overwhelming complexity of tools like Adobe Premiere or Final Cut Pro. The core workflow is Record, Import, Arrange, Export, executed with minimal friction through a clean dark-themed UI. It runs natively on Windows, macOS, and Linux with no browser required and no subscription.`,
  features: [
    {
      title: 'Timeline Editor',
      body: 'Multi-clip timeline with a visual time ruler, drag-to-reorder, trim handles for in/out points, split at playhead, snap-to-grid, and zoom controls. Keyboard shortcuts: S to split, Delete to remove the selected clip.',
    },
    {
      title: 'Video Player',
      body: 'Real-time preview synced to the timeline playhead with play/pause, frame-step, scrub, volume, and mute controls. Keyboard shortcuts: Space to play/pause, arrow keys to skip, M to mute.',
    },
    {
      title: 'Screen and Webcam Recording',
      body: 'Screen and window capture via Electron desktopCapturer and webcam capture via MediaDevices. Supports simultaneous screen and webcam recording for picture-in-picture output. Recordings auto-import into the media library.',
    },
    {
      title: 'Media Library',
      body: 'Drag-and-drop import for MP4, MOV, and WebM. Automatic metadata extraction (duration, resolution, file size), thumbnail generation, and sorting and filtering controls.',
    },
    {
      title: 'Export System',
      body: 'Export the merged timeline to MP4, WebM, or MOV with quality presets at 720p, 1080p, 4K, or source resolution. FFmpeg encoding runs in a worker thread with real-time progress streaming back to the UI.',
    },
    {
      title: 'Settings and Persistence',
      body: 'Five-page settings panel covering Appearance, Editor, Recording, Export, and Advanced. Project state auto-saves to localStorage and can be saved or loaded as .clipforge files.',
    },
  ],
  technicalHighlights: [
    'Strict three-process Electron architecture: Main Process handles window management, IPC, and FFmpeg orchestration. Preload Script exposes a minimal typed contextBridge API to the renderer. Renderer is fully sandboxed (contextIsolation: true, nodeIntegration: false).',
    'All IPC channels are typed and validated on both ends, following Electron security best practices.',
    'Three Zustand stores with selective re-rendering: mediaStore (files and metadata), timelineStore (clip order, trim points, playhead), and playerStore (playback state, volume). Keeps the timeline responsive with many clips.',
    'Six service classes separate concerns cleanly: mediaService, videoService, recordingService, exportService, persistenceService, and fileUtils.',
    'FFmpeg runs via @ffmpeg/ffmpeg with a WASM core for cross-platform compatibility with no system FFmpeg installation required. Progress events stream back to the renderer in real time.',
    '31 components split between base UI primitives (Button, Modal, Toast, Dropdown, Slider) and feature components (MediaLibrary, VideoPlayer, Timeline, Clip, TimeRuler, ExportModal, and 5 settings pages).',
    'electron-builder produces platform-native installers: NSIS for Windows, DMG for macOS, AppImage and Deb for Linux.',
  ],
  designDecisions: [
    { decision: 'Three-process model', rationale: 'Keeping the renderer fully sandboxed and routing all native operations through typed IPC channels reduces the attack surface and makes the boundary between UI and system operations explicit.' },
    { decision: 'FFmpeg in a worker thread', rationale: 'Running encoding off the main process keeps the UI fully responsive during long exports and lets progress events stream back without blocking IPC.' },
    { decision: 'WASM FFmpeg', rationale: 'Using @ffmpeg/ffmpeg with a WASM core eliminates the need for a system FFmpeg installation, which simplifies packaging and makes the app portable across machines.' },
    { decision: 'Zustand over Redux', rationale: 'Three focused stores with selective subscriptions are sufficient for this domain. Zustand avoids boilerplate while still giving clear ownership of each state slice.' },
  ],
}
