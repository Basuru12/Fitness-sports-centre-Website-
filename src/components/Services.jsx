import InfoCard from './InfoCard'

const CARD_1 = {
  title: 'Get Instant Access To Modern Equipment!',
  description:
    "Train with confidence using our state-of-the-art gym equipment, designed to support every fitness level. Our facility features over 100+ premium machines and free weights, including squat racks, cable systems, benches, and cardio equipment. With a wide range of dumbbells and plates from 2kg up to 50kg+, you can progressively build strength, improve endurance, and achieve your fitness goals efficiently. Whether you're a beginner or an advanced lifter, our modern equipment ensures a safe, effective, and high-performance workout experience.",
  imageAlt: 'Modern gym equipment including barbell and weight plates',
  imageSrc: '/weights.png',
}

const CARD_2 = {
  title: 'Get the Right nutrients!',
  description:
    'Get personalized nutrition guidance designed to match your fitness goals. Our plans focus on balanced meals, portion control, and sustainable eating habits not extreme diets. Whether your goal is fat loss, muscle gain, or overall health, we provide easy-to-follow meal suggestions, calorie guidance, and practical tips you can maintain long-term. Stay energized, recover faster, and see real results with the right fuel.',
  imageAlt: 'Healthy foods and supplements for nutrition',
  imageSrc: '/nutrients.png',
}

export default function Services() {
  return (
    <section id="services" className="min-h-screen bg-cream px-2 py-20 md:px-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-12 md:grid-cols-2">
          <InfoCard {...CARD_1} />
          <InfoCard {...CARD_2} />
        </div>
      </div>
    </section>
  )
}

