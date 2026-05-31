"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedNumber, { ScaleIn } from "./AnimatedNumber";

const BUYER_BLOCKS: { label: string; body: React.ReactNode }[] = [
  {
    label: "The Buyer",
    body: (
      <>
        Zapier sells to the operations leader who owns how a company's
        tools talk to each other. At Notabene that is the
        revenue-operations and business-operations function building out
        under Alice Nawfal, Co-Founder and COO. Alice owns operations and
        signs off on the tooling that function runs on.
      </>
    ),
  },
  {
    label: "The Pitch",
    body: (
      <>
        Notabene does not have to pull an engineer off the transaction
        network to wire their stack together. Zapier connects 9,000+
        apps. CRM, support, billing, onboarding, Slack. The ops function
        automates the manual handoffs instead of doing them by hand.
        Lead routing, data sync, onboarding steps, compliance-data
        movement, reporting. Because Notabene is a regulated RegTech, the
        Enterprise tier is the part that matters. SAML SSO, app access
        controls, approval before a Zap goes live, and an audit log on
        every automation. SOC 2 Type II underneath.
      </>
    ),
  },
  {
    label: "Why Notabene",
    body: (
      <>
        Notabene built its first real ops bench this year, with Alice
        Nawfal's RevOps hire in the mix. Companies hire in that order once
        the work has already outrun the people doing it. The Flow launch,
        a network that just passed $2 trillion in volume, and a tightening
        Travel Rule picture keep adding workflows. That is where Zapier
        tends to help: the repetitive work nobody wants to keep doing by
        hand, and nobody is going to put an engineer on.
      </>
    ),
  },
  {
    label: "The next 5",
    body: (
      <>
        Notabene is not a one-off. A lot of companies look like this.
        Distributed RegTech and fintech-infrastructure firms, 100 to 500
        people, recently funded, building out their first ops or RevOps
        function, a sprawling SaaS stack, and engineers they need on the
        core product. By the end of week 2 I would have a 20-account list.
        Starting candidates: Chainalysis, TRM Labs, Sardine, Alloy,
        Persona.
      </>
    ),
  },
];

export default function ZapierFit() {
  return (
    <section
      id="fit"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10 bg-cream-200/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          kicker="Where Zapier fits"
          title="Where Zapier Fits Here"
        />

        {/* Buyer / Pitch / Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-36">
          <div className="lg:col-span-9 space-y-8">
            {BUYER_BLOCKS.map((b) => (
              <BuyerBlock key={b.label} label={b.label} body={b.body} />
            ))}
          </div>
        </div>

        {/* The big stat row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border-t border-b border-ink/10">
          <ScaleIn delay={0}>
            <StatBlock
              kicker="Notabene customers today"
              value={
                <>
                  <AnimatedNumber to={280} />
                  <span className="text-ink/45 ml-2">+</span>
                </>
              }
              label="280+ companies now run compliance on Notabene. That growth lands on a lean, fully distributed ops team."
            />
          </ScaleIn>
          <ScaleIn delay={0.1}>
            <StatBlock
              kicker="Zapier at Remote (2024)"
              value={
                <>
                  <span className="text-ink/45 mr-1">$</span>
                  <AnimatedNumber to={500} />
                  <span className="text-ink/45 ml-2">K</span>
                </>
              }
              label="Remote, also fully distributed, avoided $500K in hiring costs and automated 11M tasks with Zapier."
            />
          </ScaleIn>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-xs font-mono uppercase tracking-[0.18em] text-ink/45 text-right"
        >
          Source. Notabene 2025 year in review and Zapier customer disclosures.
        </motion.div>
      </div>
    </section>
  );
}

function BuyerBlock({
  label,
  body,
}: {
  label: string;
  body: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 pb-8 border-b border-ink/10 last:border-b-0 last:pb-0"
    >
      <div className="sm:col-span-3">
        <div className="font-pixel font-bold text-xl md:text-2xl uppercase tracking-[0.04em] text-accent leading-none">
          {label}
        </div>
      </div>
      <div className="sm:col-span-9">
        <p className="text-base md:text-lg leading-[1.7] text-ink/80">{body}</p>
      </div>
    </motion.div>
  );
}

function StatBlock({
  kicker,
  value,
  label,
}: {
  kicker: string;
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="bg-cream p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[200px] sm:min-h-[260px]">
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-6 sm:mb-8">
        {kicker}
      </div>
      <div className="font-pixel font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-[0.02em] text-ink mb-4 sm:mb-6">
        {value}
      </div>
      <div className="text-sm md:text-base text-ink/65 leading-snug max-w-xs">
        {label}
      </div>
    </div>
  );
}
