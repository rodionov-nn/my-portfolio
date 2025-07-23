import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={cn("w-full mx-auto max-w-11/12 2xl:max-w-screen-2xl px-4", className)}>{children}</div>;
};