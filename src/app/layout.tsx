import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dirafrost Citrus Landing",
  description: "Replica landing experience built in Next.js"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
