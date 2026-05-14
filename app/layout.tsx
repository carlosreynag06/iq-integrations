import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iqintegrations.com"),
  title: {
    default: "IQ Integrations | AI Automation Systems for Service Businesses",
    template: "%s | IQ Integrations",
  },
  description:
    "IQ Integrations builds AI automation systems that capture leads, answer calls, book appointments, process documents, and recover revenue for service businesses.",
  applicationName: "IQ Integrations",
  openGraph: {
    title: "IQ Integrations | AI Automation Systems for Service Businesses",
    description:
      "AI automation systems that capture leads, answer calls, book appointments, process documents, and recover revenue for service businesses.",
    url: "https://iqintegrations.com",
    siteName: "IQ Integrations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQ Integrations | AI Automation Systems for Service Businesses",
    description:
      "Premium AI automation systems for revenue recovery and service-business operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
