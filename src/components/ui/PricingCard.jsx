export default function PricingCard({ title, priceLabel, perks = [] }) {
  return (
    <article className="flex h-full max-w-xs flex-col overflow-hidden rounded-2xl border-4 border-charcoal bg-gold shadow-sm w-full">
      <div className="px-6 pt-10 pb-8 text-center">
        <h3 className="text-5xl font-medium leading-snug text-ink">{title}</h3>
      </div>

      <div className="border-t-4 border-charcoal px-6 py-6 text-center">
        <p className="text-2xl font-semibold text-ink">{priceLabel}</p>
      </div>

      <div className="flex flex-1 flex-col border-t-4 border-charcoal px-6 pt-4 pb-8">
        <p className="text-xl font-medium tracking-wide text-ink/90">
          Perks
        </p>
        <ul className="mt-3 list-outside list-disc space-y-2 pl-6 text-base leading-relaxed text-ink">
          {perks.map((perk, idx) => (
            <li key={idx}>{perk}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

