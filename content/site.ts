/**
 * UNLEASHWORKS — verified content source of truth.
 *
 * Sourced exclusively from guideline.md (source of truth) + live LinkedIn
 * verification on 2026-09-16. No hallucinated testimonials, no fake phone/stats.
 *
 * Stats reconciliation:
 * - guideline.md homepage block says: 20+ years, 100+ people reached,
 *   10+ organisations. These read as conservative placeholders.
 * - guideline.md Architecture Session text says: "delivered over 1,000
 *   programmes across 50,000+ professionals".
 * - LinkedIn post (Aug 2025) says "For 25 years I have held rooms".
 * Conservative rule applied: site-wide stats use the LOWEST verified floor
 * (20+ / 100+ / 10+). The 1,000+ / 50,000+ claim is kept ONLY as a quoted
 * string inside the Architecture Session description where it originally
 * appeared — never as a site-wide hero stat.
 */

export const siteConfig = {
  brand: {
    name: "UNLEASHWORKS",
    tagline: "Leadership. Change. Culture.",
    taglineSecondary: "Unleash your potential.",
    colors: {
      navy: "#0A1F44",
      navyLight: "#13265A",
      gold: "#C9A227",
    },
  },
  founder: {
    name: "Nuzhath Ayaz",
    role: "Leadership, Change & Culture Practice",
    location: "Greater Bengaluru Area",
    linkedinFollowers: "4K followers, 500+ connections (as seen Sep 2026)",
  },
  contact: {
    // Verified: guideline.md line 185 "Connecting - email <nuzhath.ayaz@gmail.com>"
    email: "nuzhath.ayaz@gmail.com",
    // Verified live Sep 2026: profile resolves, name "Nuzhath Ayaz", headline UNLEASHWORKS
    linkedin: "https://www.linkedin.com/in/nuzhath-ayaz-215b688",
    // No phone provided in guideline.md — intentionally omitted. Do not invent one.
    phone: null as string | null,
  },
  hero: {
    eyebrow: "Leadership. Change. Culture.",
    title: "Unleash your potential.",
    intro:
      "UNLEASHWORKS is a leadership, learning and organisational development practice built on over two decades of experience working with people, leaders and organisations.",
    sub: "Our work sits at the intersection of leadership, change and culture, with a focus on helping people grow, leaders evolve and organisations move forward with greater clarity and purpose.",
  },
  stats: [
    { value: "20+", label: "Years of Experience", source: "guideline.md homepage + services text (consistent)" },
    {
      value: "100+",
      label: "Leadership & Learning Engagements",
      source: "guideline.md homepage (conservative floor; higher 1,000+ claim kept only inside Architecture copy)",
    },
    {
      value: "10+",
      label: "Organisations Worked With",
      source: "guideline.md homepage (conservative floor)",
    },
  ],
  about: {
    heading: "Who We Are",
    body: [
      "At UNLEASHWORKS, we believe meaningful organisational growth begins with people.",
      "Leadership, culture and change are deeply connected. The way leaders think and lead influences culture, and culture shapes how people experience and respond to change.",
      "UNLEASHWORKS brings together extensive corporate experience, practical insight and a passion for developing people to create meaningful and lasting growth.",
      "When people grow, organisations grow.",
    ],
    linkedinAboutPreview:
      "I help organisations and their leaders grow; not just in capability, but in mindset…",
    linkedinAboutNote:
      "Full About text is behind LinkedIn login; preview verified live Sep 2026, not quoted beyond visible snippet.",
    linkedinServices: [
      "Negotiation",
      "Life Coaching",
      "Team Building",
      "Public Speaking",
      "Corporate Training",
      "Executive Coaching",
      "Leadership Development",
    ],
  },
  belief: {
    heading: "The UNLEASHWORKS Belief",
    lines: [
      "Potential is already there.",
      "Sometimes, it takes the right questions, perspective, environment and opportunity to bring it forward.",
    ],
    purpose: "Leadership. Change. Culture. One purpose: Unleash your potential.",
  },
  story: {
    heading: "Our Story",
    subheading: "An idea born in uncertain times.",
    body: [
      "UNLEASHWORKS began during the uncertainty of COVID, when the world of work was changing and new possibilities were emerging.",
      "What started as a freelance journey was an opportunity to explore independent work around a long-standing passion for people, leadership, learning and organisational development.",
      "As circumstances changed, the journey moved back into the corporate world. The years that followed brought new experiences, perspectives and a deeper understanding of leadership, culture and change.",
      "Today, UNLEASHWORKS is a return to that original idea — bringing together years of experience and a passion for meaningful work with people and organisations.",
    ],
  },
  services: [
    {
      id: "clarity-call",
      name: "The Clarity Call",
      subtitle: "15-Minute Complimentary Call",
      whatIDo:
        "You tell me where you are — the role, the challenge, and what you are trying to achieve. I listen, ask the right questions, and help you identify the most direct path forward.",
      whatYouGet:
        "A clear sense of whether working together is the right fit, and what that could look like. No pitch. Just honest direction.",
      duration: "15 minutes",
      price: "Complimentary",
      cta: "Book a Clarity Call",
    },
    {
      id: "catalyst",
      name: "The Catalyst Session",
      subtitle: "A Focused 1:1 Advisory Session",
      whatIDo:
        "A structured 1:1 session focused on one specific challenge — a leadership dilemma, a communication gap, a team dynamic, or an L&D design question. I bring a sharp diagnostic lens, proven frameworks, and 20+ years of senior-level experience to give you concrete direction, not generic advice.",
      whatYouGet:
        "Clarity on what is actually driving the problem, a practical way forward you can act on immediately, and the confidence that comes from working through it with someone who has operated at this level — not a peer, not a book.",
      duration: "60 minutes",
      price: "₹12,000",
      cta: "Book a Catalyst Session",
    },
    {
      id: "architecture",
      name: "The Architecture Session",
      subtitle: "Build What You Need",
      whatIDo:
        "An intensive advisory session for when you need to build something — a leadership development plan, an L&D strategy, a communication framework, or an OD roadmap. We work through the full picture together: current state, desired outcome, gaps, and a bespoke action blueprint built around your specific context.",
      whatYouGet:
        "A bespoke, actionable plan you can take straight back into your organisation. Designed by someone who has delivered over 1,000 programmes across 50,000+ professionals. Not a template. Built for you.",
      whatYouGetNote:
        "The '1,000 programmes / 50,000+ professionals' figure is quoted verbatim from guideline.md services copy; not used as a site-wide stat.",
      duration: "90 minutes",
      price: "₹20,000",
      cta: "Book an Architecture Session",
    },
    {
      id: "momentum",
      name: "The Momentum Package",
      subtitle: "Catalyst Session + Architecture Session",
      includes: ["The Catalyst Session — 60 minutes", "The Architecture Session — 90 minutes"],
      whatIDo:
        "This is for those ready to move, not just explore. We address your immediate challenge in the first session and build your longer-term plan in the second. Together, the two sessions take you from understanding the challenge to creating a practical, context-specific way forward.",
      whatYouGet:
        "The outcome is not just clarity — it is visible, sustained progress inside your organisation.",
      duration: "2 hours",
      price: "₹30,000",
      individualValue: "₹32,000",
      savings: "₹2,000",
      cta: "Choose the Momentum Package",
    },
  ],
  articles: [
    {
      title: "Hone your presentation skills",
      url: "https://www.linkedin.com/pulse/hone-your-presentation-skills-nuzhath-ayaz",
      published: "Nov 29, 2021",
      excerpt:
        "My story from my younger days and how I evolved as a presenter — people, idea, passion and preparation.",
      verified: "Live Sep 2026, author Nuzhath Ayaz",
    },
    {
      title: "Must a leader 'apologize'?",
      url: "https://www.linkedin.com/pulse/must-leader-apologize-nuzhath-ayaz",
      published: "Aug 30, 2021",
      excerpt:
        "Why saying sorry is hard for leaders — pride, perceived weakness, self-consciousness — and why owning mistakes builds trust.",
      verified: "Live Sep 2026, author Nuzhath Ayaz",
    },
    {
      title:
        "Balancing professional and personal life can be challenging, but it's essential. Here's how to improve your work-life balance:",
      shortTitle: "Work-life balance: nine ways to create it",
      url: "https://www.linkedin.com/pulse/balancing-professional-personal-life-can-challenging-its-nuzhath-ayaz",
      published: "May 19, 2021",
      excerpt:
        "Nine practical ways to balance work and life — from realistic schedules and boundaries to health, me-time and priorities.",
      verified: "Live Sep 2026, author Nuzhath Ayaz",
    },
  ],
  connect: {
    heading: "Connect With Us",
    subheading: "Let's start a conversation.",
    body: "Whether you're exploring a new idea, navigating change or simply looking for a different perspective, we'd love to hear from you.",
    cta: "Get in Touch",
  },
  featuredVideo: {
    // LinkedIn post: "Unconscious Bias in Leadership" (Sep 2026)
    // Short link shared by founder: https://lnkd.in/p/g6q-pBEj
    url: "https://www.linkedin.com/posts/nuzhath-ayaz-215b688_leadership-thoughtleadership-executivepresence-activity-7499457997107150848-eEta",
    shortUrl: "https://lnkd.in/p/g6q-pBEj",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7499457997107150848",
    title: "Unconscious Bias in Leadership — Nuzhath Ayaz on LinkedIn",
  },
  verification: {
    email: "Confirmed in guideline.md line 185: nuzhath.ayaz@gmail.com",
    linkedin: "Profile live Sep 2026: Nuzhath Ayaz, UNLEASHWORKS, Greater Bengaluru Area",
    articlesCount: 3,
    articlesNote: "All 3 guideline.md article URLs fetched live; titles, dates and authorship match.",
    testimonials: "None added — none present in verified sources.",
    phone: "None added — no phone in verified sources.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
