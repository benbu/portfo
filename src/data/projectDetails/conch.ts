import type { ProjectDetailData } from './types'

export const conchDetail: ProjectDetailData = {
  slug: 'conch',
  title: 'Conch',
  year: 2025,
  tagline: 'A cross-platform messenger with a built-in AI productivity suite for remote teams.',
  demoUrl: 'https://drive.google.com/file/d/17c8nWgiFelOHiy9QIVduWsGoJFOz0jOZ/view?usp=sharing',
  demoLabel: 'Download APK',
  githubUrl: 'https://github.com/benbu/conch',
  videoUrl: 'https://drive.google.com/file/d/1Fgotb590pz8B4K7eQeZo90HA5Ui7e58n/preview',
  videoIsEmbed: true,
  imageUrl: '/images/conch.gif',
  techTags: ['React Native', 'Expo SDK 54', 'TypeScript', 'Firebase', 'GPT-4 Turbo', 'Vercel AI SDK', 'Zustand', 'Detox'],
  overview: `Conch is a full-featured mobile messenger built from the ground up for remote teams who need more than just a chat app. It covers real-time 1:1 and group messaging with full delivery status tracking, then layers an AI productivity suite on top — thread summaries, action item extraction, decision tracking, and priority detection — all triggered explicitly by the user and processed server-side. The result is a messenger that helps distributed teams stay organized across time zones without trading away privacy or predictability.`,
  features: [
    {
      title: 'Real-Time Messaging',
      body: '1:1 and group conversations with typing indicators, read receipts, and four-stage delivery status: sending → sent → delivered → read. Powered by Firestore real-time listeners.',
    },
    {
      title: 'Offline-First Design',
      body: 'Undelivered messages queue locally in AsyncStorage and retry with exponential backoff. Optimistic UI updates keep the experience snappy regardless of network state.',
    },
    {
      title: 'AI Productivity Suite',
      body: 'On-demand thread summaries, action item extraction, decision tracking, and priority detection — all processed server-side via Vercel AI SDK + GPT-4 Turbo. Every feature requires an explicit user action; no background AI processing.',
    },
    {
      title: 'Push Notifications',
      body: 'FCM-powered alerts via Firebase Cloud Functions that trigger on new messages, keeping users informed across Android, iOS, and Web.',
    },
    {
      title: 'Global Search',
      body: 'Unified search across messages, conversations, and users. Local search runs instantly; if it returns ≤3 results, a deeper server-side search is automatically triggered and merged.',
    },
    {
      title: 'Presence & Profiles',
      body: 'Real-time online/offline indicators with custom status and an "appear offline" override. Profile editing includes photo uploads, display names, bios, and time zone preferences.',
    },
  ],
  technicalHighlights: [
    'Repository pattern via custom hooks — useConversations(), useMessages(), and useAISummary() encapsulate Firestore subscriptions, loading state, and error handling, keeping screens thin.',
    'Zustand with AsyncStorage persistence middleware for global client state — simpler than Redux with built-in offline durability.',
    'Zero-trust security — Firestore Security Rules enforce access control at the database level; AI features are server-side only to protect API keys; all critical operations validated in Cloud Functions.',
    'Image attachments use client-side compression via expo-image-manipulator before uploading to Firebase Cloud Storage, reducing bandwidth and storage costs.',
    'Full test coverage: Detox for E2E flows, Jest + React Native Testing Library for unit/integration tests, Firebase Emulators for backend isolation.',
    'Cross-platform target: Android, iOS, and Web from a single Expo Router codebase.',
  ],
  designDecisions: [
    { decision: 'User-initiated AI only', rationale: 'No background AI processing — every AI feature requires an explicit user action. This keeps usage transparent, costs predictable, and avoids the feeling of being monitored.' },
    { decision: 'Offline queue with backoff', rationale: 'Treating network unavailability as a normal state rather than an error keeps the UX smooth. Messages optimistically appear sent and reconcile when connectivity returns.' },
    { decision: 'Server-side AI only', rationale: 'Running all AI calls through Cloud Functions keeps API keys off the client entirely, and means AI logic can be updated without shipping a new app binary.' },
    { decision: 'Search escalation', rationale: 'Running local search first gives instant results in the common case. Server-side escalation only fires when local results are sparse, balancing speed against thoroughness.' },
  ],
}
