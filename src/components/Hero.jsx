export default function Hero() {
  const backgroundImageUrl = '/hero.png'

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream bg-cover bg-center bg-no-repeat px-4 py-20 md:px-8"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col justify-center md:min-h-[calc(100vh-8rem)]">
        <h1 className="text-4xl font-bold tracking-tight text-cream md:text-5xl lg:text-6xl">
          Transform Your Fitness
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream">
          Your journey to a stronger, healthier you starts here. Expert trainers, modern facilities, and a community that supports your goals.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#membership"
            className="rounded-lg bg-cream px-6 py-3 font-medium text-ink transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Join Now
          </a>
          <a
            href="#services"
            className="rounded-lg border-2 border-cream px-6 py-3 font-medium text-cream transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
