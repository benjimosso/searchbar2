import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import LogouButton from "./LogouButton";

export default function NavBar({ user }) {
  return (
    <nav className="bg-neutral-500 text-neutral-100 p-4 flex justify-between">
      <ul className="flex items-center">
        <li className="pl-4 pr-4">
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
      {user ? (
        <div className="flex items-center justify-center">
          <p className="pr-4">{user.email}</p>
          <LogouButton/>
        </div>
      ) : (
        <ul className="flex items-center">
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
  );
}
