import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { metaData } from "../metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <div className="min-h-[100vh]">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
