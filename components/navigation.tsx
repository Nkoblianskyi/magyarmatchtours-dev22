'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/katalogus', label: 'Túrakatalógus' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Magyar Match Tours főoldal">
            <Image src="/favicon.ico" alt="Magyar Match Tours logo" width={32} height={32} />
          <span
            className={`font-serif text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Magyar Match Tours
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-mono text-sm tracking-wide transition-colors duration-300 hover:text-amber ${
                  scrolled ? 'text-foreground/70' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/katalogus"
              className="font-mono text-sm tracking-wide bg-primary text-primary-foreground px-5 py-2 hover:bg-primary/80 transition-colors duration-300"
            >
              Túrák megtekintése
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
          aria-label="Menü megnyitása"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-wide text-foreground/80 hover:text-amber transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/katalogus"
            onClick={() => setOpen(false)}
            className="font-mono text-sm tracking-wide bg-primary text-primary-foreground px-5 py-2 text-center hover:bg-primary/80 transition-colors"
          >
            Túrák megtekintése
          </Link>
        </div>
      )}
    </header>
  )
}
