import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "benjamin-ward.com";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Benjamin Ward | Technology & Security Leader",
    description:
      "Benjamin Ward works across technology, security, leadership, and community-focused IT.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Benjamin Ward | Technology & Security Leader",
      description:
        "Technology leader and security strategist. Explore leadership experience, a private AI homelab, community work, and credentials.",
      url: "/",
      siteName: "Benjamin Ward",
      type: "website",
      images: [
        {
          url: "/og-v2.png",
          width: 1731,
          height: 909,
          alt: "Benjamin Ward. Technology leader. Security strategist.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Benjamin Ward | Technology & Security Leader",
      description: "Technology leader. Security strategist.",
      images: ["/og-v2.png"],
    },
    icons: {
      icon: "/favicon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
