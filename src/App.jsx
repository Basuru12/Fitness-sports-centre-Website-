import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-32">
        <section
          id="about"
          className="min-h-screen bg-slate-800 px-4 py-20 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white">About us</h2>
            <p className="mt-4 text-gray-300">Placeholder section.</p>
          </div>
        </section>
        <section
          id="membership"
          className="min-h-screen bg-slate-800 px-4 py-20 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white">Membership</h2>
            <p className="mt-4 text-gray-300">Placeholder section.</p>
          </div>
        </section>
        <section
          id="services"
          className="min-h-screen bg-slate-900 px-4 py-20 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white">Services</h2>
            <p className="mt-4 text-gray-300">Placeholder section.</p>
          </div>
        </section>
        <section
          id="trainers"
          className="min-h-screen bg-slate-800 px-4 py-20 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white">Trainers</h2>
            <p className="mt-4 text-gray-300">Placeholder section.</p>
          </div>
        </section>
        <section
          id="contact"
          className="min-h-screen bg-slate-800 px-4 py-20 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white">Contact us</h2>
            <p className="mt-4 text-gray-300">Placeholder section.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
