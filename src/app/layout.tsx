import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/global/CustomCursor";
import ScrollProgressBar from "@/components/global/ScrollProgressBar";
import ParticlesCanvas from "@/components/global/ParticlesCanvas";
import PixelRobot from "@/components/global/PixelRobot";
import ToastProvider from "@/components/global/ToastProvider";

const monoFont = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const sansFont = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Naveen Kumar C | AI Engineer",
  description: "Portfolio of Naveen Kumar C, AI Engineer & Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monoFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        <ToastProvider>
          <ParticlesCanvas />
          <CustomCursor />
          <ScrollProgressBar />
          <PixelRobot />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
