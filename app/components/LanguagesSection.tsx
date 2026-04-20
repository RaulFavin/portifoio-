import { FadeInOnScroll } from "@/lib/FadeInOnScroll"

const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'C1 – Fluent' },
  { name: 'Spanish', level: 'Basic' },
] as const

export function LanguagesSection() {
  return (
    <section className="container py-[96px] px-4">
      <h2 className="uppercase text-primary text-sm font-sans pb-4 tracking-widest">
        Communication
      </h2>
      <h3 className="text-[42px] md:text-[64px] font-sans leading-[1] mb-8">Languages</h3>

      <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent mb-12" />

      <ul className="flex flex-col">
        {languages.map((lang, index) => (
          <FadeInOnScroll key={index}>
            <li
              className="flex items-center justify-between py-6 border-b border-primary/10"
            >
              <span className="font-sans text-xl">{lang.name}</span>
              <span className="text-sm text-primary font-semibold">{lang.level}</span>
            </li>
          </FadeInOnScroll>
        ))}
      </ul>
    </section>
  )
}
