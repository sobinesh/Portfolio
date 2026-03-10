import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobinesh S | Software Developer",
  description:
    "Software Developer specialising in .NET MAUI, ASP.NET Core, Azure, and React. Building enterprise cross-platform applications.",
  keywords: [
    "Sobinesh", ".NET MAUI", "C#", "ASP.NET Core",
    "Azure", "Software Developer", "Xamarin", "React", "Next.js",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
