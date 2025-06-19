import Link from "next/link";
import { type ReactNode } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ExternalLinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  iconLeft?: ReactNode;
  onClick?: () => void;
};

export default function ExternalLinkButton({
  href,
  children,
  className = "",
  iconLeft,
  onClick,
}: ExternalLinkButtonProps) {
  const baseClasses =
    "flex flex-row items-center justify-center gap-1 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-neutral-200/30 dark:bg-neutral-900/30 hover:bg-neutral-400 dark:hover:bg-neutral-700 transition ease-in-out duration-300";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {iconLeft && (
        <span className="flex items-center h-4 w-4 sm:h-5 sm:w-5">{iconLeft}</span>
      )}
      {children}
      <FaExternalLinkAlt className="mb-2 h-3 w-3 sm:h-4 sm:w-4" />
    </Link>
  );
}