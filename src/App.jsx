import About from './components/About'
import Hero from './components/Hero'
import Membership from './components/Membership'
import Navbar from './components/Navbar'

const sections = [
  { id: 'services', title: 'Services', backgroundClass: 'bg-cream' },
  { id: 'trainers', title: 'Trainers', backgroundClass: 'bg-cream' },
  { id: 'contact', title: 'Contact us', backgroundClass: 'bg-cream' },
]

function ContentSection({ id, title, backgroundClass }) {
  return (
    <section
      id={id}
      className={`min-h-screen px-4 py-20 md:px-8 ${backgroundClass}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-ink">{title}</h2>
        <p className="mt-4 text-slate-700">Placeholder section.</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-32">
        <Hero />
        <About />
        <Membership />
        {sections.map((section) => (
          <ContentSection key={section.id} {...section} />
        ))}
      </main>
    </>
  )
}

export default App
