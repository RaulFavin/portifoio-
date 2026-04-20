import { MapPin } from "lucide-react"

export function Footer () {
  return (
    <footer className="border-t border-primary/10 px-4 py-8 flex flex-col lg:flex-row items-center justify-between text-sm text-foreground/50 gap-4">
      <span>Raul · Head Mixologist</span>
      <p className="text-center">Glenroyal Hotel · Arkle Bar & Restaurant · Maynooth, Ireland</p>
      <div className="flex gap-2">
        <MapPin />
        <p className="text-center">Relocating to Málaga, Spain</p>
      </div>
    </footer>
  )
}