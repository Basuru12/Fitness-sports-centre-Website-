import CardImage from './CardImage'

export default function InfoCard({ title, description, imageAlt, imageSrc }) {
  return (
    <article className="flex flex-col">
      <CardImage imageSrc={imageSrc} imageAlt={imageAlt} />

      <h2 className="mt-6 text-center text-xl font-bold text-ink md:text-2xl">
        {title}
      </h2>

      <p className="mt-4 text-theme-body">{description}</p>
    </article>
  )
}

