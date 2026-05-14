import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TechnicalPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function TechnicalPanel({
  children,
  className,
  ...props
}: TechnicalPanelProps) {
  return (
    <div className={cn("technical-panel", className)} {...props}>
      {children}
    </div>
  );
}
