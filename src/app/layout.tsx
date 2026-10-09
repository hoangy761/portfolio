import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "0xWhyZi · Bùi Hoàng Ý — DeFi Fullstack Engineer";
const description =
  "Fullstack TypeScript engineer with DeFi skin-in-the-game since 2021. Wallet admin systems, perpetual trading bots (~$2M volume), and live cross-chain execution.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · 0xWhyZi",
  },
  description,
  applicationName: "0xWhyZi CV",
  authors: [{ name: "Bùi Hoàng Ý", url: "https://x.com/0xWhyZi" }],
  creator: "0xWhyZi",
  keywords: [
    "0xWhyZi",
    "Bùi Hoàng Ý",
    "DeFi",
    "TypeScript",
    "NestJS",
    "Fullstack",
    "Perpetual",
    "Blockchain",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "0xWhyZi",
    title: "0xWhyZi — DeFi Fullstack Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "0xWhyZi — DeFi Fullstack Engineer",
    description,
    creator: "@0xWhyZi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F766E",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
