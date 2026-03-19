import { HEADING_PRIMARY_CLASS } from '../../constants/headingClasses'
import PricingCard from '../ui/PricingCard'

const PLANS = [
  {
    id: 'monthly',
    title: 'Monthly Package',
    priceLabel: 'Rs. 5000',
    perks: ['unlimited access to gym equipment', 'one week of free yoga classes'],
  },
  {
    id: 'quarterly',
    title: '3 Month Package',
    priceLabel: 'Rs. 13500',
    perks: [
      'unlimited access to gym equipment',
      'Save rs 1500',
      'one month of free yoga classes',
    ],
  },
  {
    id: 'yearly',
    title: 'Yearly Package',
    priceLabel: 'Rs. 48000',
    perks: [
      'unlimited access to gym equipment',
      'Save rs 12000',
      'free access to yoga classes',
    ],
  },
]

function softWrap(text) {
  return String(text).split('\n').map((part, idx) =>
    idx === 0 ? (
      part
    ) : (
      <>
        <br />
        {part}
      </>
    ),
  )
}

export default function Membership() {
  return (
    <section id="membership" className="min-h-screen bg-cream px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className={HEADING_PRIMARY_CLASS}>Choose a package</h2>

        <div className="mt-24 grid grid-cols-1 items-stretch justify-items-center gap-14 md:grid-cols-3 md:gap-16">
          {PLANS.map((plan) => (
            <div key={plan.id} className="flex h-full w-full justify-center md:max-w-none">
              <PricingCard
              title={softWrap(plan.title)}
              priceLabel={plan.priceLabel}
              perks={plan.perks.map((perk) => softWrap(perk))}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

