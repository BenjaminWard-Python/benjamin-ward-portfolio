import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://benjamin-ward.com"),
    title: "Benjamin Ward | Technology & Security Leader",
    description:
      "Benjamin Ward works across technology, security, leadership, and community-focused IT.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Benjamin Ward | Technology & Security Leader",
      description:
        "Technology leader and security strategist. Explore leadership experience, community work, and credentials.",
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
