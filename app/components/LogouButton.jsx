'use client';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
// shadcn components
import { Button } from "@/components/ui/button";

export default function LogouButton() {

    const router = useRouter();
    const handleLogout = async () => {
        const supabase = createClientComponentClient();
        const {error} = await supabase.auth.signOut();
        if(!error){
            router.push('/login')
            router.refresh()
        }  
        if (error) {
            console.log('Error logging out: ', error.message)
        }
    };
  return (
      <Button 
      onClick={handleLogout}
      
    //   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
      >
        Logout
      </Button>
  )
}
