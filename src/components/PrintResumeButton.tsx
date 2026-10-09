"use client";

export function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-[#111] bg-white px-3 py-1.5 text-xs uppercase tracking-[0.08em] text-[#111] transition-colors hover:bg-[#111] hover:text-white print:hidden"
    >
      Print / PDF
    </button>
  );
}
