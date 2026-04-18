'use client'

import { useEffect, useState } from "react"
import { AboveDrinkDisplay } from "./AboveDrinkDisplay"

interface CarouselItem {
  href: string
  alt: string
  title: string
  description: string
}

interface AboveDrinkCarouselProps {
  items: CarouselItem[]
  interval?: number
}

export function AboveDrinkCarousel({ items, interval = 5000 }: AboveDrinkCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={item.href}
          className="transition-opacity duration-700"
          style={{
            opacity: index === activeIndex ? 1 : 0,
            position: index === 0 ? 'relative' : 'absolute',
            inset: 0,
          }}
        >
          <AboveDrinkDisplay
            href={item.href}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </div>
  )
}
