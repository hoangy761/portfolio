import { profile } from "@/data/cv";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.1em]">
          {profile.brand} · {profile.nameAscii}
        </p>
        <p>
          Built for DeFi hiring conversations · 2026 ·{" "}
          <a href="/resume" className="text-accent no-underline hover:underline">
            Traditional CV
          </a>
        </p>
      </div>
    </footer>
  );
}
