import Image from "next/image";
import Contact from "@/components/Contact";
import FeaturedVideo from "@/components/FeaturedVideo";
import Insights from "@/components/Insights";
import Services from "@/components/Services";
import Story from "@/components/Story";
import { CTAButton, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/content/site";

const CLARITY_MAILTO = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
  "Book a Clarity Call — UNLEASHWORKS"
)}`;

// Trust band: single source of truth from siteConfig.stats
// Conservative floor per guideline.md homepage (20+ / 100+ / 10+).
// The higher "1,000+ programmes / 50,000+ professionals" figure is quoted
// verbatim ONLY inside the Architecture Session copy where it originated.

export default function Home() {
  return (
    <main className="flex flex-col bg-navy text-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-navy"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(30,53,117,0.55),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold sm:text-sm">
              UNLEASHWORKS
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-white/70">
              {siteConfig.hero.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="font-display mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              {siteConfig.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {siteConfig.hero.intro}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              {siteConfig.hero.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href={CLARITY_MAILTO} size="lg">
                Book Clarity Call
              </CTAButton>
              <CTAButton href="#services" variant="secondary" size="lg">
                Explore Services
              </CTAButton>
            </div>
            <p className="mt-4 text-xs tracking-wide text-white/50">
              Complimentary 15-minute call · No pitch, just honest direction.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <figure className="relative overflow-hidden rounded-3xl border border-gold/30 bg-navy-deep shadow-[0_24px_60px_-24px_rgba(201,162,39,0.35)]">
              <Image
                src="/pfp.jpeg"
                alt="Portrait of Nuzhath Ayaz, founder of UNLEASHWORKS"
                width={640}
                height={800}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="aspect-[4/5] w-full object-cover"
                priority
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent px-6 pb-5 pt-14 text-left">
                <p className="text-base font-semibold text-white">
                  {siteConfig.founder.name}
                </p>
                <p className="mt-0.5 text-sm text-gold">
                  {siteConfig.founder.role}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Trust stats band ─────────────────────────────── */}
      <section
        aria-label="Experience at a glance"
        className="border-y border-gold/20 bg-navy-deep"
      >
        <dl className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-6 py-8 text-center"
            >
              <dd className="font-display text-4xl font-bold text-gold sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-1 max-w-[22ch] text-sm font-medium leading-6 text-white/70">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
        <p className="mx-auto max-w-6xl px-4 pb-5 text-center text-xs leading-5 text-white/40 sm:px-6">
          Conservative figures from our homepage brief — see the Architecture
          Session for programme-delivery detail.
        </p>
      </section>

      {/* ── Who We Are ───────────────────────────────────── */}
      <section aria-labelledby="who-we-are" className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Who We Are"
            title={siteConfig.about.heading}
            align="left"
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-5 text-base leading-7 text-white/75">
              {siteConfig.about.body.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
              <p className="border-l-2 border-gold pl-4 text-base font-medium leading-7 text-white">
                When people grow, organisations grow.
              </p>
            </div>
            <aside
              aria-label="Practice focus"
              className="rounded-2xl border border-white/10 bg-navy-deep p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Focus areas
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                {[
                  "Leadership development & 1:1 advisory",
                  "Culture, change & communication",
                  "Learning strategy & OD roadmaps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-5 text-white/50">
                Including {siteConfig.about.linkedinServices.slice(0, 4).join(" · ")}
                {" "}and more.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Belief quote block ───────────────────────────── */}
      <section
        aria-labelledby="belief-heading"
        className="border-y border-gold/20 bg-navy-deep"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {siteConfig.belief.heading}
          </p>
          <blockquote className="mt-6">
            {siteConfig.belief.lines.map((line) => (
              <p
                key={line.slice(0, 24)}
                className="font-display mt-3 text-2xl font-bold leading-snug text-white first:mt-0 sm:text-3xl"
              >
                &ldquo;{line}&rdquo;
              </p>
            ))}
          </blockquote>
          <p
            id="belief-heading"
            className="mx-auto mt-8 max-w-xl text-sm font-medium uppercase tracking-[0.2em] text-gold"
          >
            {siteConfig.belief.purpose}
          </p>
        </div>
      </section>

      {/* ── Video section ────────────────────────────────── */}
      <section aria-labelledby="video-heading" className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="In her words"
            title="Hear the perspective behind the practice"
            description="A short introduction to how UNLEASHWORKS thinks about leadership, change and culture."
          />
          <FeaturedVideo />
        </div>
      </section>

      {/* ── Story (full timeline) ────────────────────────── */}
      <Story />

      {/* ── Services (full 4-card detail) ──────────────────── */}
      <Services />

      {/* ── Insights (full cards) ──────────────────────────── */}
      <Insights />

      {/* ── Contact + FAQ ──────────────────────────────────── */}
      <Contact />
    </main>
  );
}
