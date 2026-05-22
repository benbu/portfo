import type { ProjectDetailData } from './types'

export const shapeBlaster3dDetail: ProjectDetailData = {
  slug: 'shapeblaster3d',
  title: 'Shape Blaster 3D',
  year: 2025,
  tagline: 'A first-person 3D dungeon shooter built in Java with libGDX, compiled to WebGL via GWT.',
  demoUrl: '/demos/shapeblaster3d/',
  githubUrl: 'https://github.com/benbu/shapeblaster3d',
  imageUrl: '/images/shapeblaster3d.gif',
  videoUrl: '/video/shapeblaster3d.mp4',
  techTags: ['Java', 'libGDX', 'GWT', 'WebGL', 'OpenGL ES 2.0', 'Gradle'],
  overview: `Shape Blaster 3D is a first-person dungeon shooter where you fight through procedurally generated levels populated by geometric enemies — cubes, pyramids, and spheres — each with distinct movement patterns and detection behaviors. Levels are built from rectangular rooms connected by cardinal corridors, with locked doors, key-carrying enemies, weapon upgrade pedestals, and a secret room per level. The game compiles to WebGL via GWT and runs entirely in the browser.`,
  features: [
    {
      title: 'Procedural Level Generation',
      body: 'Each level is generated at runtime using a BFS expansion algorithm: a spawn room seeds outward, placing rectangular rooms connected by cardinal corridors. The generator probes for blank space before committing each room, resolves overlaps, and places a secret room in the farthest reachable corner. Doors, keys, and weapon upgrades are distributed across the graph.',
    },
    {
      title: 'Enemy AI',
      body: 'Three enemy archetypes — CUBE, PYRAMID, and SPHERE — each with a finite state machine cycling through idle, mosey, alerted, and returning states. Detection uses a line-of-sight cone plus a hearing radius that triggers on gunshots. Enemies have per-type speed, health scaling by level, and contact damage accumulated in floating point to avoid per-frame truncation.',
    },
    {
      title: 'Hitscan Combat',
      body: 'Firing casts a ray from the player camera projected onto the 2D XY plane, testing against each enemy\'s collision circle. The closest intersecting enemy takes damage. Weapon tier upgrades increase damage and change the HUD color. A muzzle flash appears at the crosshair on each shot.',
    },
    {
      title: 'Key and Door System',
      body: 'Specific enemies carry colored keys, dropping them on death. Collecting a key of the matching color unlocks the corresponding door, removing its wall collision segment and model. Multiple key colors can exist per level, gating off sections of the map until the carrier is found and killed.',
    },
    {
      title: 'Lighting and Rendering',
      body: 'Each room has a ceiling point light contributing to libGDX\'s deferred-style environment lighting. A custom shader config supports up to 12 simultaneous point lights. The skybox renders a procedural gradient. Walls use a backface-culling-disabled material so they are visible from inside rooms without needing doubled geometry.',
    },
    {
      title: 'Map Overlay',
      body: 'Pressing M opens a 2D top-down map of the level drawn in screen space, showing room outlines, corridors, doors, keys, upgrades, enemies, and the player\'s current position and heading. The map pauses game logic while open.',
    },
  ],
  technicalHighlights: [
    'GWT compilation target: all game code is Java 11 with no reflection, no runtime class loading, and no APIs unsupported by the GWT stdlib — necessary for cross-compilation to JavaScript/WebGL.',
    'BFS room expansion with blank-space probing: each candidate room performs forward and lateral axis-aligned bounding box tests against all committed geometry before being accepted, preventing overlaps without a global grid.',
    'Float damage accumulation: contact damage is expressed as damage-per-second (float). Rather than casting to int per frame (which truncates to zero at 60 FPS), a float accumulator in GameState drains whole-number points only when >= 1.',
    'Procedural floor texture: a 64×64 Pixmap with 16px stone tiles and 2px grout lines is generated at startup, uploaded as a mipmapped texture, and UV-mapped to world coordinates so tiles scale consistently across rooms and corridors of different sizes.',
    'Secret room patching: the secret corridor is added after wall segments are built, so a post-pass scans the target wall for the opening and splits the affected segment — the same notch-splitting logic used by the main generator.',
    'Enemy model cache: ModelInstance objects are created once per enemy slot and reused each frame with updated transforms, avoiding per-frame allocation on the GC-sensitive GWT runtime.',
    'Per-enemy screen-space health bars: enemy world positions are projected through the camera\'s view-projection matrix each frame. The bar renders just above the top of the model using renderZ + collisionRadius, tracking the enemy accurately as it moves.',
  ],
  designDecisions: [
    {
      decision: 'Rectangular rooms only',
      rationale: 'Earlier iterations used polygon-based rooms (ellipses, n-gons, blobs). These produced interesting shapes but made corridor attachment, overlap detection, and floor triangulation significantly more complex. Switching to axis-aligned rectangles simplified every downstream system while keeping the level layouts varied through room sizing and BFS branching.',
    },
    {
      decision: 'Hitscan over projectile bullets',
      rationale: 'Projectile bullets require per-frame position updates, collision checks against both walls and enemies, and visual representation — all multiplied by fire rate. Hitscan resolves in a single ray cast per shot with no ongoing state. At the scale of this game the gameplay feel difference is negligible and the implementation cost is dramatically lower.',
    },
    {
      decision: '2D collision on a 3D world',
      rationale: 'All movement, wall collision, and combat happen on the XY plane at a fixed camera height. Enemies differ only in their render Z offset. This keeps collision geometry simple (line segments and circles) and eliminates edge cases from 3D physics while still producing a convincing first-person perspective.',
    },
    {
      decision: 'GWT/WebGL compilation',
      rationale: 'Targeting WebGL via GWT means the game runs in any browser with no install — critical for a portfolio piece. The constraints it imposes (no reflection, limited stdlib) are manageable in a focused game codebase and libGDX has mature GWT support.',
    },
  ],
}
