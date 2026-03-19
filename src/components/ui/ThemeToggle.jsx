import { useTheme } from '../../context/ThemeContext'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeToggle({ className = '' }) {
  const { preference, toggleTheme } = useTheme()

  const isDark = preference === 'dark'
  const Icon = isDark ? SunIcon : MoonIcon
  const label = isDark
    ? 'Switch to light mode'
    : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`rounded-lg p-2 transition-colors hover:bg-[var(--color-nav-hover)] focus:outline-none focus:ring-2 focus:ring-ink ${className}`}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <Icon className="h-6 w-6 text-ink" />
    </button>
  )
}
