import type { ProjectDetailData } from './types'

export const collabCanvasDetail: ProjectDetailData = {
  slug: 'collab-canvas',
  title: 'Collab Canvas',
  year: 2025,
  tagline: 'A real-time collaborative whiteboard built from scratch with React, Firebase, and an AI assistant.',
  demoUrl: '/demos/collab-canvas/',
  githubUrl: 'https://github.com/benbu/collab-canvas',
  videoUrl: 'https://drive.google.com/file/d/1OId7svsNkF7M-PvrnGaxSIGhybXMdKIy/preview',
  videoIsEmbed: true,
  imageUrl: '/images/collab.gif',
  techTags: ['React 18', 'TypeScript', 'Firebase', 'Konva.js', 'OpenAI GPT-4o', 'Vite', 'Tailwind CSS', 'Vitest'],
  overview: `Collab Canvas is a multiplayer whiteboard where multiple users draw, move, and edit shapes on a shared canvas simultaneously. Think lightweight Figma or Miro — users join a room, see each other's live cursors and presence avatars in real time, and all changes sync instantly across every connected device via Firebase Realtime Database. It also includes an AI assistant that interprets natural language commands ("draw a blue rectangle in the top left") and executes structured tool calls on the canvas.`,
  features: [
    {
      title: 'Real-Time Collaboration',
      body: 'Every shape create, move, resize, and delete propagates to all connected clients in under 100ms via Firebase Realtime Database WebSocket listeners. Users see each other\'s live cursors with name labels.',
    },
    {
      title: 'Canvas & Shapes',
      body: 'Infinite pan and zoom (mouse wheel + pinch-to-zoom). Create rectangles, circles, and text. Select individually or via drag-box, then move, resize, rotate, recolor, duplicate, reorder, or delete. Multi-shape selection supports group drag.',
    },
    {
      title: 'AI Assistant',
      body: 'A prompt bar accepts natural language instructions sent to GPT-4o mini via a serverless function. The model responds with structured tool calls — create_rectangle, update_shapes, delete_shapes, etc. — which execute locally first, then sync. This local-first design means AI commands work even without a connection.',
    },
    {
      title: 'Presence & Avatars',
      body: 'Each user gets a deterministic color derived from their ID. A presence panel shows who\'s in the room. Users appear as animated pixel-art style characters that walk around the canvas — a playful layer on top of the functional whiteboard.',
    },
    {
      title: 'Authentication',
      body: 'Full auth flow: email/password sign-up, Google OAuth, or continue as a guest with no account required. Username claiming ensures unique display names. Guest mode proactively skips Firebase entirely — no errors, no friction.',
    },
    {
      title: 'Graceful Offline Handling',
      body: 'If Firebase fails, the app detects the first error, shows one dismissible notification, disables all further Firebase calls for the session, and keeps the canvas fully functional as a local drawing tool.',
    },
  ],
  technicalHighlights: [
    'Konva.js (HTML5 Canvas) over SVG/DOM — stays smooth at 500+ shapes where SVG would struggle, targeting 60 FPS via requestAnimationFrame.',
    'Shape writes throttled per-shape (~30ms) and debounced during drags. An epsilon filter skips sub-pixel writes. Batch update path handles multi-shape ops atomically.',
    'State managed with useReducer inside a useCanvasState hook — no Redux or Zustand. Firebase sync isolated in three dedicated hooks: useFirestoreSync, usePresenceSync, useCursorSync.',
    'Last-write-wins sync — simple and effective for a whiteboard where conflicts are rare. No CRDTs needed.',
    'Portable static build via npm run build:portfolio — sets correct base path, uses HashRouter so no server rewrite rules are required.',
    'Unit and integration tests via Vitest + Testing Library, with react-konva mocked at the test boundary.',
  ],
  designDecisions: [
    { decision: 'useReducer over Redux', rationale: 'All canvas state lives in a single useReducer inside useCanvasState. Keeping state local to the canvas avoided the overhead of a global store and made the action/dispatch pattern easy to test in isolation.' },
    { decision: 'Konva over SVG/DOM', rationale: 'Rendering shapes to an HTML5 Canvas via Konva.js rather than SVG keeps frame rate stable at 500+ shapes. SVG\'s per-element DOM overhead would have caused visible jank during drag and multi-select operations.' },
    { decision: 'Per-shape Firebase sync', rationale: 'Each shape is a separate Realtime Database node, so collaborators receive granular onChildChanged events rather than full-document snapshots. Combined with per-shape throttling and an epsilon filter, this keeps bandwidth low and latency under 100ms.' },
    { decision: 'Local-first AI execution', rationale: 'AI tool calls from GPT-4o mini are applied to local canvas state immediately, then synced to Firebase. This makes AI commands feel instant and keeps them fully functional regardless of connection state.' },
  ],
}
