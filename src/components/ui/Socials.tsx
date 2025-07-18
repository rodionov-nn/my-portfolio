import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="hidden md:flex fixed right-0 bottom-0 z-10 text-2xl p-1.5 m-1.5 items-center justify-center rounded-full bobg-neutral-300/20 dark:bg-neutral-700/20 border border-neutral-400 dark:border-neutral-700 backdrop-blur-md shadow-neutral-900/50 dark:shadow-neutral-600/50 shadow-md">
      <div className="flex flex-col gap-2">
        <Link href="https://github.com/rodionov-nn" target="_blank">
          <FaGithub className="hover:opacity-50 active:scale-95 transition duration-300"/>
        </Link>
        <Link href="https://www.linkedin.com/in/rodionov-nn" target="_blank">
          <FaLinkedin className="hover:text-[#0072B1] active:scale-95 transition duration-300"/>
        </Link>
        <Link href="https://www.instagram.com/rodionov.nn" target="_blank">
          <FaInstagram className="hover:opacity-50 active:scale-95 transition duration-300"/>
        </Link>
        <Link href="https://www.instagram.com/rodionov.nn" target="_blank">
          <FaTelegram className="hover:text-[#0088cc] active:scale-95 transition duration-300"/>
        </Link>
      </div>
    </div>
  );
}
