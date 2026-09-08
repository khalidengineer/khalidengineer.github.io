import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import GlobalBackground3D from "@/components/3d/GlobalBackground3D";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070706",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Arjun — Full Stack Developer & Creative Technologist",
  description:
    "Full-stack developer crafting beautiful, fast and scalable digital products that solve real-world problems. Modern web experiences, high-performance architectures, and UI/UX design.",
  keywords: [
    "Full Stack Developer",
    "Creative Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "Tailwind CSS",
    "Web Development",
    "Arjun",
  ],
  authors: [{ name: "Dev Arjun" }],
  creator: "Dev Arjun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devarjun.app",
    title: "Dev Arjun — Full Stack Developer",
    description: "Full-stack developer crafting beautiful, fast and scalable digital products.",
    siteName: "Dev Arjun Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Arjun — Full Stack Developer",
    description: "Full-stack developer crafting beautiful, fast and scalable digital products.",
    creator: "@devarjun",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="bg-background text-text-main antialiased selection:bg-gold-primary/20 selection:text-gold-bright min-h-screen flex flex-col relative cinematic-bg">
        {/* Global Scroll-Reactive 3D Space Atmosphere */}
        <GlobalBackground3D />

        {/* Cinematic Film Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] bg-noise opacity-30" />

        {/* Desktop Luxury Custom Cursor */}
        <CustomCursor />

        {/* Lenis Smooth Momentum Scroll Provider */}
        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
