"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const PRIORITIES = [
  {
    num: "01",
    body: "Memorize the Zapier pitch during training. The 9,000+ app value prop. The Enterprise governance story, SSO, app access controls, audit logs, and how it answers the compliance objection for a regulated buyer. Earn team sign-off before going live to buyers.",
  },
  {
    num: "02",
    body: "Shadow the top 3 SDRs on the team. Copy their objection handling, their cadence, how they research an account, word for word until I have my own.",
  },
  {
    num: "03",
    body: "Once training wraps, get on the phones. Run my first owned sequence, anchored on the Enterprise governance angle. Test it against accounts shaped like Notabene. Distributed, venture-backed, standing up a first RevOps layer, engineers reserved for the core product. Track every meeting booked, every qualified opportunity, every disqual reason from day one.",
  },
  {
    num: "04",
    body: "Find the 2 or 3 reps and managers I'll learn the most from long term. Earn 15 minutes of coffee or shadow time with each. Get a clear 12-month path to an AE role.",
  },
];

export default function FirstThirty() {
  return (
    <section
      id="thirty"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="08"
          kicker="My first 30 days"
          title="My First 30 Days"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border-t border-b border-ink/10">
          {PRIORITIES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-cream p-7 sm:p-8 md:p-10 lg:p-9 xl:p-10 flex flex-col min-h-[200px] sm:min-h-[260px]"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-7">
                <span className="font-pixel font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-accent tabular leading-none">
                  {p.num}
                </span>
                <span className="h-px flex-1 bg-ink/15" />
              </div>
              <p className="text-lg md:text-xl text-ink/85 leading-[1.55]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
