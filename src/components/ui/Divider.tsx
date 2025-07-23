import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Divider: React.FC<Props> = ({ className }) => {
  return (
        <div className={cn("h-8 w-0.5 bg-neutral-800 dark:bg-neutral-200 rounded-full", className)} />
    )
}