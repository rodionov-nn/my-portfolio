import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function NavLink({
  href,
  children,
  className = "",
}: NavLinkProps) {
  const baseClass =
    "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0a0a0a] dark:after:bg-[#ededed] after:transition-all hover:after:w-full ease-in-out duration-300";

  return (
    <Link href={href} className={cn(baseClass, className)}>
      {children}
    </Link>
  );
}
