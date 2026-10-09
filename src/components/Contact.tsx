import { contact, profile } from "@/data/cv";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="border border-line bg-[color-mix(in_oklab,#fff_55%,transparent)] px-6 py-12 md:px-12 md:py-16">
        <p className="section-label">Contact</p>
        <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-5xl">
          Open to DeFi engineering roles
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Prefer teams shipping DEX, lending, perps, or wallet infrastructure.
          Reach {profile.brand} directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="cta-link cta-link--primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="cta-link"
            href={contact.x}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.xHandle}
          </a>
          <a
            className="cta-link"
            href={contact.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.telegramHandle}
          </a>
          <a className="cta-link" href="/resume">
            Traditional CV
          </a>
        </div>
      </div>
    </section>
  );
}
