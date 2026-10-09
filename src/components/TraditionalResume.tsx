import {
  contact,
  experience,
  profile,
  research,
  stackGroups,
  work,
} from "@/data/cv";

export function TraditionalResume() {
  return (
    <article className="resume-sheet mx-auto w-full max-w-[820px] bg-white text-[#111] shadow-[0_12px_40px_rgba(15,30,40,0.08)]">
      <header className="border-b-2 border-[#111] px-8 pb-5 pt-8 md:px-10 md:pt-10">
        <h1 className="font-serif text-[2rem] font-semibold tracking-tight md:text-[2.35rem]">
          {profile.name}
        </h1>
        <p className="mt-1 text-[0.95rem] text-[#333]">{profile.headline}</p>
        <p className="mt-1 text-[0.85rem] text-[#555]">
          {profile.brand} · {profile.location}
        </p>
        <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[0.8rem] text-[#333]">
          <a href={`mailto:${contact.email}`} className="underline-offset-2 hover:underline">
            {contact.email}
          </a>
          <span aria-hidden>·</span>
          <a
            href={contact.x}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            {contact.xHandle}
          </a>
          <span aria-hidden>·</span>
          <a
            href={contact.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            {contact.telegramHandle}
          </a>
        </p>
      </header>

      <div className="space-y-7 px-8 py-7 md:px-10 md:py-8">
        <section>
          <h2 className="resume-h2">Summary</h2>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-[#222]">
            {profile.summary}
          </p>
        </section>

        <section>
          <h2 className="resume-h2">Experience</h2>
          <ul className="mt-3 space-y-4">
            {experience.map((item) => (
              <li key={`${item.period}-${item.title}`}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-[0.98rem] font-semibold">
                    {item.title}
                    <span className="font-normal text-[#444]">, {item.org}</span>
                  </h3>
                  <p className="shrink-0 text-[0.78rem] text-[#555]">{item.period}</p>
                </div>
                <p className="mt-1 text-[0.88rem] leading-relaxed text-[#333]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="resume-h2">Selected projects</h2>
          <ul className="mt-3 space-y-5">
            {work.map((item) => (
              <li key={item.id}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-[0.98rem] font-semibold">
                    {item.title}
                    <span className="font-normal text-[#444]">, {item.role}</span>
                  </h3>
                  <p className="shrink-0 text-[0.78rem] text-[#555]">{item.period}</p>
                </div>
                {item.status ? (
                  <p className="mt-1 text-[0.78rem] italic text-[#666]">{item.status}</p>
                ) : null}
                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[0.88rem] leading-relaxed text-[#333]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                  {item.metrics ? (
                    <li>
                      Metrics:{" "}
                      {item.metrics
                        .map((m) => `${m.label} ${m.value}`)
                        .join(" · ")}
                    </li>
                  ) : null}
                </ul>
                <p className="mt-1 text-[0.78rem] text-[#555]">
                  Stack: {item.stack.join(", ")}
                  {item.link ? (
                    <>
                      {" · "}
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                      >
                        {item.link.label}
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="resume-h2">Skills</h2>
          <ul className="mt-3 space-y-2.5 text-[0.88rem] leading-relaxed text-[#333]">
            {stackGroups.map((group) => (
              <li key={group.key}>
                <span className="font-semibold text-[#111]">{group.title}:</span>{" "}
                {group.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="resume-h2">Education</h2>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-[#222]">
            {profile.education}
          </p>
        </section>

        <section>
          <h2 className="resume-h2">Writing</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.88rem] leading-relaxed text-[#333]">
            {research.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-2"
                >
                  {item.title}
                </a>
                <span className="text-[#555]">. {item.blurb}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
