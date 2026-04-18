const education = [
  {
    period: 'Feb 2019 – Dec 2022',
    title: 'Hotel Management Degree',
    institution: 'Centro Universitário Senac – Porto Alegre',
    credential: 'NFQ Level 6 Equivalent',
    description: 'Hotel management, HR, tourism, event organization, and food & beverage service.',
  },
  {
    period: 'Jul 2018',
    title: 'Professional Waiter Course',
    institution: 'Centro Universitário Senac – Porto Alegre',
    credential: null,
    description: 'Customer service, hygiene standards, food presentation, and basic mixology techniques.',
  },
] as const

const certifications = [
  {
    title: 'Advanced Mixology Techniques',
    institution: 'Art Flair – Porto Alegre',
    year: 'Aug 2022',
    description: 'Molecular mixology, cocktail theory, and presentation. Recognized for original cocktail creation.',
  },
  {
    title: 'Intensive Bartender Course',
    institution: 'Entertainment School – Rio de Janeiro',
    year: 'Jul 2023',
    description: 'Comprehensive bartending, bar operations, and customer service training.',
  },
  {
    title: 'Microsoft Excel Course',
    institution: 'Centro Universitário Senac – Porto Alegre',
    year: 'Jul–Aug 2022',
    description: 'Spreadsheet design, data analysis, and formula application.',
  },
] as const

export function EducationSection() {
  return (
    <section className="container py-[96px] px-4">
      <h2 className="uppercase text-primary text-sm font-sans pb-4 tracking-widest">
        Background
      </h2>
      <h3 className="text-[64px] font-sans leading-[1] mb-8">Education &amp; Certifications</h3>

      <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent mb-8" />

      <div className="grid lg:grid-cols-2 gap-16">
        <ul className="flex flex-col">
          {education.map((item, index) => (
            <li key={index}>
              <div className="py-8 flex flex-col gap-1">
                <span className="text-sm text-primary font-sans font-semibold">{item.period}</span>
                <strong className="text-xl font-sans font-normal">{item.title}</strong>
                <span className="text-sm text-primary">{item.institution}</span>
                {'credential' in item && item.credential && (
                  <span className="text-xs text-foreground/50">{item.credential}</span>
                )}
                <p className="text-md mt-2 text-foreground/80">{item.description}</p>
              </div>
              {index < education.length - 1 && (
                <div className="h-px w-full bg-linear-to-r from-primary/20 to-transparent" />
              )}
            </li>
          ))}
        </ul>

        <div>
          <h4 className="uppercase text-sm font-sans text-foreground/50 tracking-widest mb-6">Certifications</h4>
          <ul className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex flex-col gap-1 py-4 border-b border-primary/10">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-md">{cert.title}</span>
                  <span className="text-sm text-primary font-semibold whitespace-nowrap ml-4">{cert.year}</span>
                </div>
                <span className="text-xs text-foreground/50">{cert.institution}</span>
                <p className="text-sm text-foreground/70 mt-1">{cert.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
