import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoneFast - Location de voitures simples, accessibles, rapides",
  description: "La rapidité au service de la performance. Location de voitures simples, accessibles et rapides.",
  keywords: "location voiture, location automobile, voiture simple, rapide, accessible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-stonefast-gray-light text-stonefast-black`}>
        <Navigation />
        <main className="min-h-screen">
          <AnimatedWrapper>
            {children}
          </AnimatedWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
