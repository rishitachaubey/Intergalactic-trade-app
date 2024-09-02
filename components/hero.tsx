import { cn } from "@/lib/utils";
import localFont from "next/font/local"
import { Button } from "./ui/button";
import Link from "next/link";

const LogoFont = localFont({
    src : "../public/fonts/URW Imperial W01 Ultra Bold.ttf"
})

export function HeroSection(){
    return(
        <div className={cn(LogoFont.className, "flex flex-col items-center justify-center gap-7 mt-10 px-10 text-4xl italic")}>
            Intergalactic trade
        </div>
    )
}