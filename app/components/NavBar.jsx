import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
// components
import LogouButton from "./LogouButton";
import SearchBar from "./SearchBar";
import LowerNav from "./LowerNav";
//shadcn components
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import {ModeToggle} from "@/components/ui/darkmode";

export default function NavBar({ profile, ciscoData }) {
  

  return (
    <>
      <nav className="bg-white text-black p-4 flex justify-between items-baseline border-solid ">
        <ul className="flex items-center pl-8">
          <li className="pl-4 pr-4">
            {/* TO CHECK, NEED THE HOME PAGE BUTTON TO REFRESH THE PAGE... */}
            <Link href="/">
              <div className="flex items-center">
                <IoMdHome />
                <span className="pl-2">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="flex items-center">
                <IoMdInformationCircle />
                <span className="pl-2">About</span>
              </div>
            </Link>
          </li>
        </ul>
        {/* It could be an idea to put the searchbar here...  */}
        <SearchBar ciscoData={ciscoData} />
        {profile ? (
          <div className="flex items-center">
            <p className="pr-4">Hi, {profile.first_name}</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="mr-4">
                  <AvatarImage src="" alt="avatar" />
                  {/* This could be an option, please review for a better solution */}
                {profile.first_name ? (
                    <AvatarFallback>
                      {Array.from(profile.first_name)[0] + Array.from(profile.last_name)[0]}
                    </AvatarFallback>
                  ) : (
                    <AvatarFallback></AvatarFallback>
                  )} 
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile">
                    <p>Profile</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogouButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <ModeToggle className="ml-6"/> */}
          </div>
        ) : (
          <ul className="flex items-center pr-8">
            <li className="pr-4">
              <Link href="/login">
                <p className="font-bold">Login</p>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <p className="font-bold">Signup</p>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
