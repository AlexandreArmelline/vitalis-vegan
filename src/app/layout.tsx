import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { primaryNav, footerNav } from "@/data/site";
import { SITE, buildMetadata, organizationSchema, websiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Atoms";

/* ------------------------------------------------------------------
   1 LAYOUT RAIZ
   1.1 Fontes
   1.2 Metadados globais
   1.3 Viewport e tema
   1.4 Componente RootLayout
------------------------------------------------------------------ */

/* 1.1 Fontes */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

/* 1.2 Metadados globais */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "VITALIS — Portal Vegano: guia de 21 dias, receitas e ciência",
    description: SITE.description,
    path: "/",
  }),
  metadataBase: new URL(SITE.url),
  title: {
    default: "VITALIS — Portal Vegano: guia de 21 dias, receitas e ciência",
    template: "%s | VITALIS",
  },
  applicationName: SITE.name,
  authors: [{ name: SITE.author.name, url: SITE.author.url }],
  creator: SITE.author.name,
  publisher: SITE.legalName,
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
};

/* 1.3 Viewport e tema */
export const viewport: Viewport = {
  themeColor: "#04070b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/* 1.4 Componente RootLayout */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <body className="u-noise antialiased">
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo principal
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header groups={primaryNav} />
        <main id="conteudo">{children}</main>
        <Footer columns={footerNav} />
      </body>
    </html>
  );
}

/* Índice
   1 LAYOUT RAIZ
     1.1 Fontes
     1.2 Metadados globais
     1.3 Viewport e tema
     1.4 Componente RootLayout
*/
