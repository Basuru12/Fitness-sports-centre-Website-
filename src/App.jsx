import Navbar from './components/Navbar'

const sections = [
  { id: 'about', title: 'About us', backgroundClass: 'bg-slate-800' },
  { id: 'membership', title: 'Membership', backgroundClass: 'bg-slate-800' },
  { id: 'services', title: 'Services', backgroundClass: 'bg-slate-900' },
  { id: 'trainers', title: 'Trainers', backgroundClass: 'bg-slate-800' },
  { id: 'contact', title: 'Contact us', backgroundClass: 'bg-slate-800' },
]

function ContentSection({ id, title, backgroundClass }) {
  return (
    <section
      id={id}
      className={`min-h-screen px-4 py-20 md:px-8 ${backgroundClass}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-gray-300">Placeholder section.</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-32">
        {sections.map((section) => (
          <ContentSection key={section.id} {...section} />
        ))}
      </main>
    </>
  )
}

export default App
