import Image from "next/image";

interface AboveDrinkDisplayProps {
  href: string
  alt: string
  title: string
  description: string
}

export function AboveDrinkDisplay({ href, alt, title, description }: AboveDrinkDisplayProps) {
  return (
    <div className="relative">
      <div className="w-[320px] h-[690px] overflow-hidden relative">
        <Image 
          src={href}
          alt={alt}
          fill
          className="z-1 object-cover object-center"
        />
      </div>
      <div className="bg-background py-2 px-4 border border-primary z-2 w-[160px] absolute -left-10 -bottom-10">
        <strong className="text-xs font-normal font-sans text-primary">{title}</strong>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  )
}