import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

const title = "Niter - Fix Grammar Mistakes Efficiently";
const description = "Fix grammar with gpt-3.5 for free.";

export const metadata: Metadata = {
  metadataBase: new URL("https://niter.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bodyfr">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
