import SectionHeading from "./ui/SectionHeading";
import { siteConfig } from "@/content/site";

/**
 * Our Story section — anchor target (#story).
 * Timeline: COVID origin → corporate chapter → return (verbatim guideline.md).
 */
const TIMELINE = [
  {
    phase: "The beginning",
    title: "An idea born in uncertain times",
    body: "UNLEASHWORKS began during the uncertainty of COVID, when the world of work was changing and new possibilities were emerging. What started as a freelance journey was an opportunity to explore independent work around a long-standing passion for people, leadership, learning and organisational development.",
  },
  {
    phase: "The corporate chapter",
    title: "Back into the corporate world",
    body: "As circumstances changed, the journey moved back into the corporate world. The years that followed brought new experiences, perspectives and a deeper understanding of leadership, culture and change.",
  },
  {
    phase: "Today",
    title: "A return to the original idea",
    body: "Today, UNLEASHWORKS is a return to that original idea — bringing together years of experience and a passion for meaningful work with people and organisations.",
  },
] as const;

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="scroll-mt-20 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Our Story"
          title={siteConfig.story.subheading}
          description="Three chapters — from a freelance spark during COVID, through deep corporate experience, to UNLEASHWORKS today."
        >
          <span id="story-heading" className="sr-only">
            Our Story
          </span>
        </SectionHeading>

        <ol className="relative mx-auto mt-12 max-w-3xl space-y-0 border-l border-gold/30 pl-0">
          {TIMELINE.map((step, i) => (
            <li key={step.phase} className="relative pb-10 pl-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold bg-navy"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {String(i + 1).padStart(2, "0")} — {step.phase}
              </p>
              <h3 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/70 sm:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/25 bg-navy-light/60 p-6 text-center sm:p-8">
          <p className="font-display text-lg italic leading-8 text-white/90 sm:text-xl">
            “{siteConfig.belief.lines[0]} {siteConfig.belief.lines[1]}”
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {siteConfig.belief.purpose}
          </p>
        </div>
      </div>
    </section>
  );
}
