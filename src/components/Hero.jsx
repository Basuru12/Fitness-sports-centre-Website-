export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-slate-800 px-4 py-20 md:px-8"
    >
      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col justify-center md:min-h-[calc(100vh-8rem)]">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Transform Your Fitness
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-300">
          Your journey to a stronger, healthier you starts here. Expert trainers, modern facilities, and a community that supports your goals.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#membership"
            className="rounded-lg bg-[#F2F2F0] px-6 py-3 font-medium text-slate-900 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Join Now
          </a>
          <a
            href="#services"
            className="rounded-lg border-2 border-[#F2F2F0] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
