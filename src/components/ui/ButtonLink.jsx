const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-hero-text focus:ring-offset-2 focus:ring-offset-transparent'

const variantClasses = {
  filled: 'bg-[var(--color-cta-pill-bg)] text-[var(--color-cta-pill-text)]',
  outline: 'border-2 border-[var(--color-hero-text)] text-[var(--color-hero-text)]',
}

export default function ButtonLink({
  href,
  variant = 'filled',
  children,
  className = '',
}) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(' ')
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}

