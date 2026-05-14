import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn("button-base", variant === "secondary" && "button-secondary", className)}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} />
    </Link>
  );
}
