import Link from "next/link";
import { contact, nav, profile } from "@/data/cv";

type SiteHeaderProps = {
  variant?: "portfolio" | "resume";
};

export function SiteHeader({ variant = "portfolio" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-md print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight no-underline md:text-xl"
        >
          {profile.brand}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {variant === "portfolio"
            ? nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.12em] text-muted no-underline transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              ))
            : null}
          <Link
            href={variant === "portfolio" ? "/resume" : "/"}
            className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.12em] text-muted no-underline transition-colors hover:text-fg"
          >
            {variant === "portfolio" ? "Resume" : "Portfolio"}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={variant === "portfolio" ? "/resume" : "/"}
            className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.1em] text-muted no-underline md:hidden"
          >
            {variant === "portfolio" ? "Resume" : "Home"}
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.1em] text-accent no-underline"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
