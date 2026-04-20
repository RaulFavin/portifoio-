import { Clover, Flower2, Ghost, Heart } from "lucide-react"
import Image from "next/image"

const details = [
  {
    title: 'Mother\'s Day',
    subtitle: 'Floral & Aromatic',
    description: 'Elegant, floral creations designed to celebrate and delight — light, aromatic, and beautifully presented with edible flowers.',
    tags: ['Elderflower', 'Rose petal', 'Citrus blossom', 'Edible flowers'],
    icon: Flower2
  },
  {
    title: 'St. Patrick\'s Day',
    subtitle: 'Irish Heritage',
    description: 'Irish-forward cocktails celebrating local spirits and heritage — built around whiskey, stout, and time-honoured Dublin classics.',
    tags: ['Irish whiskey', 'Stout reduction', 'Honey', 'Smoked oak'],
    icon: Clover
  },
  {
    title: 'Halloween',
    subtitle: 'Dark & Theatrical',
    description: 'Smoky presentations, deep crimson colours, and unexpected flavour twists crafted to match the spirit of the season.',
    tags: ['Mezcal smoke', 'Blackberry', 'Charcoal', 'Dry ice mist'],
    icon: Ghost
  },
  {
    title: 'Valentine\'s Day',
    subtitle: 'Romance in a Glass',
    description: 'Rose-infused spirits, deep berry tones, and delicate garnishes crafted to set the mood for a perfect evening.',
    tags: ['Rose gin', 'Raspberry', 'Champagne', 'Gold leaf'],
    icon: Heart
  }
]

export function SeasonalSection () {
  const renderDetails = details.map((detail, index) => {
    const { icon: Icon } = detail

    return (
      <article key={index} className="grid md:grid-cols-4 gap-4 py-[56px] border-y border-primary/15">
        <div className="col-span-3">
          <div className="flex items-center gap-8">
            <div className="size-10 border border-primary text-primary flex items-center justify-center">
              <Icon />
            </div>
            <span className="text-sm uppercase font-medium text-primary">{detail.title}</span>
          </div>
          <h3 className="font-sans text-6xl text-card-foreground pt-6">{detail.subtitle}</h3>
          <p>{detail.description}</p>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <p className="text-sm uppercase text-primary font-sans">Tasting Notes</p>
          <ul className="flex flex-col gap-2">
            {detail.tags.map((tag, tagIndex) => (
              <li 
                className="text-sm text-primary-light flex items-center gap-2"
                key={tagIndex}>
                <span className="inline-block w-6 h-px bg-primary-light mr-2" aria-hidden="true"></span>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    )
  })
  return (
    <section id="seasonal" className="container py-[96px] md:px-4">
      <div className="relative w-full h-[500px] md:h-[700px] mx-auto mb-10 md:mb-24">
        <Image 
          src="/seasonal.webp"
          alt="Seasonal"
          fill
          className="object-cover"
        />
        {/* Gradiente de sombra */}
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent rounded-lg" aria-hidden="true"></div>
        {/* Texto sobreposto */}
        <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-start z-10">
          <span className="flex items-center gap-2 text-primary text-sm uppercase tracking-widest mb-2">
            <span className="inline-block w-10 h-px bg-primary-light mr-2" aria-hidden="true"></span>
            Limited Editions
          </span>
          <h2 className="text-[44px] md:text-[60px] font-sans font-bold leading-tight drop-shadow-lg">Seasonal & <span className="text-primary">Special Occasions</span></h2>
          <p className="text-lg mt-2 max-w-xl drop-shadow-lg">Bespoke cocktail programmes designed to mark the calendar&apos;s most celebrated occasions — each crafted to reflect the spirit of the season in flavour, colour, and presentation.</p>
        </div>
      </div>
      <div className="mt-12 px-4">
        {renderDetails}
      </div>
    </section>
  )
}