'use client'

import { LinkButton } from "@/components/LinkButton"
import { useEffect, useState } from "react"
import Link from "next/link"
import { AnchorButton } from "@/components/AnchorButton"
import { Icon } from "@/components/icons"

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Signature', href: '#signature' },
  { label: 'Seasonal', href: '#seasonal' },
  { label: 'Menus', href: '#menus' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 left-0 w-full z-50 h-[72px] transition-colors duration-300',
        scrolled ? 'bg-background border-b border-border' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="container h-full flex items-center justify-between px-4 lg:px-8">
        <span className="font-sans font-semibold text-lg text-primary uppercase tracking-widest text-foreground whitespace-nowrap">
          Raul Favin
        </span>
        <nav className="hidden sm:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm uppercase font-sans font-semibold text-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:block">
          <AnchorButton 
            href="https://www.linkedin.com/in/raul-favin" 
            target="_blank"
            rel="noreferrer"
            className="py-2 px-6 text-sm"
            headIcon="Linkedin"
          >
            Contact
          </AnchorButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <Icon name="Menu" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 bg-background border-b border-border ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase font-sans font-semibold text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
          <LinkButton 
            href="#contact" 
            className="flex justify-center py-2"
            headIcon="Linkedin"
          >
            Contact
          </LinkButton>
        </nav>
      </div>
    </header>
  )
}
