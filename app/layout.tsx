import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "../components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className="bg-gradient-to-r from-azul-800 to-azul-300 min-h-screen"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>
			{/*HEADER NAVBAR*/} 
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
			{/*CONTENIDO*/} 
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
			{/**FOOOTER*/} 
            <footer className="w-full flex items-center justify-center py-3">
              footer
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
