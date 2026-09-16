import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "UNLEASHWORKS services — Clarity Call (15 min, complimentary), Catalyst Session (60 min, ₹12,000), Architecture Session (90 min, ₹20,000), Momentum Package (2 hrs, ₹30,000, save ₹2,000).",
};

function mailtoFor(cta: string, name: string) {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `${cta} — ${name}`
  )}`;
}

/**
 * /services — detail companion to the #services anchor.
 * Expands each card into What I Do / What You Get (verbatim guideline.md).
 */
export default function ServicesPage() {
  return (
    <main className="bg-navy-deep">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="Services"
          title="Ways to work together"
          description="Full detail for each engagement. Every booking starts with an email — pick a session and write in."
        />

        <div className="mt-10 space-y-5">
          {siteConfig.services.map((service) => (
            <article
              key={service.id}
              aria-label={service.name}
              className={`rounded-2xl border p-6 sm:p-8 ${
                service.id === "momentum"
                  ? "border-gold/70 bg-navy-light"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  {service.id === "momentum" && (
                    <p className="mb-2 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                      Most value — save {"savings" in service ? service.savings : ""}
                    </p>
                  )}
                  <h2 className="font-display text-2xl font-bold text-white">
                    {service.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {service.subtitle}
                  </p>
                </div>
                <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  <div className="flex gap-1.5">
                    <dt className="text-white/50">Duration:</dt>
                    <dd className="font-medium text-white/90">{service.duration}</dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="text-white/50">Price:</dt>
                    <dd className="font-semibold text-white">{service.price}</dd>
                  </div>
                  {"individualValue" in service && service.individualValue && (
                    <div className="flex gap-1.5">
                      <dt className="text-white/50">Individually:</dt>
                      <dd className="font-medium text-white/70">
                        {service.individualValue} (save{" "}
                        {"savings" in service ? service.savings : ""})
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {"includes" in service && service.includes && (
                <div className="mt-4 rounded-xl border border-white/10 bg-navy/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    What it includes
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-white/80">
                    {service.includes.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    What I do
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/75">{service.whatIDo}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    What you get
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    {service.whatYouGet}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  href={mailtoFor(service.cta, service.name)}
                  variant={service.id === "momentum" ? "primary" : "secondary"}
                  size="md"
                  aria-label={`${service.cta} via email`}
                >
                  {service.cta} →
                </CTAButton>
                <CTAButton href="/#services" variant="ghost" size="md">
                  ← Back to overview
                </CTAButton>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          Questions? Email {siteConfig.contact.email} or see the FAQ at{" "}
          <a href="/#contact" className="text-gold underline-offset-4 hover:underline">
            #contact
          </a>
          .
        </p>
      </div>
    </main>
  );
}
