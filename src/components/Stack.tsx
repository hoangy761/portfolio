import { stack } from "@/data/cv";

const groups = [
  { title: "Primary", items: stack.primary },
  { title: "Execution", items: stack.execution },
  { title: "Domain", items: stack.domain },
  { title: "Exposure", items: stack.exposure },
] as const;

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="section-label">Stack</p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
        TypeScript-first DeFi tooling
      </h2>
      <div className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-muted">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-lg tracking-tight">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
