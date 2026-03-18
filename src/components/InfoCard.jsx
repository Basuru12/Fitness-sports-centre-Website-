export default function InfoCard({ title, description, imageAlt, imageSrc }) {
  return (
    <article className="flex flex-col">
      {imageSrc ? (
        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-stone-400 to-ink"
          role="img"
          aria-label={imageAlt}
        />
      )}

      <h2 className="mt-6 text-center text-xl font-bold text-ink md:text-2xl">
        {title}
      </h2>

      <p className="mt-4 text-theme-body">{description}</p>
    </article>
  )
}

