import { research } from "@/data/cv";

export function Research() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="section-label">Writing / research</p>
      <h2 className="mt-3 max-w-lg font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
        Public takes on perp stacks and L1 ecosystems
      </h2>
      <div className="mt-12 grid gap-0 border-t border-line md:grid-cols-2">
        {research.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-b border-line py-8 no-underline transition-colors hover:bg-[color-mix(in_oklab,#fff_50%,transparent)] md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-muted transition-colors group-hover:text-accent">
              Open on X
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight">
              {item.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {item.blurb}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
