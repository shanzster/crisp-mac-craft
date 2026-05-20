import { createFileRoute } from "@tanstack/react-router";
import { MenuBar } from "@/components/MenuBar";
import { MacWindow } from "@/components/MacWindow";
import { CaseFolder, type CaseStudy } from "@/components/CaseFolder";
import { SelectingRoles } from "@/components/SelectingRoles";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Avery Quinn — Digital Marketing Portfolio" },
      {
        name: "description",
        content:
          "Minimalist portfolio of Avery Quinn — digital marketing strategist focused on measurable growth, content systems, and brand storytelling.",
      },
    ],
  }),
});

const CASES: CaseStudy[] = [
  {
    id: "01",
    client: "Northwind",
    tag: "SEO · Content",
    headline: "Rebuilt a content engine from 0 to compounding traffic.",
    metric: "+412%",
    metricLabel: "organic sessions / 9 months",
    bullets: [
      "Topic cluster strategy across 6 product pillars",
      "Editorial system: 4 posts / week, 1 owner",
      "Avg. position 14 → 4 on commercial queries",
    ],
  },
  {
    id: "02",
    client: "Lumen",
    tag: "Paid · Lifecycle",
    headline: "Cut CAC almost in half while doubling spend.",
    metric: "−47%",
    metricLabel: "blended CAC, $2.1M spend",
    bullets: [
      "Creative testing cadence: 12 concepts / week",
      "Onboarding email rebuild → +28% activation",
      "Audience reshape across Meta + Google",
    ],
  },
  {
    id: "03",
    client: "Fieldnotes",
    tag: "Brand · Launch",
    headline: "Took a quiet B2B brand to a sold-out launch.",
    metric: "18k",
    metricLabel: "waitlist · 0 paid spend",
    bullets: [
      "Founder-led narrative, 22 long-form essays",
      "Community loop on LinkedIn + Substack",
      "Press in 4 industry publications",
    ],
  },
  {
    id: "04",
    client: "Hellomint",
    tag: "Strategy · Web",
    headline: "Site redesign that finally converts the traffic.",
    metric: "3.8×",
    metricLabel: "demo conversion rate",
    bullets: [
      "Message → page architecture rewrite",
      "Pricing page A/B program (11 tests)",
      "From 0.7% → 2.7% visitor-to-demo",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <MenuBar />

      {/* Desktop area */}
      <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-10 sm:px-10">
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <MacWindow label="~/portfolio" title="hello.txt" rightChip="Edited just now">
          <div className="p-8 sm:p-12">
            <p className="text-[12px] uppercase tracking-[0.22em] text-foreground/50">
              Avery Quinn · Brooklyn, NY
            </p>
            <h1 className="mt-6 text-[clamp(40px,7vw,96px)] leading-[0.92] tracking-tightest font-bold text-foreground">
              I help brands<br />
              grow on purpose,<br />
              not by accident.<br />
              <span className="text-foreground/40">Currently a&nbsp;</span>
              <SelectingRoles />
              <span className="blink text-foreground/40">|</span>
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed tracking-tight text-foreground/70">
              Ten years building marketing systems for software companies,
              consumer brands, and lonely B2B categories nobody wanted to write
              about. The work below is mostly numbers, because numbers are the
              part you can&apos;t fake.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-foreground px-5 py-2.5 text-[13px] tracking-tight text-background transition hover:opacity-90"
              >
                See the work →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-[13px] tracking-tight text-foreground transition hover:bg-secondary"
              >
                Hire me
              </a>
              <span className="ml-2 text-[12px] tracking-tight text-foreground/50">
                Available · Q3 2026
              </span>
            </div>
          </div>
        </MacWindow>
      </div>

      {/* Side: now / stats */}
      <div className="lg:col-span-4 grid gap-6">
        <MacWindow title="now.md">
          <div className="p-6 text-[13px] leading-relaxed tracking-tight">
            <p className="text-foreground/50">// status</p>
            <p className="mt-2">
              Heads-down on a <span className="selected-text">lifecycle program</span>{" "}
              for a Series&nbsp;B fintech. Two slots open in August.
            </p>
            <p className="mt-3 text-foreground/50">// reading</p>
            <p className="mt-1">Obviously Awesome — April Dunford</p>
          </div>
        </MacWindow>
        <MacWindow title="numbers.csv" rightChip="live">
          <div className="grid grid-cols-2 divide-x divide-border border-t border-border">
            <Stat value="$48M" label="revenue influenced" />
            <Stat value="62" label="brands shipped" />
            <Stat value="11" label="years in market" />
            <Stat value="4.9" label="client NPS / 5" />
          </div>
        </MacWindow>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-5">
      <div className="text-[34px] leading-none tracking-tightest font-bold">{value}</div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-foreground/50">
        {label}
      </div>
    </div>
  );
}

/* ───────── TICKER ───────── */
function Ticker() {
  const items = [
    "Northwind +412% organic",
    "Lumen −47% CAC",
    "Fieldnotes 18k waitlist",
    "Hellomint 3.8× demo conv.",
    "Acorn +210% MRR from email",
    "Paperline 1.4M monthly readers",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/40 py-3">
      <div className="ticker flex gap-12 whitespace-nowrap text-[13px] tracking-tight text-foreground/70">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>● {t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── ABOUT ───────── */
function About() {
  return (
    <section id="about" className="mt-20">
      <SectionHeader index="01" title="About" />
      <div className="mt-6">
        <MacWindow title="about.rtf">
          <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-[clamp(22px,2.4vw,32px)] leading-[1.15] tracking-compressed text-foreground">
                I&apos;m a digital marketer who treats growth like an
                <span className="selected-text"> editorial product</span> — a
                small number of clear ideas, repeated until the market
                notices. I run <span className="selected-text">SEO</span>,{" "}
                <span className="selected-text">paid</span>, and{" "}
                <span className="selected-text">lifecycle</span> as one system
                instead of three departments.
              </p>
              <p className="mt-6 text-[14px] leading-relaxed tracking-tight text-foreground/70">
                Past stops: Stripe (contract), Notion (consult), 4 venture-backed
                startups as head of marketing, and a quiet stretch ghost-writing
                for founders you&apos;ve heard of.
              </p>
            </div>
            <ul className="md:col-span-5 space-y-3 text-[13px] tracking-tight">
              {[
                ["2014", "Started writing for B2B SaaS"],
                ["2017", "Head of Content, Plotline"],
                ["2020", "Independent — first $1M year"],
                ["2023", "Built the agency to a team of 6"],
                ["2026", "Solo again. Better rates, better work."],
              ].map(([y, t]) => (
                <li key={y} className="flex gap-4 border-b border-border pb-3">
                  <span className="w-12 text-foreground/40">{y}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </MacWindow>
      </div>
      <div className="mt-8">
        <Ticker />
      </div>
    </section>
  );
}

/* ───────── WORK ───────── */
function Work() {
  return (
    <section id="work" className="mt-20">
      <SectionHeader index="02" title="Selected work" subtitle="Hover a folder." />
      <div className="mt-6">
        <MacWindow label="Finder —" title="Macintosh HD › Work" rightChip="4 items">
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 p-10 sm:p-14 lg:grid-cols-4">
            {CASES.map((c) => (
              <CaseFolder key={c.id} data={c} />
            ))}
          </div>
        </MacWindow>
      </div>
    </section>
  );
}

/* ───────── SERVICES ───────── */
function Services() {
  const items = [
    {
      k: "01",
      t: "Growth diagnostic",
      d: "Two-week teardown of your funnel, channels, and content. You leave with a 90-day plan and the ugly truth.",
      p: "from $6k",
    },
    {
      k: "02",
      t: "Fractional marketing lead",
      d: "I run the marketing function 2 days/week. Strategy, hiring, executing the things the team can&apos;t yet.",
      p: "from $14k/mo",
    },
    {
      k: "03",
      t: "Content & SEO system",
      d: "Editorial calendar, briefs, distribution, measurement. Built to compound for 12+ months without me.",
      p: "from $9k/mo",
    },
    {
      k: "04",
      t: "Launch (product or company)",
      d: "Positioning, narrative, site, press, paid. End-to-end ownership of one big moment.",
      p: "from $22k",
    },
  ];
  return (
    <section id="services" className="mt-20">
      <SectionHeader index="03" title="Services" />
      <div className="mt-6">
        <MacWindow title="services.app">
          <ul className="divide-y divide-border">
            {items.map((it) => (
              <li
                key={it.k}
                className="group grid grid-cols-12 gap-4 px-8 py-7 transition hover:bg-secondary/60 sm:px-12"
              >
                <span className="col-span-1 text-[12px] text-foreground/40">{it.k}</span>
                <div className="col-span-7">
                  <h3 className="text-[22px] leading-tight tracking-compressed font-medium">
                    {it.t}
                  </h3>
                  <p
                    className="mt-2 max-w-prose text-[13px] tracking-tight text-foreground/60"
                    dangerouslySetInnerHTML={{ __html: it.d }}
                  />
                </div>
                <div className="col-span-3 text-[13px] tracking-tight text-foreground/70">
                  {it.p}
                </div>
                <div className="col-span-1 text-right text-foreground/30 transition group-hover:translate-x-1 group-hover:text-foreground">
                  →
                </div>
              </li>
            ))}
          </ul>
        </MacWindow>
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
function Contact() {
  return (
    <section id="contact" className="mt-20">
      <SectionHeader index="04" title="Contact" />
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <MacWindow label="Mail —" title="New message">
            <div className="p-8 sm:p-12">
              <h2 className="text-[clamp(36px,5.5vw,72px)] leading-[0.95] tracking-tightest font-bold">
                Tell me what&apos;s<br />
                <span className="selected-text">not working</span> yet.
              </h2>
              <div className="mt-10 space-y-4 text-[13px] tracking-tight">
                <Field label="To" value="avery@averyquinn.studio" />
                <Field label="From" value="you@yourcompany.com" />
                <Field label="Subject" value="A project I'd like your eyes on" />
              </div>
              <a
                href="mailto:avery@averyquinn.studio"
                className="mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-[13px] tracking-tight text-background transition hover:opacity-90"
              >
                Send →
              </a>
            </div>
          </MacWindow>
        </div>
        <div className="lg:col-span-4 grid gap-6">
          <MacWindow title="schedule.ics">
            <div className="p-6 text-[13px] tracking-tight">
              <p className="text-foreground/50">// office hours</p>
              <p className="mt-2">Tuesdays, 30 min, free.</p>
              <a className="mt-3 inline-block underline underline-offset-4" href="#">
                Book a slot →
              </a>
            </div>
          </MacWindow>
          <MacWindow title="elsewhere.url">
            <ul className="p-6 text-[13px] tracking-tight space-y-2">
              <li className="flex justify-between"><span>LinkedIn</span><span className="text-foreground/40">↗</span></li>
              <li className="flex justify-between"><span>Substack</span><span className="text-foreground/40">↗</span></li>
              <li className="flex justify-between"><span>Read.cv</span><span className="text-foreground/40">↗</span></li>
              <li className="flex justify-between"><span>X / Twitter</span><span className="text-foreground/40">↗</span></li>
            </ul>
          </MacWindow>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-border pb-3">
      <span className="w-16 text-foreground/40">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-baseline gap-4">
        <span className="text-[12px] tracking-[0.2em] uppercase text-foreground/40">{index}</span>
        <h2 className="text-[clamp(28px,3.4vw,44px)] tracking-tightest font-semibold">
          {title}
        </h2>
      </div>
      {subtitle && (
        <span className="text-[12px] tracking-tight text-foreground/50">{subtitle}</span>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-border pt-6 text-[12px] tracking-tight text-foreground/50">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>© 2026 Avery Quinn · Brooklyn, NY</span>
        <span>Built like a Mac. Designed to convert.</span>
      </div>
    </footer>
  );
}
