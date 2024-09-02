import { Logo } from "@/components/logo";
import { AccountBtn } from "./auth/account";
import { LogoutBtn } from "./auth/logout";
import { auth } from "@/auth";

export async function Navbar(){
    const session = await auth();
    return(
            <div className="flex items-center justify-between h-[10vh] container">
                <Logo/>
                <div className="flex items-center justify-center gap-2 lg:gap-4">
                    <AccountBtn/>
                    {session?.user.id ? <LogoutBtn/> : null}
                </div>
            </div>
    )
}