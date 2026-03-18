const baseClasses =
  'rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950'

const variantClasses = {
  filled: 'bg-cream text-ink',
  outline: 'border-2 border-cream text-cream',
}

export default function ButtonLink({ href, variant = 'filled', children, className = '' }) {
  const classes = [baseClasses, variantClasses[variant], className].filter(Boolean).join(' ')
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
