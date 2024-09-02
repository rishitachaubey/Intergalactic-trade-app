'use client';

import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button";

export async function LogoutBtn(){
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut(); 
    router.push('/login'); 
  };
  return(
    <Button className='w-fit rounded-full' variant={"destructive"} onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}