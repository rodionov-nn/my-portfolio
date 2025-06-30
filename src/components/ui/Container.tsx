import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto max-w-11/12 2xl:max-w-screen-2xl px-4",
        className
      )}
    >
      {children}
    </div>
  );
}
