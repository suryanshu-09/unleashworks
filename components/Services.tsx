"use client";

import CTAButton from "./ui/CTAButton";
import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ui/ServiceCard";
import { siteConfig } from "@/content/site";

/**
 * Services section — single-page anchor target (#services).
 * 4 cards with exact Duration / Price / mailto CTA from guideline.md.
 * Detailed What I Do / What You Get lives on /services.
 */
export default function Services() {
  const [clarity, catalyst, architecture, momentum] = siteConfig.services;

  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-navy-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Ways to work together"
          description="Four focused entry points — from a complimentary first conversation to a two-session package. Every booking starts with an email; no forms, no funnels."
        >
          <span id="services-heading" className="sr-only">
            Services
          </span>
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <ServiceCard
            name={clarity.name}
            subtitle={clarity.subtitle}
            duration={clarity.duration}
            price={clarity.price}
            description={`${clarity.whatIDo} ${clarity.whatYouGet}`}
            ctaLabel={clarity.cta}
          />
          <ServiceCard
            name={catalyst.name}
            subtitle={catalyst.subtitle}
            duration={catalyst.duration}
            price={catalyst.price}
            description={`${catalyst.whatIDo} ${catalyst.whatYouGet}`}
            ctaLabel={catalyst.cta}
          />
          <ServiceCard
            name={architecture.name}
            subtitle={architecture.subtitle}
            duration={architecture.duration}
            price={architecture.price}
            description={`${architecture.whatIDo} ${architecture.whatYouGet}`}
            ctaLabel={architecture.cta}
          />
          <ServiceCard
            name={momentum.name}
            subtitle={momentum.subtitle}
            duration={momentum.duration}
            price={`${momentum.price} (Save ${momentum.savings} vs ${momentum.individualValue} individually)`}
            description={`${momentum.whatIDo} ${momentum.whatYouGet} Includes: ${(momentum.includes ?? []).join(" · ")}.`}
            ctaLabel={momentum.cta}
            featured
            savingsNote={`Individual value ${momentum.individualValue} — you save ${momentum.savings}.`}
          />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <CTAButton href="/services" variant="secondary" size="md">
            Compare services in detail →
          </CTAButton>
          <p className="text-xs text-white/50">
            Duration & pricing exactly as listed: 15 min complimentary · 60 min ₹12,000 · 90 min ₹20,000 · 2 hrs ₹30,000.
          </p>
        </div>
      </div>
    </section>
  );
}
