import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About us', href: '#about', desktopGroup: 'left' },
  { label: 'Membership', href: '#membership', desktopGroup: 'left' },
  { label: 'Services', href: '#services' },
  { label: 'Trainers', href: '#trainers', desktopGroup: 'right' },
  { label: 'Contact us', href: '#contact', desktopGroup: 'right' },
]

const desktopLeftLinks = navLinks.filter(
  ({ desktopGroup }) => desktopGroup === 'left',
)
const desktopRightLinks = navLinks.filter(
  ({ desktopGroup }) => desktopGroup === 'right',
)

function NavLink({ href, label, className, onClick }) {
  return (
    <a href={href} className={className} onClick={onClick}>
      {label}
    </a>
  )
}

function HomeLogoLink({ logoSizeClass, onClick }) {
  return (
    <a
      href="#"
      onClick={onClick}
      className="navbar-logo-link"
      aria-label="Fitness Sports Center - Home"
    >
      <div className={`navbar-logo ${logoSizeClass}`}>
        <img
          src="/bg_removed_logo.png"
          alt="Fitness Sports Center"
          className="h-full w-full object-cover"
        />
      </div>
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav role="navigation" aria-label="Main navigation">
      {/* Only the inner cream bar is fixed; outer wrapper is in flow (no full-width strip) */}
      <div className="fixed left-0 right-0 top-4 z-50 overflow-visible md:top-6">
        {/* Inner nav bar: rounded cream box with labels and logo */}
        <div className="mx-auto max-w-6xl rounded-2xl bg-cream px-4 py-2 shadow-md text-slate-900 md:px-8 md:pb-4">
          <div className="hidden w-full grid-cols-5 items-center justify-items-center gap-x-12 md:grid">
            {desktopLeftLinks.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} className="navbar-link" />
            ))}

            <div className="flex flex-col items-center justify-center">
              <HomeLogoLink
                logoSizeClass="navbar-logo--desktop"
                onClick={scrollToTop}
              />
            </div>

            {desktopRightLinks.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} className="navbar-link" />
            ))}
          </div>

          {/* Mobile center: logo + Services */}
          <div className="flex flex-1 flex-col items-center justify-center pr-12 md:hidden">
            <HomeLogoLink
              logoSizeClass="navbar-logo--mobile"
              onClick={scrollToTop}
            />
            <NavLink
              href="#services"
              className="navbar-services-pill-mobile"
              label={<span className="navbar-services-label">Services</span>}
            />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="navbar-menu-btn"
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
        <div className="navbar-desktop-services-wrapper">
          <NavLink
            href="#services"
            className="navbar-services-pill"
            label={<span className="navbar-services-label">Services</span>}
          />
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`overflow-hidden transition-all duration-200 ease-out md:hidden ${
            menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-stone-300 bg-cream px-4 py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <NavLink
                    href={href}
                    onClick={closeMenu}
                    className="navbar-dropdown-link navbar-link"
                    label={label}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

