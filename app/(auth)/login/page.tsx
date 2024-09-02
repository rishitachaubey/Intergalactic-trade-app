import { LoginForm } from "@/components/forms/login";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

export default function LoginPage(){
    return(
        <div className="flex flex-col items-center justify-center flex-1 mb-20">
            <div className="flex flex-col gap-6 p-10 border-2 rounded-lg">
                <h1 className="text-4xl font-semibold">Welcome Back, Login to continue.</h1> 
                <LoginForm/>
                <Separator />
                <span className="text-center text-gray-400">Dont have an account? <Link href="/signup" className="text-black">Signup Here</Link></span>
            </div>
        </div>
    )
}