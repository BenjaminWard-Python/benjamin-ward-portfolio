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
      "Technology leader, security strategist, and builder leading resilient systems, strong teams, and pragmatic cybersecurity.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Benjamin Ward | Technology & Security Leader",
      description:
        "Technology leader. Security strategist. Builder. Explore leadership impact, a private AI homelab, community work, and credentials.",
      url: "/",
      siteName: "Benjamin Ward",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1731,
          height: 909,
          alt: "Benjamin Ward — Technology leader. Security strategist. Builder.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Benjamin Ward | Technology & Security Leader",
      description: "Technology leader. Security strategist. Builder.",
      images: ["/og.png"],
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
