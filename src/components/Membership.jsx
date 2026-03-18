function MembershipCard({ title, description, imageAlt }) {
  return (
    <article className="flex flex-col">
      <div
        className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-stone-400 to-ink"
        role="img"
        aria-label={imageAlt}
      />
      <h2 className="mt-6 text-center text-xl font-bold text-ink md:text-2xl">
        {title}
      </h2>
      <p className="mt-4 text-center text-base leading-relaxed text-ink">
        {description}
      </p>
    </article>
  )
}

const CARD_1 = {
  title: 'Get Instant Access To Modern Equipment!',
  description:
    "Train with confidence using our state-of-the-art gym equipment, designed to support every fitness level. Our facility features over 100+ premium machines and free weights, including squat racks, cable systems, benches, and cardio equipment. With a wide range of dumbbells and plates from 2kg up to 50kg+, you can progressively build strength, improve endurance, and achieve your fitness goals efficiently. Whether you're a beginner or an advanced lifter, our modern equipment ensures a safe, effective, and high-performance workout experience.",
  imageAlt: 'Modern gym equipment including barbell and weight plates',
}

const CARD_2 = {
  title: 'Get the Right nutrients!',
  description:
    'Get personalized nutrition guidance designed to match your fitness goals. Our plans focus on balanced meals, portion control, and sustainable eating habits not extreme diets. Whether your goal is fat loss, muscle gain, or overall health, we provide easy-to-follow meal suggestions, calorie guidance, and practical tips you can maintain long-term. Stay energized, recover faster, and see real results with the right fuel.',
  imageAlt: 'Healthy foods and supplements for nutrition',
}

export default function Membership() {
  return (
    <section
      id="membership"
      className="min-h-screen bg-cream px-4 py-20 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <MembershipCard
            title={CARD_1.title}
            description={CARD_1.description}
            imageAlt={CARD_1.imageAlt}
          />
          <MembershipCard
            title={CARD_2.title}
            description={CARD_2.description}
            imageAlt={CARD_2.imageAlt}
          />
        </div>
      </div>
    </section>
  )
}
