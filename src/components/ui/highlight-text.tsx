import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const HighlightText: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <span className={cn("text-black dark:text-white", className)}>{children}</span>;
};