export const profile = {
  brand: "0xWhyZi",
  name: "Bùi Hoàng Ý",
  nameAscii: "Bui Hoang Y",
  headline: "Fullstack TypeScript engineer for DeFi systems",
  summary:
    "Skin in the game since 2021. Shipped wallet admin platforms and live trading bots across EVM, Solana, and perpetual venues.",
  location: "Da Nang, Vietnam",
  education:
    "FPT University Da Nang, Software Engineering (2020-2024), Excellent graduate",
} as const;

export const contact = {
  email: "Hoangy761exe@gmail.com",
  x: "https://x.com/0xWhyZi",
  xHandle: "@0xWhyZi",
  telegram: "https://t.me/Whyziiiiiiiii",
  telegramHandle: "@Whyziiiiiiiii",
} as const;

export type WorkItem = {
  id: string;
  title: string;
  role: string;
  period: string;
  stack: string[];
  bullets: string[];
  metrics?: { label: string; value: string }[];
  link?: { label: string; href: string };
  status?: string;
};

export const work: WorkItem[] = [
  {
    id: "perp-bot",
    title: "Perpetual trading systems",
    role: "Independent · NestJS",
    period: "May 2025 - Present · ~8 months live",
    stack: ["NestJS", "TypeScript", "Extended", "RiseX", "Arcus"],
    bullets: [
      "Live execution across Extended, RiseX, and Arcus with entry/exit logic, risk controls, and PnL tracking.",
      "Focused on operational reliability: continuous runtime, venue selection, and position hygiene under live market conditions.",
    ],
    metrics: [
      { label: "Volume", value: "~$2M" },
      { label: "PnL", value: "$300+" },
      { label: "Incentive points", value: "350" },
      { label: "Runtime", value: "8 mo" },
    ],
  },
  {
    id: "wallet",
    title: "Abstract-native wallet (Privy-like)",
    role: "Fullstack · Core team",
    period: "May 2024 - May 2025",
    stack: ["TypeScript", "Admin dashboard", "Auth"],
    bullets: [
      "Built admin dashboard and operator flows for a chain-native wallet comparable to Privy-style embedded auth.",
      "Owned API key setup, authentication surfaces, and user whitelist / blacklist administration.",
    ],
  },
  {
    id: "lp-hedge",
    title: "Delta-neutral LP + perp hedge bot",
    role: "Independent · NestJS + Solidity",
    period: "2025 - Present",
    stack: ["NestJS", "Solidity", "HyperEVM LP", "Extended"],
    bullets: [
      "Automates Uniswap V3-style LP on HyperEVM with a short hedge sized to LP HYPE exposure on Extended.",
      "Rebalances on delta drift and out-of-range events to keep the book closer to market-neutral.",
      "In production and still iterating. Strategy not yet profitable.",
    ],
    link: {
      label: "Strategy write-up",
      href: "https://x.com/0xWhyZi/status/2043573371238219790",
    },
    status: "Live · not yet profitable",
  },
  {
    id: "meme-bots",
    title: "Meme coin trading · EVM + Solana",
    role: "Independent · NestJS",
    period: "2025 - Present",
    stack: ["NestJS", "GMGN", "ox", "Jupiter"],
    bullets: [
      "Data → execution pipeline: GMGN market data, ox for EVM swaps, Jupiter Aggregator for Solana.",
      "Live systems with strategy still iterating. Not yet profitable.",
    ],
    status: "Live · not yet profitable",
  },
];

export const research = [
  {
    title: "LighterEVM composability wishlist",
    blurb:
      "Personal take on LighterEVM as a ZK L2: lending liquidations into the orderbook, stakeLIT / LLP flows, and a full perp + DeFi stack.",
    href: "https://x.com/0xWhyZi/status/2017985083605647778",
  },
  {
    title: "Hyperliquid ecosystem farming guide",
    blurb:
      "Step-by-step HyperCore / HyperEVM flow across Unit, stakedHYPE, lending, and DEX liquidity venues.",
    href: "https://x.com/0xWhyZi/status/1914149629828206808",
  },
] as const;

export const experience = [
  {
    period: "May 2025 - Present",
    title: "Independent DeFi engineer",
    org: "Personal systems",
    detail:
      "Designing and operating trading bots for perps, delta-neutral LP hedges, and cross-chain meme execution.",
  },
  {
    period: "May 2024 - May 2025",
    title: "Fullstack developer",
    org: "Confidential Layer-1 · wallet core team",
    detail:
      "Admin dashboard, API key provisioning, auth, and whitelist/blacklist flows for an Abstract-native wallet.",
  },
  {
    period: "Early 2024 - May 2024",
    title: "Researcher",
    org: "Confidential Layer-1",
    detail: "Protocol and market research supporting BD and product decisions.",
  },
  {
    period: "2023 - 2024",
    title: "Business development",
    org: "Confidential Layer-1",
    detail: "Partnership and ecosystem BD for a Layer-1 blockchain company.",
  },
  {
    period: "2021 - 2022",
    title: "Community manager",
    org: "GameFi & Layer-1 projects",
    detail:
      "Community operations across early GameFi and L1 launches. Built the foundation for DeFi domain fluency.",
  },
] as const;

export const stack = {
  languages: ["TypeScript", "Solidity", "Java", "Rust"],
  integrate: ["NestJS", "Next.js", "ox (EVM)", "Jupiter Aggregator", "GMGN SDK"],
  defi: ["DEX", "Lending", "PerpDEX", "LP hedging"],
} as const;

export const stackGroups = [
  { key: "languages", title: "Languages", items: stack.languages },
  { key: "integrate", title: "Integrate", items: stack.integrate },
  { key: "defi", title: "DeFi experience", items: stack.defi },
] as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;
