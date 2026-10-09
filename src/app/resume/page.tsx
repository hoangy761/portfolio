import type { Metadata } from "next";
import Link from "next/link";
import { PrintResumeButton } from "@/components/PrintResumeButton";
import { TraditionalResume } from "@/components/TraditionalResume";
import { profile } from "@/data/cv";

export const metadata: Metadata = {
  title: `${profile.name} — Resume`,
  description: `Traditional resume for ${profile.name} (${profile.brand}), fullstack TypeScript / DeFi engineer.`,
};

export default function ResumePage() {
  return (
    <div className="resume-page min-h-full bg-[#e8ecee] text-[#111]">
      <div className="resume-toolbar mx-auto flex max-w-[820px] items-center justify-between gap-3 px-4 py-4 print:hidden md:px-0">
        <Link
          href="/"
          className="text-sm text-[#334] no-underline underline-offset-2 hover:underline"
        >
          ← Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <p className="hidden text-xs uppercase tracking-[0.12em] text-[#667] sm:block">
            Traditional CV
          </p>
          <PrintResumeButton />
        </div>
      </div>

      <div className="px-3 pb-16 print:px-0 print:pb-0 md:px-4">
        <TraditionalResume />
      </div>
    </div>
  );
}
