import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function NavLink({
  href,
  children,
  className = "",
}: NavLinkProps) {
  const baseClass =
    "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-800 dark:after:bg-neutral-200 after:transition-all hover:after:w-full";

  return (
    <Link href={href} className={cn(baseClass, className)}>
      {children}
    </Link>
  );
}
