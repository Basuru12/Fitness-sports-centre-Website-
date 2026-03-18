export default function CardImage({ imageSrc, imageAlt, className = '' }) {
  const baseClasses = [
    'aspect-[16/9] w-full overflow-hidden rounded-2xl',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (imageSrc) {
    return (
      <div className={baseClasses}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={`${baseClasses} bg-gradient-to-br from-stone-400 to-ink`}
      role="img"
      aria-label={imageAlt}
    />
  )
}

