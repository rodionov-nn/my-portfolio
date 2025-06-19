import Link from "next/link";
import { type ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export default function LinkButton({
  href,
  children,
  className = "",
  external = false,
  onClick,
}: LinkButtonProps) {
  const baseClasses =
    "flex flex-row items-center gap-1 rounded-2xl border border-neutral-700 bg-neutral-900/30 hover:bg-neutral-800 duration-300 ease-in-out";

  const finalClass = `${baseClasses} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClass}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={finalClass} onClick={onClick}>
      {children}
    </Link>
  );
}
