import { LinkButton } from "@/components/LinkButton"
import { AboveDrinkCarousel } from "./AboveDrinkCarousel"

const bulletPoints  = [
  "Head Mixologist",
  "Bar supervisor",
  "Ireland, Brazil, Spain"
]

const carrouselItems = [
  {
    href: "/above-cherry.webp",
    alt: "Drink 1",
    title: "Cherry Bramble",
    description: "Signature Creation"
  },
  {
    href: "/above-gardin.webp",
    alt: "Drink 2",
    title: "Gardin",
    description: "Signature Creation"
  },
  {
    href: "/above-raspberry.jpg",
    alt: "Drink 3",
    title: "Raspberry Shoda",
    description: "Signature Creation"
  },
]

export function AboveTheFold() {
  const renderBulletPoints = bulletPoints.map((point, index) => (
    <li
      key={index}
      className="uppercase text-[14px] text-primary font-sans font-300 flex gap-4 whitespace-nowrap"
    >
      {point}
      {index < bulletPoints.length - 1 && (
        <span key={`sep-${index}`} className="text-primary text-sm">·</span>
      )}
    </li>
  ))

  return (
    <div 
      className="relative"
    >
      <div
        className="absolute z-1 top-0 left-0 w-full h-full opacity-10 lg:opacity-8"
        style={{
          backgroundImage: "url('/above-bg.webp')",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 z-1 bg-linear-to-r from-background to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute right-16 bottom-16 2xl:top-0">
        <AboveDrinkCarousel items={carrouselItems} />
      </div>
      <section 
        className="relative h-[calc(100dvh-72px)] flex flex-col justify-center lg:justify-end container z-2  px-4 lg:px-8 lg:py-[128px]"
      >
        <div className="w-full grid lg:grid-cols-2">
          <div className="max-w-[620px]">
            <ul className="flex items-center mb-4 flex-wrap">
              {renderBulletPoints}
            </ul>
            <div className="flex flex-col gp-2 mb-8">
              <h1 className="text-[96px] font-sans leading-[0.8] text-popover-foreground">
                Raul Favin
                <br />
                <span className="text-primary text-[72px] italic">Mixologist</span>
              </h1>
              <p className="text-lg">
                Over five years of bar experience, including two years crafting award-worthy cocktails at the Arkle Bar 
                & Restaurant, Glenroyal Hotel. Creator of the <span className="italic text-primary-light font-semibold">Raspberry Shoda</span> — for a while the hotel's top-selling cocktail. 
                Now bringing that craft to <span className="text-primary">Málaga, Spain</span>.
              </p>
            </div>
            <div className="grid gap-4 w-full sm:w-fit sm:grid-cols-2">
              <LinkButton 
                href="#contact"
                className="text-center"
              >Open to work</LinkButton>
              <LinkButton
                variant="outline"
                href="#contact"
                className="text-center"
              >Open to work</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}