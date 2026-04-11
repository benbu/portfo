import type { ProjectDetailData } from './types'

export const penguinPerilDetail: ProjectDetailData = {
  slug: 'penguin-peril',
  title: 'Penguin Peril',
  year: 2015,
  tagline: 'An endless survival game for Android and Windows where a low-poly penguin dodges an accelerating rain of icicles while the camera slowly zooms out to reveal a wider, more chaotic arena.',
  demoUrl: '/demos/PenguinPeril/',
  githubUrl: 'https://github.com/benbu/PenguinPeril',
  imageUrl: '/images/penguin.gif',
  videoUrl: '/video/penguin.mp4',
  techTags: ['Unity', 'C#', 'Android', 'Windows', 'Google Play Games SDK', 'Object Pooling'],
  overview: `Penguin Peril is an endless survival game where the player controls a low-poly penguin dodging a relentless rain of icicles falling from the sky. As time passes, icicles fall faster and the camera zooms out to reveal a wider, more chaotic arena — the longer you survive, the harder it gets. Icicles occasionally carry gems that shatter free on impact, adding a risk/reward layer to movement. Scores are saved locally and submitted to Google Play Games leaderboards. Released as both an Android APK and a Windows standalone build.`,
  features: [
    {
      title: 'Core Survival Loop',
      body: 'Icicles spawn randomly and accelerate downward over time. One hit depletes health; enough damage ends the run. The player wraps around horizontal edges, and the camera gradually zooms out — expanding the play area and creating a tense balance between visibility and reaction time.',
    },
    {
      title: 'Gem Collection',
      body: 'Icicles occasionally carry gems. When an icicle shatters on the ground, the gem ejects outward with physics-based bounce. Collecting gems adds a 1000x bonus to the final score, rewarding aggressive play over pure evasion.',
    },
    {
      title: 'Dynamic Difficulty',
      body: 'Icicle spawn rate and fall speed both accelerate as score increases, keeping runs tense regardless of skill level. The camera zoom compounds the pressure — more icicles become visible but also harder to track.',
    },
    {
      title: 'Cosmetic Hat Shop',
      body: 'A 3D rotating hat wheel lets players browse and equip hats on their penguin, persisted across sessions via PlayerPrefs. Supports touch-drag with physics-based scroll inertia on mobile and button-based navigation on desktop and gamepad.',
    },
    {
      title: 'Google Play Games',
      body: 'Full Google Play Games SDK integration for Android: sign-in authentication, leaderboard score submission at run end, and in-game leaderboard UI display. Personal best is also saved locally for offline play.',
    },
    {
      title: 'Responsive Layout',
      body: 'Detects screen resolution changes at runtime and recalculates world boundaries, icicle spawn zones, and menu scaling to support any aspect ratio across PC and mobile without separate scene setups.',
    },
  ],
  technicalHighlights: [
    'Object pooling for icicles and gems: pre-instantiated pools are recycled each spawn cycle to avoid runtime allocation spikes during peak icicle density.',
    'Physics-based gem ejection on icicle impact — gems inherit collision velocity and bounce outward, making their landing position unpredictable and collection skill-dependent.',
    'Cross-platform input via Unity\'s CrossPlatformInputManager: the same movement and UI code handles keyboard, gamepad, and touch without platform-specific branches.',
    'Camera zoom is tied directly to elapsed survival time, creating an ever-widening arena without changing the underlying world geometry.',
    'Hat shop scroll wheel uses physics-based inertia: drag velocity is sampled on release and decays over time, giving the wheel a tactile feel on both touch and mouse.',
    'Google Play Games sign-in is non-blocking: the game runs fully offline if authentication fails, submitting the cached score on next successful login.',
    'Day/night cycle implemented as a slowly rotating directional light, giving each run a subtle ambient shift without any shader complexity.',
  ],
  designDecisions: [
    { decision: 'Camera zoom as difficulty', rationale: 'Rather than simply spawning more icicles, zooming the camera out expands the arena dynamically. The player gains more reaction space but loses the ability to focus on a small area — a natural difficulty curve without tuning individual parameters.' },
    { decision: 'Gem ejection on impact', rationale: 'Tying gem collection to icicle impacts means the player must move toward the danger zone to score the bonus. It creates a moment of deliberate risk on every icicle hit rather than gems just dropping in a safe area.' },
    { decision: 'Object pooling', rationale: 'At high difficulty the icicle spawn rate becomes very high. Instantiating and destroying GameObjects at that frequency causes noticeable frame hitches on mid-range Android hardware. Pre-allocated pools keep frame time flat throughout a run.' },
    { decision: 'Horizontal wrapping', rationale: 'Wrapping the player across horizontal edges eliminates dead zones at the screen edges and keeps movement options open at all times, preventing the corner-trapping failure mode common in dodge games.' },
  ],
}
