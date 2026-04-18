const timeline = [
  {
    period: 'Feb 2024 – Present',
    role: 'Head Mixologist / Bar Supervisor',
    place: 'Glenroyal Hotel – Maynooth, Ireland',
    description: 'Responsible for cocktail creation and preparation, including signature recipes. Bar service management, wine, beer, and barista training. Cash handling, inventory control, and staff training.',
  },
  {
    period: 'Apr 2024 – Oct 2024',
    role: 'Bartender / Waiter',
    place: 'Fitzpatrick Castle Hotel – Dublin, Ireland',
    description: 'Professional table and bar service in high-demand hotel environment. Guest reception, food and beverage service, mise en place, and payment management.',
  },
  {
    period: 'Oct 2020 – Dec 2023',
    role: 'Waiter / Wine Specialist',
    place: 'Bistrô Pimenta Rosa – Porto Alegre, Brazil',
    description: 'High-level table service and menu advisory. Specialized in wine pairing and client relationships.',
  },
  {
    period: 'Nov 2018 – Apr 2020',
    role: 'Bar Supervisor / Bartender',
    place: 'Hotel Laghetto – Porto Alegre, Brazil',
    description: 'Bar opening and closing management, beverage stock control, and room service requests. Preparation of classic IBA cocktails and specialty drinks.',
  },
] as const

export function CarrierSection() {
  return (
    <section className="container py-[96px] px-4">
      <h2 className="uppercase text-primary text-sm font-sans pb-4 tracking-widest">
        Professional Journey
      </h2>
      <h3 className="text-[64px] font-sans leading-[1] mb-8">Career Timeline</h3>

      <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent mb-8" />

      <ul className="flex flex-col">
        {timeline.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[180px_1fr] sm:gap-8 py-8">
              <span className="text-sm text-primary font-sans font-semibold leading-snug">
                {item.period}
              </span>
              <div className="flex flex-col gap-1">
                <strong className="text-xl font-sans font-normal">{item.role}</strong>
                <span className="text-sm text-primary">{item.place}</span>
                <p className="text-md mt-2 text-foreground/80">{item.description}</p>
              </div>
            </div>
            {index < timeline.length - 1 && (
              <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
