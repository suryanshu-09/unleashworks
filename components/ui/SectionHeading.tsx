import type { ReactNode } from "react";

type Align = "left" | "center";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  /** Optional id for the heading (anchor targets live on <section> instead). */
  id?: string;
  children?: ReactNode;
}

/**
 * Shared section heading — gold eyebrow + serif title + muted description.
 * Keeps typography consistent across Story / Services / Insights / Contact.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  children,
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-7 text-white/70">{description}</p>
      )}
      {children}
    </div>
  );
}
