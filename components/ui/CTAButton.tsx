import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light focus-visible:outline-gold",
  secondary:
    "border border-white/20 text-white hover:border-gold hover:text-gold focus-visible:outline-gold",
  ghost: "text-gold hover:text-gold-light focus-visible:outline-gold",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Shared call-to-action link styled as a button.
 * Always an <a> so mailto / anchor / external links stay semantic.
 */
export default function CTAButton({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ...rest
}: CTAButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
