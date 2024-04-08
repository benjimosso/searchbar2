'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

// shadcn components
import { LoginShadCn } from "@/components/component/loginShad"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Button from "@/components/ui/button"

export default function Login() {

    const router = useRouter();
    const [error, setError] = useState(null);

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();
        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        if (!error) {
            router.push("/");
            router.refresh();
        }
    };


  return (
    <div className="flex-1 flex items-center flex-col">
      <h2 className="text-2xl pb-4 font-bold">Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
        {/* <LoginShadCn handleSubmit={handleSubmit} /> */}
        {/* <Avatar> 
            <AvatarImage src="https://avatars.dicebear.com/api/human/123.svg" alt="avatar" />
            <AvatarFallback>123</AvatarFallback>
        </Avatar> */}
        {error && <p className="pt-2 text-red-500 font-bold">{error}</p>}
    </div>
  )
}
