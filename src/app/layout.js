import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Portfolio Website Created with Next.js, Tailwind CSS, Three.js, and Framer Motion",
    default:
      "Portfolio Website Created with Next.js, Tailwind CSS, Three.js, and Framer Motion",
  },
  description:
    "Portfolio website created with Next.js, Tailwind CSS, Three.js, and Framer Motion. It showcases the projects and blogs of a software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
