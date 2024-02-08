import Link from "next/link";
import React from "react";
import { FaCopyright } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

export default function Footer() {
  return (
    <div className=" bottom-0 w-full bg-neutral-500 ">
      <div className="flex justify-center items-center">
        <FaCopyright size={17}/>
        <p className="pl-2 pr-4 ">Daniel Mosso</p>
        <Link href="https://github.com/benjimosso" target="_blank">
          <IoLogoGithub size={25}/>
        </Link>
      </div>
    </div>
  );
}
