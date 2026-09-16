import CTAButton from "./CTAButton";
import { siteConfig } from "@/content/site";

interface ServiceCardProps {
  name: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  ctaLabel: string;
  featured?: boolean;
  savingsNote?: string;
}

/**
 * Shared service card — navy panel, gold accents, duration + price meta.
 * CTA always routes to email so booking stays verified (no fake forms).
 */
export default function ServiceCard({
  name,
  subtitle,
  duration,
  price,
  description,
  ctaLabel,
  featured = false,
  savingsNote,
}: ServiceCardProps) {
  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `${ctaLabel} — ${name}`
  )}`;
  return (
    <article
      aria-label={name}
      className={`flex h-full flex-col rounded-2xl border p-6 text-left transition sm:p-7 ${
        featured
          ? "border-gold/70 bg-navy-light shadow-[0_0_0_1px_rgba(201,162,39,0.35),0_20px_50px_-20px_rgba(201,162,39,0.35)]"
          : "border-white/10 bg-white/[0.03] hover:border-gold/40"
      }`}
    >
      {featured && (
        <p className="mb-3 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
          Most value
        </p>
      )}
      <h3 className="font-display text-xl font-bold text-white">{name}</h3>
      <p className="mt-1 text-sm font-medium text-gold">{subtitle}</p>
      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        <div className="flex gap-1.5">
          <dt className="text-white/50">Duration:</dt>
          <dd className="font-medium text-white/90">{duration}</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="text-white/50">Price:</dt>
          <dd className="font-semibold text-white">{price}</dd>
        </div>
      </dl>
      {savingsNote && (
        <p className="mt-1 text-xs font-medium text-gold-light">{savingsNote}</p>
      )}
      <p className="mt-3 flex-1 text-sm leading-6 text-white/70">{description}</p>
      <div className="mt-6">
        <CTAButton
          href={mailto}
          variant={featured ? "primary" : "secondary"}
          size="sm"
          className="w-full sm:w-auto"
          aria-label={`${ctaLabel} via email`}
        >
          {ctaLabel} →
        </CTAButton>
      </div>
    </article>
  );
}
