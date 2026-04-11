/**
 * Resolves a public asset or internal path against the Vite base URL.
 * External URLs (https://) and placeholder '#' are returned as-is.
 */
export function asset(path: string): string {
  if (!path || path === '#' || path.startsWith('http')) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
