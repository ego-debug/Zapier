"use client";

import { motion } from "framer-motion";

interface Props {
  number: string;
  kicker: string;
  title: string;
  /** Kept for backwards-compat; appended into the title if provided. */
  italic?: string;
}

export default function SectionHeader({ number, kicker, title, italic }: Props) {
  const fullTitle = italic ? `${title} ${italic}` : title;
  return (
    <div className="mb-12 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4 mb-6"
      >
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent tabular">
          {number}
        </span>
        <span className="h-px flex-1 max-w-[120px] bg-ink/20" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink/55">
          {kicker}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-pixel font-bold text-[2.25rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[0.02em] text-ink uppercase max-w-5xl break-words"
      >
        {fullTitle}
      </motion.h2>
    </div>
  );
}
