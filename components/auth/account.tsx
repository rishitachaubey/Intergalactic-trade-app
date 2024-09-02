import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

export async function AccountBtn(){
    const session = await auth();
    const userId = session?.user.id;
    let accountRedirect = "/profile";
    let userText = "Profile";
    if (userId === undefined){
        accountRedirect = "/login";
        userText = "Login";
    }
    return(
        <Link className="ml-3" href={accountRedirect}>
            <Button className="rounded-full">{userText}</Button>
        </Link>
    )
}