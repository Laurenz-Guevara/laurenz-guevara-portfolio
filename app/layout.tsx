import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const Satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-VariableItalic.ttf",
    },
    {
      path: "../fonts/Satoshi-Variable.ttf",
    },
  ],
});

export const metadata: Metadata = {
  title: "Laurenz Guevara - Front-end Developer", description:
    "Front-end Developer with Startup, Agency, and in-house experience across multiple tech stacks in a range of industries and I'm genuinely passionate about what I do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Satoshi.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
