import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs 13 | Jack's Portfolio",
  description: "App in order to enhance working skills on Nextjs 13!",
  other: {
    "theme-color": "#c2c2c2",
    "color-theme": "dark only",
    "twitter:image":
      "https://avatars.mds.yandex.net/i?id=5efd2068a563aadd572b35fba114068c305da015-10850463-images-thumbs&n=13",
    "twitter:card": "summary_large_image",
    "og:url": "jacks-nextjs13-project.rizz",
    "og:image":
      "https://avatars.mds.yandex.net/i?id=5efd2068a563aadd572b35fba114068c305da015-10850463-images-thumbs&n=13",
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
