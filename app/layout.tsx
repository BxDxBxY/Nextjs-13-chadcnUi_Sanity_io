import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs 13 | Jack's Portfolio",
  description: "App in order to enhance working skills on Nextjs 13!",
  other: {
    "theme-color": "#c2c2c2",
    "color-theme": "dark only",
    "twitter:image": "jack-logo.png",
    "twitter:card": "summary_large_image",
    "og:url": "jacks-nextjs13-project.rizz",
    "og:image": "jack-logo.webp",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
