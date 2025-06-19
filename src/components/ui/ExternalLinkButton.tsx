import Link from "next/link";
import { type ReactNode } from "react";
import { ExternalLink } from "lucide-react";

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
    "flex flex-row items-center justify-center gap-1 rounded-2xl border border-neutral-700 bg-neutral-900/30 hover:bg-neutral-800 duration-300 ease-in-out";

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
      <ExternalLink className="mb-2 h-3 w-3 sm:h-4 sm:w-4" />
    </Link>
  );
}