'use client'

import Image from "next/image"
import { useRef, useState } from "react"
import { FadeInOnScroll } from "@/lib/FadeInOnScroll"

const featuredNotes = [
  {
    label: 'Elderflower',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
        <circle cx="12" cy="8" r="2" />
        <path d="M12 10v12" />
      </svg>
    ),
  },
  {
    label: 'Rose water',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      </svg>
    ),
  },
  {
    label: 'Fresh raspberry',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
      </svg>
    ),
  },
  {
    label: 'Lemon citrus',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
  {
    label: 'Sparkling soda',
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
      </svg>
    ),
  },
]

const secondaryCards = [
  {
    num: '— 02',
    tag: 'Classic',
    name: 'Smoked Negroni',
    desc: 'The timeless Negroni elevated with tableside cherrywood smoke. Campari bitterness meets vermouth rosso in perfect, brooding balance — finished under a glass cloche.',
    notes: [
      {
        label: 'Campari bitter',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M8 3c0 2 2 4 4 4s4-2 4-4M12 7v10M5 21c1-3 3-5 7-5s6 2 7 5" />
          </svg>
        ),
      },
      {
        label: 'Cherrywood smoke',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 3c3 2 4 5 3 8M7 3c2 3 2 6 0 9M11 3c1 4 0 7-2 9" />
          </svg>
        ),
      },
      {
        label: 'Sweet vermouth',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
          </svg>
        ),
      },
      {
        label: 'Orange peel',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          </svg>
        ),
      },
    ],
  },
  {
    num: '— 03',
    tag: 'Signature',
    name: 'Midnight Paloma',
    desc: 'Mezcal smoke meets grapefruit tartness, balanced by an activated charcoal salt rim and a violet liqueur float that turns the drink dark as midnight.',
    notes: [
      {
        label: 'Mezcal smoke',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 3c3 2 4 5 3 8M7 3c2 3 2 6 0 9M11 3c1 4 0 7-2 9" />
          </svg>
        ),
      },
      {
        label: 'Grapefruit tart',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
          </svg>
        ),
      },
      {
        label: 'Violet liqueur',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ),
      },
      {
        label: 'Charcoal salt',
        icon: (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
          </svg>
        ),
      },
    ],
  },
]

export function SignatureSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.offsetWidth)
    setActiveIndex(index)
  }

  return (
    <section id="cocktails" className="py-16 lg:py-[120px] overflow-hidden" aria-labelledby="ck-heading">
      <div className="container px-4">

        {/* Header */}
        <FadeInOnScroll>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary mb-6" aria-hidden="true">
            <span className="inline-block w-10 h-px bg-primary-light opacity-60" />
            Signature Cocktails
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6 mb-8 lg:mb-16">
            <div>
              <h2 id="ck-heading" className="font-sans text-[clamp(40px,5.5vw,72px)] leading-none font-normal text-card-foreground">
                Crafted with<br />
                <em className="text-primary">Intention</em>
              </h2>
              <p className="text-base text-muted-foreground max-w-[380px] leading-[1.7] mt-5">
                Every glass tells a story. Three of the drinks that define the craft — and the bartender behind them.
              </p>
            </div>
            <div className="hidden sm:flex shrink-0 items-center gap-3" aria-label="9 cocktails in total">
              <div
                className="font-sans text-[2.75rem] text-primary leading-none border border-glass-border w-[72px] h-[72px] flex items-center justify-center"
                style={{ background: 'rgba(201,146,42,0.04)' }}
                aria-hidden="true"
              >
                9
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-muted-foreground leading-[1.5] max-w-[56px]">
                total cocktails
              </p>
            </div>
          </div>

          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, var(--amber-gold), transparent)' }} role="separator" />
        </FadeInOnScroll>

        {/* Featured card */}
        <FadeInOnScroll>
          <article
            className="grid grid-cols-1 lg:grid-cols-2 border border-primary/18"
            aria-label="Featured cocktail: Raspberry Shoda"
          >
            {/* Visual panel */}
            <div
              className="relative min-h-65 sm:min-h-95 lg:min-h-140 overflow-hidden"
              aria-hidden="true"
            >
              <Image
                src="/above-raspberry.jpg"
                alt=""
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse 65% 65% at 25% 55%, rgba(201,146,42,0.20), transparent 70%),
                    radial-gradient(ellipse 40% 40% at 75% 20%, rgba(201,146,42,0.09), transparent),
                    linear-gradient(150deg, rgba(8,5,2,0.65) 0%, rgba(5,3,1,0.60) 100%)
                  `,
                }}
              />
              <div className="absolute inset-0 ck-shimmer-overlay" />

              <span
                className="absolute top-7 left-8 font-sans text-[8rem] leading-none pointer-events-none select-none"
                style={{ color: 'rgba(201,146,42,0.22)', letterSpacing: '-0.06em' }}
              >
                01
              </span>

              <div
                className="absolute inset-0 flex items-center justify-center font-sans text-[clamp(2.8rem,7vw,5.5rem)] font-bold italic text-transparent text-center px-8 leading-[1.1] pointer-events-none select-none ck-drift"
                style={{ WebkitTextStroke: '1px rgba(201,146,42,0.35)' } as React.CSSProperties}
              >
                Raspberry<br />Shoda
              </div>

              <span
                className="absolute top-8 right-8 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-primary border border-primary/30 px-3.5 py-1.5"
                style={{ background: 'rgba(13,11,9,0.55)', backdropFilter: 'blur(12px)' }}
              >
                ✦ House Signature
              </span>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-10 bg-gradient-to-b from-amber-gold to-transparent" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-gold -mt-px shadow-[0_0_10px_2px_rgba(201,146,42,0.4)]" />
              </div>
            </div>

            {/* Body panel */}
            <div className="py-8 px-6 sm:py-12 sm:px-10 lg:py-18 lg:px-14 flex flex-col justify-center border-t border-primary/18 lg:border-t-0 lg:border-l lg:border-l-primary/18">
              <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary mb-7">
                <span className="inline-block w-7 h-px bg-primary flex-shrink-0" aria-hidden="true" />
                Glenroyal Hotel — Maynooth
              </p>
              <h3 className="font-sans text-[clamp(34px,3.8vw,52px)] leading-[1.05] text-card-foreground mb-6">
                Raspberry Shoda
              </h3>
              <p className="text-base leading-[1.75] text-foreground mb-6 sm:mb-9">
                The cocktail that put Raul on the map. Fresh raspberries muddled with elderflower liqueur,
                a touch of rose water, and a sparkling soda finish — light, floral, and dangerously easy
                to drink. The hotel&apos;s top-selling cocktail for two consecutive seasons.
              </p>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary mb-3.5">
                Tasting Notes
              </p>
              <ul className="flex flex-wrap gap-2 mb-8 sm:mb-11">
                {featuredNotes.map(({ label, icon }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-light border border-primary/[0.22] px-3 py-1 transition-colors hover:bg-primary/10 hover:border-primary/40"
                    style={{ background: 'rgba(201,146,42,0.05)', backdropFilter: 'blur(8px)' }}
                  >
                    <span className="opacity-60">{icon}</span>
                    {label}
                  </li>
                ))}
              </ul>
              <a
                href="/cocktails"
                className="self-start inline-flex items-center gap-1.5 border border-primary text-primary text-[0.8rem] font-bold uppercase tracking-[0.06em] px-6 py-2.5 hover:opacity-70 transition-opacity"
                aria-label="View all 9 cocktails in the full catalog"
              >
                See full catalog
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </FadeInOnScroll>

        {/* Secondary cards */}
        <FadeInOnScroll>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex border border-primary/18 border-t-0 overflow-x-auto snap-x snap-mandatory sm:overflow-x-visible sm:snap-none scrollbar-none"
            role="list"
            aria-label="More cocktails"
          >
            {secondaryCards.map((card) => (
              <article
                key={card.name}
                className="group flex-[0_0_100%] sm:flex-1 py-8 px-6 sm:py-12 sm:px-10 relative border-r border-r-primary/18 last:border-r-0 border-l-2 border-l-transparent snap-start transition-all duration-350 ease-in-out hover:bg-primary/4 hover:-translate-y-1.5 hover:border-l-primary hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
                role="listitem"
                aria-label={card.name}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans text-[0.72rem] font-normal leading-none tracking-[0.12em]" style={{ color: 'rgba(201,146,42,0.45)' }} aria-hidden="true">
                    {card.num}
                  </span>
                  <span
                    className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-muted-foreground border border-primary/[0.15] px-2.5 py-0.5"
                    style={{ background: 'rgba(201,146,42,0.04)' }}
                  >
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-sans text-[28px] sm:text-[clamp(24px,2.8vw,34px)] font-normal leading-[1.1] text-card-foreground mb-4 transition-colors group-hover:text-primary-light">
                  {card.name}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-muted-foreground mb-8">
                  {card.desc}
                </p>
                <ul className="flex flex-wrap gap-1.5" aria-label="Tasting notes">
                  {card.notes.map(({ label, icon }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-1 text-[0.7rem] text-primary-light border border-primary/[0.15] px-2.5 py-1 transition-colors group-hover:bg-primary/[0.07] group-hover:border-primary/[0.28]"
                      style={{ background: 'rgba(201,146,42,0.04)', backdropFilter: 'blur(6px)' }}
                    >
                      <span className="opacity-50">{icon}</span>
                      {label}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Mobile pagination dots */}
          <div className="flex items-center justify-center gap-2 py-4 border-x border-primary/18 sm:hidden" aria-hidden="true">
            {secondaryCards.map((_, i) => (
              <span key={i} className={`h-1 transition-all duration-300 ${i === activeIndex ? 'w-4 bg-primary' : 'w-1 bg-primary/30'}`} />
            ))}
          </div>
        </FadeInOnScroll>

        {/* CTA row */}
        <FadeInOnScroll>
          <div className="border border-primary/18 border-t-0 px-6 py-5 sm:px-8 sm:py-7 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-primary-light">3 of 9 cocktails</span> — signature, classics, mocktails &amp; spritzes
            </p>
            <a
              href="/cocktails"
              className="inline-flex items-center gap-1.5 border border-primary text-primary text-[0.8rem] font-bold uppercase tracking-[0.06em] px-6 py-2.5 hover:opacity-70 transition-opacity"
              aria-label="View all 9 cocktails in the full catalog"
            >
              View Full Catalog
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  )
}
