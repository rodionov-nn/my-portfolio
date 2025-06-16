import Link from "next/link";
import { type ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  external?: boolean;
};

export default function LinkButton({
  href,
  children,
  className = "",
  iconLeft,
  iconRight,
  external = false,
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
      >
        {iconLeft}
        {children}
        {iconRight}
      </a>
    );
  }

  return (
    <Link href={href} className={finalClass}>
      {iconLeft}
      {children}
      {iconRight}
    </Link>
  );
}
