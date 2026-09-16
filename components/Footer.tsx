import { siteConfig } from "@/content/site";

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-deep" aria-label="Footer">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.18em] text-white">
            UNLEASHWORKS
          </p>
          <p className="mt-1 text-sm font-medium text-gold">
            {siteConfig.brand.tagline}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            {siteConfig.brand.taglineSecondary} A leadership, learning and
            organisational development practice by {siteConfig.founder.name}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={`Email ${siteConfig.contact.email}`}
            >
              <MailIcon className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="UNLEASHWORKS on LinkedIn (opens in new tab)"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "Home", href: "#top" },
              { label: "Story", href: "#story" },
              { label: "Services", href: "#services" },
              { label: "Insights", href: "#insights" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  className="text-white/75 transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="break-all transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                linkedin.com/in/nuzhath-ayaz-215b688
              </a>
            </li>
            <li className="text-white/60">{siteConfig.founder.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-white/55 sm:flex-row sm:px-6 sm:text-left">
          <p>© {year} UNLEASHWORKS. All rights reserved.</p>
          <p className="tracking-wide">
            Leadership. Change. Culture. — Unleash your potential.
          </p>
        </div>
      </div>
    </footer>
  );
}
