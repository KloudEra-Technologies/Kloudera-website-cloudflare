import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { GlassCard } from "@/components/site/GlassCard";
import { ContactForm } from "@/components/site/ContactForm";
import { Logo } from "@/components/site/Logo";
import { partners } from "@/lib/partners";
import {
  aboutHighlights,
  achievements,
  benefits,
  capabilities,
  certifications,
  clienteles,
  company,
  heroPillars,
  jobs,
  zeroTrustPrinciples,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KloudEra Technologies — Zero-Trust Cybersecurity & Cloud" },
      {
        name: "description",
        content:
          "Enterprise cybersecurity consulting: 24/7 SOC, VAPT, multi-cloud governance, AI CoE and next-gen GPU hardware for Fortune 500 infrastructure.",
      },
      { property: "og:site_name", content: "KloudEra Technologies" },
      { property: "og:title", content: "KloudEra Technologies — Zero-Trust Enterprises" },
      {
        property: "og:description",
        content:
          "24/7 Security Operations, AI compute rigs, and Microsoft Cloud governance for high-stakes enterprises.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kloudera.ai/" },
      { property: "og:image", content: "https://www.kloudera.ai/og-image.png" },
      { property: "og:image:secure_url", content: "https://www.kloudera.ai/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "KloudEra Technologies Logo & Brand" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KloudEra Technologies — Zero-Trust Enterprises" },
      {
        name: "twitter:description",
        content:
          "24/7 Security Operations, AI compute rigs, and Microsoft Cloud governance for high-stakes enterprises.",
      },
      { name: "twitter:image", content: "https://www.kloudera.ai/og-image.png" },
    ],
  }),
  component: Home,
});

function Home() {
  const [active, setActive] = useState(capabilities[0]!.id);
  const current = capabilities.find((c) => c.id === active)!;
  const marquee = [...partners.slice(0, 28), ...partners.slice(0, 28)];

  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto w-full max-w-7xl px-5 pt-36 pb-10 sm:px-8 sm:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.28em] uppercase"
        >
          <ShieldCheck className="size-3.5 text-primary" />
          Enterprise Cybersecurity Consulting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-aurora mt-7 max-w-5xl text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-7xl"
        >
          {company.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {company.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/services"
            className="sheen-on-hover group relative inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            Explore Infrastructure Services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/products"
            className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium"
          >
            <Sparkles className="size-4 text-accent" />
            Preview Products Pipeline
          </Link>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {heroPillars.map((p, i) => (
            <Reveal key={p.kicker} delay={0.08 * i}>
              <GlassCard className="h-full rounded-3xl">
                <p className="font-mono text-[10px] tracking-[0.26em] text-primary/90 uppercase">
                  {p.kicker}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <Section
        id="capabilities"
        kicker="Core Capabilities"
        title="Enterprise Solution Architecture"
        description="Explore our core operational wings. Select a domain below to review hardware specs and security frameworks."
      >
        <Reveal className="glass flex flex-wrap gap-1.5 rounded-full p-1.5">
          {capabilities.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative z-[2] flex-1 rounded-full px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-colors sm:text-sm ${
                active === c.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.tab}
            </button>
          ))}
        </Reveal>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass mt-6 rounded-[2rem] p-8 sm:p-10"
        >
          <div className="relative z-[2] grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">{current.title}</h3>
              <p className="mt-3 font-mono text-[11px] tracking-[0.24em] text-primary/90 uppercase">
                {current.meta}
              </p>
              <p className="mt-6 text-muted-foreground">{current.body}</p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Full Suite <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {current.features.map((f) => (
                <div key={f.title} className="glass-strong rounded-2xl p-5">
                  <h4 className="text-base font-medium">{f.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* PARTNERS MARQUEE */}
      <Section
        kicker="Strategic Ecosystem"
        title="Technology Partner Directory"
        action={
          <Link
            to="/partners"
            className="glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Explore All Partners →
          </Link>
        }
      >
        <div className="glass overflow-hidden rounded-[2rem] py-8">
          <div className="animate-marquee relative z-[2] flex w-max gap-4">
            {marquee.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="glass-strong grid h-24 w-44 shrink-0 place-items-center rounded-2xl p-4"
              >
                <Logo src={p.logo} name={p.name} className="max-h-10 max-w-[110px]" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section kicker="Why Enterprises Choose Us" title="How Your Organization Benefits">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <GlassCard className="h-full">
                <span className="font-mono text-xs text-accent">// 0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ABOUT + ZERO TRUST */}
      <Section kicker="About Kloudera" title="Built for High-Stakes Enterprise Resilience">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full p-8">
              <p className="text-muted-foreground">
                Kloudera Technologies provides Fortune 500 organizations with end-to-end
                security posture optimization, compute hardware procurement, and cloud
                modernization strategies.
              </p>
              <ul className="mt-7 space-y-3">
                {aboutHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Read Company Mission <ArrowRight className="size-4" />
              </Link>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="h-full p-8">
              <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
                SYSTEM_FRAMEWORK
              </p>
              <h3 className="mt-3 text-xl font-semibold">Zero-Trust Command Principles</h3>
              <div className="mt-6 space-y-4">
                {zeroTrustPrinciples.map((p) => (
                  <div key={p.n} className="glass-strong rounded-2xl p-5">
                    <p className="text-sm font-medium">
                      <span className="mr-2 text-primary">{p.n}.</span>
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section
        kicker="Our Achievements"
        title="Government Recognition & Accreditation"
        description="Official accreditation and government recognition under key national initiatives."
        action={
          <Link
            to="/achievements"
            className="glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Explore More →
          </Link>
        }
      >
        <div className="glass overflow-hidden rounded-[2rem] py-8">
          <div className="animate-marquee relative z-[2] flex w-max gap-4">
            {[...achievements, ...achievements, ...achievements, ...achievements].map((a, i) => (
              <div
                key={`${a.title}-${i}`}
                className="glass-strong flex h-32 w-72 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl p-5"
              >
                <div className="grid h-14 place-items-center">
                  {a.logo ? (
                    <Logo src={a.logo} name={a.title} className="max-h-12 max-w-[130px]" />
                  ) : (
                    <span className="text-3xl">{a.emoji || "✦"}</span>
                  )}
                </div>
                <p className="text-center text-xs font-semibold leading-tight">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CLIENTELES */}
      <Section
        kicker="Our Clienteles"
        title="Trusted Across Regulated Industries"
        description="Engineered for industry-leading financial, IT, construction, and educational enterprises."
        action={
          <Link
            to="/clienteles"
            className="glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Explore More →
          </Link>
        }
      >
        <div className="glass overflow-hidden rounded-[2rem] py-8">
          <div className="animate-marquee relative z-[2] flex w-max gap-4">
            {[...clienteles, ...clienteles, ...clienteles, ...clienteles].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="glass-strong flex h-28 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl p-5"
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="max-h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="text-base font-bold tracking-wide">{c.name}</span>
                )}
                <span className="rounded-full border border-border/60 px-2.5 py-0.5 text-center font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase">
                  {c.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* COMPLIANCE */}
      <Section
        kicker="Compliance Standards"
        title="KloudEra Technologies CoE — Center of Excellence"
        action={
          <Link
            to="/certifications"
            className="glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Explore More →
          </Link>
        }
      >
        <div className="glass overflow-hidden rounded-[2rem] py-8">
          <div className="animate-marquee relative z-[2] flex w-max gap-4" style={{ animationDuration: "100s" }}>
            {[...certifications, ...certifications].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="glass-strong flex h-32 w-64 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl p-4"
              >
                <div className="grid h-10 place-items-center">
                  <img src={c.image} alt={c.name} className="max-h-10 w-auto object-contain" />
                </div>
                <p className="text-center text-[11px] font-medium leading-tight line-clamp-2">{c.name}</p>
                <span className="rounded-full border border-border/60 px-2 py-0.5 font-mono text-[8px] tracking-[0.14em] text-primary/80 uppercase">
                  CERTIFIED
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CAREERS */}
      <Section
        kicker="Career Portal"
        title="Join the Kloudera Engineering Core"
        action={
          <Link
            to="/careers"
            className="glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium"
          >
            View All Open Positions →
          </Link>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {jobs.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.07}>
              <GlassCard className="h-full">
                <p className="font-mono text-[10px] tracking-[0.26em] text-primary/90 uppercase">
                  {j.dept}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{j.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{j.body}</p>
                <Link
                  to="/careers"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Apply Position <ArrowRight className="size-4" />
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section kicker="Get in Touch" title="Schedule a Systems Consultation">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <GlassCard className="h-full p-8">
              <p className="text-muted-foreground">
                Connect directly with our solutions engineering team to evaluate your
                infrastructure security posture or configure enterprise hardware rigs.
              </p>
              <Link
                to="/contact"
                className="sheen-on-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
              >
                📅 Open Calendar Scheduler <ArrowRight className="size-4" />
              </Link>
              <p className="mt-6 text-sm text-muted-foreground">
                Prefer direct email? Contact us at{" "}
                <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                  {company.email}
                </a>
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8">
              <div className="relative z-[2]">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}