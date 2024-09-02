import { SignupForm } from "@/components/forms/signup";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

export default function SignupPage(){
    return(
        <div className="flex flex-col items-center justify-center flex-1 mb-20">
            <div className="flex flex-col gap-6 p-10 border-2 rounded-lg">
                <h1 className="text-4xl font-semibold">Create an Account, start trading.</h1>
                <SignupForm/>
                <Separator />
                <span className="text-center text-gray-400">Already have an account? <Link href="/login" className="text-black">Login Here</Link></span>
            </div>
        </div>
    )
}