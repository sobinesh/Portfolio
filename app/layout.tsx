import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobinesh S | Software Developer",
  description:
    "Software Developer specialising in .NET MAUI, ASP.NET Core, Azure, and React. Building enterprise cross-platform applications.",
  keywords: [
    "Sobinesh",
    ".NET MAUI",
    "C#",
    "ASP.NET Core",
    "Azure",
    "Software Developer",
    "Xamarin",
    "React",
    "Next.js",
  ],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230d0d0d'/><text y='.9em' font-size='80' x='10'>⬡</text></svg>",
        type: "image/svg+xml",
      },
    ],
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='12' fill='%230d0d0d'/><text y='78' x='12' font-size='72' fill='%23c8f03c' font-family='monospace' font-weight='bold'>S</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
