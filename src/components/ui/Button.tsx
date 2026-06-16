import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white shadow-soft hover:bg-brand-navy dark:bg-brand-green dark:text-slate-950 dark:hover:bg-white",
  secondary:
    "border border-brand-blue/20 bg-white text-brand-navy hover:border-brand-blue hover:bg-brand-sky dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  ghost:
    "text-brand-navy hover:bg-brand-sky dark:text-white dark:hover:bg-white/10",
};

const baseClasses =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ href, variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  return (
    <Link className={`${baseClasses} ${variantClasses[variant]} ${className}`} href={href} {...props}>
      {children}
    </Link>
  );
}
