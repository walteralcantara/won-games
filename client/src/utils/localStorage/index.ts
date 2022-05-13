const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  // on Next SSR/SSG doesnt has window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[]) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
