import { HEADING_PRIMARY_LEFT_CLASS } from '../../constants/headingClasses'
import CardImage from './CardImage'

export default function LongInfoCard({ title, description, imageAlt, imageSrc }) {
  return (
    <article className="flex flex-col">
      <h2 className={HEADING_PRIMARY_LEFT_CLASS}>{title}</h2>

      <div className="mt-6">
        <CardImage
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          className="mx-auto w-full max-w-none md:max-w-5xl"
        />
      </div>

      <p className="mt-4 mx-auto max-w-prose text-center text-xl leading-relaxed text-ink md:text-xl">
        {description}
      </p>
    </article>
  )
}

