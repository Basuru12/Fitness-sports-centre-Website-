import CardImage from './CardImage'

export default function LongInfoCard({ title, description, imageAlt, imageSrc }) {
  return (
    <article className="flex flex-col">
      <h2 className="text-left text-xl font-bold text-ink md:text-2xl">
        {title}
      </h2>

      <div className="mt-6">
        <CardImage imageSrc={imageSrc} imageAlt={imageAlt} />
      </div>

      <p className="mt-4 text-theme-body">{description}</p>
    </article>
  )
}

