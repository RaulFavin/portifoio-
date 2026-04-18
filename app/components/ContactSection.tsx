import { Icon } from "@/components/icons"

const links = [
  { icon: 'Mail' as const, label: 'Email', href: 'mailto:raulfavin@email.com' },
  { icon: 'WhatsApp' as const, label: 'WhatsApp', href: 'https://wa.me/55XXXXXXXXXXX', target: '_blank', rel: 'noopener noreferrer' },
  { icon: 'Phone' as const, label: 'Phone', href: 'tel:+55XXXXXXXXXXX' },
  { icon: 'Linkedin' as const, label: 'LinkedIn', href: 'https://linkedin.com/in/raulfavin', target: '_blank', rel: 'noopener noreferrer' },
  { icon: 'Download' as const, label: 'CV - ES', href: '/Resume-RaulFavin.pdf', download: true },
  { icon: 'Download' as const, label: 'CV - EN', href: '/Resume-RaulFavin-English.pdf', download: true },
]

export function ContactSection() {
  return (
    <section id="contact" className="container py-[96px] px-4 flex flex-col items-center text-center">
      <h2 className="uppercase text-primary text-sm font-sans pb-4 tracking-widest">
        Open to Work
      </h2>
      <h3 className="text-[42px] md:text-[64px] font-sans leading-[1] mb-8">
        Now Seeking<br />
        <span className="text-primary">Málaga Opportunities</span>
      </h3>

      <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent mb-12" />

      <div className="flex flex-col items-center gap-8 max-w-2xl">
        <p className="text-md text-foreground/80 leading-relaxed">
          After two remarkable years building the cocktail programme at Glenroyal Hotel, I am relocating to Málaga, Spain, and actively seeking my next challenge. I am open to roles as Head Mixologist, Bar Manager, or Senior Bartender at hotels, resorts, and cocktail bars in the Málaga area.
        </p>
        <p className="text-md text-foreground/80 leading-relaxed">
          If you are looking for someone who brings creativity, precision, and a proven track record of creating cocktails that guests keep coming back for — let&apos;s talk.
        </p>

        <div className="flex items-center gap-6 flex-wrap justify-center mt-4">
          {links.map(({ icon, label, ...otherProps }) => (
            <a
              key={label}
              {...otherProps}
              aria-label={label}
              className="flex flex-col items-center gap-2 text-primary hover:text-primary/70 transition-colors group"
            >
              <span className="flex items-center justify-center w-12 h-12 border border-primary/30 group-hover:border-primary/60 transition-colors">
                <Icon name={icon} size={20} />
              </span>
              <span className="text-xs font-sans uppercase tracking-widest">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
