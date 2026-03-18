import InfoCard from './InfoCard'
import LongInfoCard from './LongInfoCard'

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

const LONG_CARD_1 = {
  title: 'Join one of our Group Classes',
  description:
    'Stay motivated and push your limits with our high-energy group classes led by certified trainers. From HIIT and strength training to yoga and functional workouts, each session is designed to improve fitness while keeping it fun and engaging. Train alongside others, build consistency, and enjoy a supportive environment that helps you stay committed and reach your goals faster.',
  imageAlt: 'Group class practicing yoga or stretching in a modern gym',
  imageSrc: '/group_classes.jpg',
}

const LONG_CARD_2 = {
  title: 'Hire a personal trainer',
  description:
    "Take your fitness to the next level with one-on-one training tailored just for you. Our certified personal trainers create custom workout plans based on your goals whether it's fat loss, muscle gain, or overall fitness. Get expert guidance, proper form correction, and continuous motivation to ensure faster, safer, and more effective results.",
  imageAlt: 'Personal trainer assisting client with kettlebell workout',
  imageSrc: '/Personal_training.jpg',
}

export default function Services() {
  return (
    <section id="services" className="min-h-screen bg-cream px-2 py-20 md:px-4">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-12 md:grid-cols-2">
          <InfoCard {...CARD_1} />
          <InfoCard {...CARD_2} />
        </div>

        <div className="mt-20 flex flex-col gap-20">
          <LongInfoCard {...LONG_CARD_1} />
          <LongInfoCard {...LONG_CARD_2} />
        </div>
      </div>
    </section>
  )
}

