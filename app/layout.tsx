import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBA Network Hub",
  description: "Private pastor network for the Delaware Baptist Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
