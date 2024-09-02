import { Logo } from "./logo";

export function Footer(){
    return(
        <div className="flex flex-col items-center justify-center gap-10 bg-black p-10">
            <Logo/>
        </div>
    )
}