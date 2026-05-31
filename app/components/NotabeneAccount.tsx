"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function NotabeneAccount() {
  return (
    <section
      id="account"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          kicker="The Account"
          title="The Notabene Account"
        />

        {/* Lead paragraph + sidebar facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-6"
          >
            <motion.p
              variants={reveal}
              className="text-xl md:text-[1.4rem] leading-[1.55] text-ink/85"
            >
              Notabene is a fully distributed RegTech building the
              compliance and payments network for crypto. Travel Rule
              plus stablecoin payments, used by 280+ customers like Luno,
              Bitso, and Crypto.com, across a network that crossed $2
              trillion in volume in January 2026. They are Series B-backed by DRW VC. In the last
              year they hired into operations for the first time. A RevOps
              lead, a business-operations lead, a chief of staff reporting
              to the COO. A new payments product and a tightening
              compliance picture keep adding workflows, and engineering is
              busy with the network itself.
            </motion.p>
          </motion.div>

          {/* Side facts */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-ink/15 lg:pl-8 space-y-8"
          >
            <FactRow label="Stage" value="Series B. $14.5M, DRW VC (Nov 2024)" />
            <FactRow label="HQ" value="New York. Fully distributed, 13+ countries" />
            <FactRow label="CEO" value="Pelle Braendgaard (Co-Founder)" />
            <FactRow label="Network" value="2,000+ institutions, 100+ jurisdictions" />
            <FactRow label="Customers" value="280+ customers (Luno, Bitso)" />
            <FactRow label="Volume" value="$2T+ total, $1T+ annually" />
          </motion.aside>
        </div>

        {/* The Notabene ops-scaling moment - full visual callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-36 relative"
        >
          <div className="bg-forest text-ink rounded-sm overflow-hidden relative">
            {/* Decorative date stamp - inline on mobile, absolute on md+ */}
            <div className="md:absolute md:top-10 md:right-10 md:text-right pt-6 md:pt-0 px-6 md:px-0 flex items-baseline md:items-end gap-3 md:gap-0 md:flex-col">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] sm:tracking-[0.25em] text-ink/50 md:mb-1 whitespace-nowrap">
                Notabene Flow
              </div>
              <div className="font-pixel font-bold text-2xl sm:text-3xl md:text-4xl text-ink tabular tracking-[0.04em]">
                09 / 2025
              </div>
            </div>

            <div className="px-6 sm:px-8 md:px-16 py-10 sm:py-14 md:py-24 max-w-4xl">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-accent-warm mb-6 sm:mb-8">
                The story right now
              </div>
              <p className="text-xl md:text-2xl text-ink/90 leading-[1.5] max-w-3xl">
                Here is what stood out to me. The new ops team inherits
                the manual work of connecting a sprawling SaaS stack
                across a distributed company. And that work keeps growing.
                Flow, their stablecoin payments line live since September
                2025, and a tightening Travel Rule picture mean more
                onboarding and more compliance data to move between more
                tools. None of it is engineering work. It is the manual
                connecting that piles up when a company grows this fast.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent">
              The setup
            </div>
          </div>
          <div className="lg:col-span-10">
            <p className="text-xl md:text-2xl leading-[1.55] text-ink/90 max-w-4xl">
              Notabene's whole product is compliance and auditability.
              They sell regulated crypto firms a system a regulator can
              trust. That same standard applies inward. They cannot run
              ungoverned automations their own compliance team cannot
              see. As they grow, they add headcount and tools, and the
              handoffs between those tools add up. The way I see it, the
              ops team they just built should not spend its first year
              wiring those tools together by hand. Zapier connects the
              stack without an engineer, and the Enterprise tier keeps
              every automation behind SSO, admin approval, and an audit
              log. For a company that sells auditability, that governance
              is the part that makes internal automation safe to turn on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50">
        {label}
      </div>
      <div className="text-base text-ink">{value}</div>
    </div>
  );
}
