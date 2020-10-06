export const trimTrailingSlash = function (s: string) {
  return s.replace(/\/+$/, '')
}
