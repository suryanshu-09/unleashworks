"use client";

import { useState } from "react";
import CTAButton from "./ui/CTAButton";
import SectionHeading from "./ui/SectionHeading";
import { siteConfig } from "@/content/site";

/**
 * FAQ accordion — accessible single-open <button> + region pattern.
 * All answers sourced strictly from guideline.md (services, durations,
 * prices, contact). No invented process, tools or guarantees.
 */
const FAQS = [
  {
    q: "How do I book a session?",
    a: "Email nuzhath.ayaz@gmail.com with the session name in the subject line (e.g. “Book a Catalyst Session”). You will receive a reply with availability and next steps. There is no automated booking form.",
  },
  {
    q: "What happens on the free Clarity Call?",
    a: "A 15-minute complimentary call. You share your role, challenge and what you are trying to achieve; you get honest direction on the most direct path forward and whether working together is the right fit. No pitch.",
  },
  {
    q: "How are the Catalyst and Architecture sessions different?",
    a: "The Catalyst Session (60 minutes, ₹12,000) is a focused 1:1 on one specific challenge — a leadership dilemma, communication gap, team dynamic or L&D design question. The Architecture Session (90 minutes, ₹20,000) is for building something — a leadership plan, L&D strategy, communication framework or OD roadmap — with a bespoke action blueprint.",
  },
  {
    q: "What is the Momentum Package, and what do I save?",
    a: "The Momentum Package combines the Catalyst Session (60 min) and the Architecture Session (90 min) — 2 hours total for ₹30,000. Bought individually they are ₹32,000, so you save ₹2,000. It is for those ready to move from understanding the challenge to a practical way forward.",
  },
  {
    q: "Who are the sessions for?",
    a: "Corporate professionals, leaders and organisations working on leadership, change and culture — including communication, team dynamics, and learning & development design.",
  },
  {
    q: "Where else can I reach you?",
    a: "On LinkedIn at linkedin.com/in/nuzhath-ayaz-215b688. Email remains the fastest way to book: nuzhath.ayaz@gmail.com.",
  },
] as const;

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:px-6 sm:text-base"
              >
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg font-normal transition ${
                    open ? "border-gold bg-gold text-navy" : "border-white/20 text-gold"
                  }`}
                >
                  {open ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!open}
              className="px-5 pb-5 text-sm leading-7 text-white/70 sm:px-6"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Contact section — anchor target (#contact).
 * mailto CTA + LinkedIn button (verified only, no phone/form).
 * Includes the FAQ accordion.
 */
export default function Contact() {
  const emailHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    "Enquiry — UNLEASHWORKS"
  )}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow={siteConfig.connect.heading}
          title={siteConfig.connect.subheading}
          description={siteConfig.connect.body}
        >
          <span id="contact-heading" className="sr-only">
            Contact
          </span>
        </SectionHeading>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/25 bg-navy-light/60 p-6 text-center sm:p-10">
          <p className="text-sm font-medium text-white/70">Email — fastest way to book</p>
          <a
            href={emailHref}
            className="mt-2 block break-all font-display text-xl font-bold text-gold transition hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:text-2xl"
          >
            {siteConfig.contact.email}
          </a>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={emailHref} variant="primary" size="md">
              {siteConfig.connect.cta} →
            </CTAButton>
            <CTAButton
              href={siteConfig.contact.linkedin}
              variant="secondary"
              size="md"
              external
              aria-label="Connect on LinkedIn (opens in new tab)"
            >
              Connect on LinkedIn →
            </CTAButton>
          </div>
          <p className="mt-4 text-xs text-white/50">
            Prefer LinkedIn? Message via linkedin.com/in/nuzhath-ayaz-215b688 — or email
            directly for bookings.
          </p>
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="Straight from the services above — durations, prices and how booking works."
          />
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
