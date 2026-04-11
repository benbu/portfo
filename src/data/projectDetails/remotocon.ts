import type { ProjectDetailData } from './types'

export const remotoconDetail: ProjectDetailData = {
  slug: 'remotocon',
  title: 'Remotocon',
  year: 2012,
  tagline: 'A remote control system for controlling a Windows PC from an Android phone over a custom XML-RPC-over-TCP protocol.',
  demoUrl: '#',
  githubUrl: 'https://github.com/benbu/remotocon',
  imageUrl: '/images/project-remotocon.svg',
  techTags: ['C#', '.NET', 'WinForms', 'Java', 'Android SDK', 'XML-RPC', 'TCP Sockets'],
  overview: `Remotocon is a remote control system consisting of a Windows server application (C#/.NET WinForms) and an Android client app (Java) that communicate over a custom XML-RPC-over-TCP protocol. The server runs as a system-tray application on the PC and exposes a plugin architecture that lets both sides be extended independently. The Android app connects to the server, retrieves the list of available plugins, and launches the corresponding Android-side activity for each one.`,
  features: [
    {
      title: 'Windows Server',
      body: 'A .NET WinForms system-tray app that listens on a configurable TCP port. Accepts one connection per thread with a 30-minute session timeout per IP. Incoming XML-RPC requests are parsed and dispatched via reflection to registered handler objects.',
    },
    {
      title: 'Authentication',
      body: 'Each new IP must call Server.Login(username, password) first. Successful logins are tracked by IP in a dictionary. Subsequent calls within the session window skip re-authentication. Credentials and port are configurable via a settings form.',
    },
    {
      title: 'Plugin Architecture',
      body: 'The server scans a Plugins/ directory for .dll files and loads any that implement IServerPlugin, registering them automatically. Plugins can also be downloaded and installed at runtime. The server reports available plugins with their Android package names so the phone knows which APK to launch.',
    },
    {
      title: 'Android Client',
      body: 'A Java Android app with a main screen showing connected PCs and available plugins. Multiple PC connections can be stored and managed via ClientManager, persisted in SharedPreferences. On connect, the app fetches the plugin list and builds the corresponding Android-side plugin objects.',
    },
    {
      title: 'File Manager Plugin',
      body: 'A built-in plugin on both sides. The server exposes FileManagerHandler.ListDirectory over XML-RPC; the Android side presents a navigable file and directory list. Demonstrates the end-to-end plugin contract between server .dll and Android APK.',
    },
    {
      title: 'Custom Installer',
      body: 'A multi-step WinForms installer wizard (Welcome, License, Install Location, Configure, Progress, Finish) handles deployment of the server application alongside a Visual Studio Setup project.',
    },
  ],
  technicalHighlights: [
    'Custom XML-RPC implementation over raw TCP sockets on both ends (XmlRpcRequest.cs on the server, XmlRpcClient.java on Android) with no third-party RPC library.',
    'Reflection-based RPC dispatch on the server: handler methods are called by name via MethodInfo.Invoke, making it straightforward to add new RPC endpoints without extra routing code.',
    'Plugin system spans both platforms: server plugins are .dll files, Android plugins are separate APKs. The server reports each plugin name, version, and Android package name so the client can launch the right activity.',
    'Session authentication by IP with a timestamp dictionary. Simple and stateful with no per-request tokens.',
    'An Encryptor class on the Android side and Encryption.cs on the server indicate encrypted transport was planned or partially implemented.',
    'An AIDL bound service interface (IRemotoconService.aidl) exists for background connection management on Android.',
  ],
  designDecisions: [
    { decision: 'Custom XML-RPC over TCP', rationale: 'HTTP-based RPC was overkill for a LAN remote control use case. Raw TCP with a lightweight XML envelope kept latency low and avoided a full HTTP stack on the Android client of that era.' },
    { decision: 'Reflection-based dispatch', rationale: 'Using MethodInfo.Invoke to route RPC calls by method name meant new server commands could be added by just writing a handler method, with no separate routing table to maintain.' },
    { decision: 'Dual plugin model', rationale: 'Keeping server plugins as .dll files and Android plugins as APKs let each side evolve independently. The server acted as the source of truth for what was available, and the Android app just needed the package name to launch it.' },
  ],
}
