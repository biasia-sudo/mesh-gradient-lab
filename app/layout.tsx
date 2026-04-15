import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mesh Gradient Lab",
  description: "Animated mesh gradient previews built from Mona's preset library.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
