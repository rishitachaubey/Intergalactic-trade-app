import { Inter } from "next/font/google";
import "../globals.css";

import config from '../config';
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/hero";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: config.originalTitle,
    template: `%s | ${config.originalTitle}`,
  },
  description: config.originalDescription,
  openGraph: {
    type: 'website',
    title: config.originalTitle,
    description: config.originalDescription,
    url: config.currentURL,
    siteName: config.siteName,
    images: [
      {
        url: config.originalImage,
        alt: config.originalTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: config.social.twitter,
    title: config.originalTitle,
    description: config.originalDescription,
    images: [
      {
        url: config.originalImage,
        alt: config.originalTitle,
      },
    ],
  },
};

export default function RootLayout({ children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <div className="min-h-[95vh] flex flex-col bg-red-50">
          <div className="bg-red-50 pb-[30vh]">
            <Navbar/>
          </div>
          <HeroSection/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
