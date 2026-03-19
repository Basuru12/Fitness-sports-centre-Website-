import { HEADING_PRIMARY_CLASS } from '../../constants/headingClasses'
import { INFO_CARD_ARTICLE_CLASS } from '../../constants/infoCardStyles'
import CardImage from './CardImage'

export default function InfoCard({ title, description, imageAlt, imageSrc }) {
  return (
    <article className={INFO_CARD_ARTICLE_CLASS}>
      <CardImage imageSrc={imageSrc} imageAlt={imageAlt} />

      <h2 className={`mt-6 ${HEADING_PRIMARY_CLASS}`}>{title}</h2>

      <p className="mt-4 mx-auto max-w-prose text-center text-base leading-relaxed text-ink md:text-lg">
        {description}
      </p>
    </article>
  )
}

