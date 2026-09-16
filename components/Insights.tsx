import CTAButton from "./ui/CTAButton";
import SectionHeading from "./ui/SectionHeading";
import { siteConfig } from "@/content/site";

/**
 * Insights section — anchor target (#insights).
 * Cards link to the 3 verified LinkedIn articles from guideline.md.
 * No additional articles are invented: only live-verified Sep 2026 URLs
 * from content/site.ts are rendered. Add more entries to siteConfig.articles
 * when further profile articles are verified.
 */
export default function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-heading" className="scroll-mt-20 bg-navy-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Insights"
          title="Thinking on leadership, change & culture"
          description="Essays by Nuzhath Ayaz on LinkedIn — presentation skills, owning mistakes as a leader, and work-life balance."
        >
          <span id="insights-heading" className="sr-only">
            Insights
          </span>
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.articles.map((article) => (
            <article
              key={article.url}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-gold/40"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                LinkedIn article · {article.published}
              </p>
              <h3 className="font-display mt-2 text-lg font-bold leading-snug text-white">
                {"shortTitle" in article && article.shortTitle
                  ? article.shortTitle
                  : article.title}
              </h3>
              {"shortTitle" in article && article.shortTitle && (
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/45">
                  {article.title}
                </p>
              )}
              <p className="mt-3 flex-1 text-sm leading-6 text-white/70">
                {article.excerpt}
              </p>
              <div className="mt-6">
                <CTAButton
                  href={article.url}
                  variant="secondary"
                  size="sm"
                  external
                  aria-label={`Read “${"shortTitle" in article && article.shortTitle ? article.shortTitle : article.title}” on LinkedIn (opens in new tab)`}
                >
                  Read on LinkedIn →
                </CTAButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <CTAButton
            href={siteConfig.contact.linkedin}
            variant="ghost"
            size="md"
            external
            aria-label="More articles on Nuzhath Ayaz's LinkedIn profile (opens in new tab)"
          >
            More writing on LinkedIn →
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
