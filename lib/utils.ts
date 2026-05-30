export const basePath = '/portfolio';

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}
