import { work } from "@/data/cv";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex flex-col gap-3 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label">Selected work</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
            Systems I ship and run
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted md:text-right">
          Engineering and ops first. Metrics are stated as-is — including strategies still iterating.
        </p>
      </div>

      <div className="flex flex-col">
        {work.map((item, index) => (
          <article
            key={item.id}
            className="work-row grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10"
          >
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                {String(index + 1).padStart(2, "0")} · {item.period}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.role}</p>
              {item.status ? (
                <p className="mt-3 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.08em] text-warn">
                  {item.status}
                </p>
              ) : null}
              {item.metrics ? (
                <dl className="mt-6 grid grid-cols-2 gap-3">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="border border-line bg-bg-elevated/70 px-3 py-2.5">
                      <dt className="font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.1em] text-muted">
                        {metric.label}
                      </dt>
                      <dd className="mt-1 font-[family-name:var(--font-display)] text-xl tracking-tight">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>

            <div>
              <ul className="space-y-3 text-[0.98rem] leading-relaxed text-fg/90">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4 relative before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.08em] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {item.link ? (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.1em] text-accent"
                >
                  {item.link.label} →
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
