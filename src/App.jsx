import About from './components/sections/About'
import Contact from './components/sections/Contact'
import { HEADING_PRIMARY_CLASS } from './constants/headingClasses'
import Hero from './components/sections/Hero'
import Membership from './components/sections/Membership'
import Navbar from './components/sections/Navbar'
import Services from './components/sections/Services'
import Trainers from './components/sections/Trainers'

const sections = []

function ContentSection({ id, title, backgroundClass }) {
  return (
    <section
      id={id}
      className={`min-h-screen px-4 py-20 md:px-8 ${backgroundClass}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className={HEADING_PRIMARY_CLASS}>{title}</h2>
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
        <Services />
        <Membership />
        <Trainers />
        <Contact />
        {sections.map((section) => (
          <ContentSection key={section.id} {...section} />
        ))}
      </main>
    </>
  )
}

export default App
