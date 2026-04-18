import { Icon } from "@/components/icons";
import Image from "next/image";

const blocks = [
  {
    title: '5',
    description: 'Years of bar experience'
  },
  {
    title: '#1',
    description: 'Best-Selling Cocktail at Glenroyal Hotel',
  },
  {
    title: '4★',
    description: 'Hotel Standard'
  }
]

export function AboutMe () {
  return (
    <section className="container py-[96px] px-4">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative ">
          <div className="absolute inset-0 -translate-x-8 -translate-y-4 border border-primary/20 pointer-events-none" />
          <div className="w-full h-170 relative overflow-hidden">
            <Image
              src="/about-me.jpg"
              alt="About me"
              fill
              className="z-1 object-cover object-center"
            />
            <span className="absolute z-2 bottom-0 left-0 right-0 flex items-center gap-2 text-sm text-primary px-4 py-3 bg-linear-to-t from-background to-transparent">
              <Icon name="Location" />
              Maynooth, Ireland → Málaga, Spain
            </span>
          </div>
        </div>
        <div>
          <h2 className="uppercase text-primary text-sm font-sans pb-4">About me</h2>
          <h3 className="text-[48px] font-sans leading-[48px] ">Crafting Experiences,<br /><span className="text-primary">Not Just Cocktails</span></h3>
          <div className="hidden lg:block h-px w-full bg-linear-to-r from-transparent via-primary to-transparent my-4" />
          <p className="text-md pb-6 pt-8">
        With over five years of bar and hotel experience, two of which I served as Head Mixologist 
        at the prestigious Arkle Bar & Restaurant within the Glenroyal Hotel in Maynooth, Ireland — one 
        of the country&apos;s finest 4-star hotel properties. In that role I was responsible for the full cocktail 
        programme: from menu conception and ingredient sourcing to team training and guest experience.
          </p>
          <p className="text-md">
        My pt-8 philosophy is simple: every glass tells a story. Whether it is a classic reimagined with an Irish twist or 
        a seasonal creation built around a moment in the calendar, I believe a great cocktail should surprise, delight, 
        and be remembered long after the last sip.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {blocks.map((block, index) => (
              <li key={index} className="flex flex-col gap-2">
                <span className="text-[42px] font-sans text-primary">{block.title}</span>
                <p className="text-sm">{block.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}