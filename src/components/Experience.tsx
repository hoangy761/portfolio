import { experience, profile } from "@/data/cv";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p className="section-label">Experience</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
            Path into DeFi engineering
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-muted md:text-base">
          {profile.education}. Domain depth from community and BD roles, then
          product engineering on an L1-native wallet, then independent trading systems.
        </p>
      </div>

      <ol className="border-t border-line">
        {experience.map((item) => (
          <li
            key={`${item.period}-${item.title}`}
            className="grid gap-2 border-b border-line py-7 md:grid-cols-[12rem_1fr] md:gap-10"
          >
            <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.1em] text-muted">
              {item.period}
            </p>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-accent">{item.org}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
