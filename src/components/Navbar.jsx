import { useState } from 'react'

const leftLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Membership', href: '#membership' },
]

const rightLinks = [
  { label: 'Trainers', href: '#trainers' },
  { label: 'Contact us', href: '#contact' },
]

const allMobileLinks = [
  ...leftLinks,
  { label: 'Services', href: '#services' },
  ...rightLinks,
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkClass =
    'whitespace-nowrap font-serif text-2xl text-slate-900 transition-opacity hover:opacity-80'

  const servicesSemicircleClass =
    'inline-flex h-20 w-40 items-center justify-center rounded-b-[5rem] bg-[#F2F2F0] font-medium leading-none text-slate-900'

  return (
    <nav role="navigation" aria-label="Main navigation">
      {/* Only the inner cream bar is fixed; outer wrapper is in flow (no full-width strip) */}
      <div className="fixed left-0 right-0 top-4 z-50 overflow-visible md:top-6">
        {/* Inner nav bar: rounded cream box with labels and logo */}
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#F2F2F0] px-4 py-2 shadow-md text-slate-900 md:px-8 md:pb-4">
        <div className="hidden w-full grid-cols-5 items-center justify-items-center gap-x-12 md:grid">
          <a href="#about" className={linkClass}>
            About us
          </a>
          <a href="#membership" className={linkClass}>
            Membership
          </a>

          <div className="flex flex-col items-center justify-center">
            <a
              href="#"
              onClick={scrollToTop}
              className="flex flex-col items-center gap-1"
              aria-label="Fitness Sports Center – Home"
            >
              <div className="h-20 w-20 overflow-hidden rounded-full">
                <img
                  src="/bg_removed_logo.png"
                  alt="Fitness Sports Center"
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
          </div>

          <a href="#trainers" className={linkClass}>
            Trainers
          </a>
          <a href="#contact" className={linkClass}>
            Contact us
          </a>
        </div>

        {/* Mobile center: logo + Services */}
        <div className="flex flex-1 flex-col items-center justify-center pr-12 md:hidden">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex flex-col items-center gap-1"
            aria-label="Fitness Sports Center – Home"
          >
            <div className="h-14 w-14 overflow-hidden rounded-full">
              <img
                src="/bg_removed_logo.png"
                alt="Fitness Sports Center"
                className="h-full w-full object-cover"
              />
            </div>
          </a>
          <a
            href="#services"
            className="mt-1 inline-flex h-16 w-32 items-center justify-center rounded-b-[4rem] bg-[#F2F2F0] font-medium leading-none text-slate-900"
          >
            <span className="whitespace-nowrap font-serif text-2xl text-slate-900">Services</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col justify-center gap-1.5 rounded p-2 text-slate-900 transition-colors hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-slate-500 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <span className="text-xl font-bold leading-none" aria-hidden="true">
              ×
            </span>
          ) : (
            <>
              <span className="block h-0.5 w-6 bg-current" aria-hidden="true" />
              <span className="block h-0.5 w-6 bg-current" aria-hidden="true" />
              <span className="block h-0.5 w-6 bg-current" aria-hidden="true" />
            </>
          )}
        </button>
        </div>

        {/* Desktop: Services semicircle – attached to bar, protrudes below */}
        <div className="hidden justify-center md:flex" style={{ marginTop: '-1rem' }}>
          <a href="#services" className={servicesSemicircleClass}>
            <span className="whitespace-nowrap font-serif text-2xl text-slate-900">Services</span>
          </a>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`overflow-hidden transition-all duration-200 ease-out md:hidden ${
            menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-stone-300 bg-[#F2F2F0] px-4 py-3">
            <ul className="flex flex-col gap-1">
              {allMobileLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={`block rounded px-3 py-2 ${linkClass}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
