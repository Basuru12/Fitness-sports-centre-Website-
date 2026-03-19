import CardImage from './CardImage'
import { INFO_CARD_INTERACTION_CLASS } from '../../constants/infoCardStyles'

export default function TrainerCard({ name, imageSrc, imageAlt, bio }) {
  return (
    <article className={`flex flex-col rounded-2xl ${INFO_CARD_INTERACTION_CLASS}`}>
      <CardImage
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        className="aspect-[3/4] rounded-xl"
      />
      <h3 className="mt-4 text-xl font-bold text-ink">{name}</h3>
      <p className="mt-2 text-base leading-relaxed text-ink">{bio}</p>
    </article>
  )
}
