import { contact, profile } from "@/data/cv";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28"
    >
      <div className="pointer-events-none absolute right-4 top-16 hidden w-[42%] max-w-md opacity-80 md:block lg:right-8">
        <svg viewBox="0 0 360 180" fill="none" aria-hidden className="h-auto w-full">
          <rect x="0.5" y="0.5" width="359" height="179" stroke="currentColor" className="text-line" />
          <path
            className="chart-path"
            d="M16 132 C 48 128, 62 96, 92 102 C 122 108, 134 64, 168 70 C 202 76, 214 48, 248 54 C 282 60, 298 34, 344 28"
            stroke="var(--chart)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M16 148 H344"
            stroke="currentColor"
            className="text-line"
            strokeDasharray="3 5"
          />
          <text
            x="16"
            y="24"
            className="fill-muted"
            style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
          >
            LIVE SYSTEMS / EXECUTION
          </text>
        </svg>
      </div>

      <p className="section-label reveal">{profile.name}</p>
      <h1 className="reveal reveal-delay-1 mt-4 max-w-[14ch] font-[family-name:var(--font-display)] text-[clamp(3.4rem,11vw,7.2rem)] leading-[0.92] tracking-[-0.03em]">
        {profile.brand}
      </h1>
      <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-muted md:text-xl">
        {profile.headline}. {profile.summary}
      </p>
      <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
        <a className="cta-link cta-link--primary" href={`mailto:${contact.email}`}>
          Email me
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
          Telegram
        </a>
      </div>
    </section>
  );
}
