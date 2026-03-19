import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { THEME_STORAGE_KEY } from '../constants/theme'

const ThemeContext = createContext(
  /** @type {{ preference: import('../constants/theme').ThemePreference; setPreference: (p: import('../constants/theme').ThemePreference) => void; toggleTheme: () => void; effectiveDark: boolean } | null} */ (
    null
  ),
)

/** Migrate legacy `system` or unknown values to `light`. */
function normalizePreference(raw) {
  if (raw === 'dark' || raw === 'light') return raw
  return 'light'
}

function readStoredPreference() {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    const next = normalizePreference(raw)
    if (raw !== next) {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    }
    return next
  } catch {
    /* ignore */
  }
  return 'light'
}

function applyDocumentClass(dark) {
  document.documentElement.classList.toggle('dark', dark)
}

export function ThemeProvider({ children }) {
  const [preference, setPreferenceState] = useState(() => readStoredPreference())

  const effectiveDark = useMemo(() => preference === 'dark', [preference])

  useEffect(() => {
    applyDocumentClass(effectiveDark)
  }, [effectiveDark])

  const setPreference = useCallback(
    /** @param {import('../constants/theme').ThemePreference} next */ (next) => {
      setPreferenceState(next)
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      applyDocumentClass(next === 'dark')
    },
    [],
  )

  const toggleTheme = useCallback(() => {
    setPreference(preference === 'dark' ? 'light' : 'dark')
  }, [preference, setPreference])

  const value = useMemo(
    () => ({
      preference,
      setPreference,
      toggleTheme,
      effectiveDark,
    }),
    [preference, setPreference, toggleTheme, effectiveDark],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
