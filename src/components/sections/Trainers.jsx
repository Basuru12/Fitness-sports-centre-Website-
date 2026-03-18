import TrainerCard from '../ui/TrainerCard'

const TRAINERS = [
  {
    id: 'alex',
    name: 'Alex Carter',
    imageSrc: '/Alex Carter.png',
    imageAlt: 'Alex Carter, strength and muscle building trainer',
    bio: 'Specializing in strength training and muscle building, Alex helps clients develop power, endurance, and proper lifting techniques. With a focus on progressive overload and injury prevention, he ensures safe and effective workouts for all levels.',
  },
  {
    id: 'sophia',
    name: 'Sophia Lee',
    imageSrc: '/Sophia Lee.png',
    imageAlt: 'Sophia Lee, fitness and nutrition trainer',
    bio: 'Sophia combines workout routines with personalized nutrition guidance to deliver balanced, sustainable results. She focuses on fat loss, toning, and overall wellness, helping clients build healthy habits that last.',
  },
  {
    id: 'ryan',
    name: 'Ryan Brooks',
    imageSrc: '/Ryan Brooks.png',
    imageAlt: 'Ryan Brooks, functional fitness and HIIT trainer',
    bio: 'Ryan specializes in functional fitness and high-intensity training designed to improve everyday strength and mobility. His dynamic sessions are energetic, goal-driven, and perfect for those looking to boost performance and agility.',
  },
]

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="min-h-screen bg-cream px-4 py-20 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-ink">Meet the trainers</h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {TRAINERS.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              name={trainer.name}
              imageSrc={trainer.imageSrc}
              imageAlt={trainer.imageAlt}
              bio={trainer.bio}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
