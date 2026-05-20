"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  /** Draw a hairline divider above the section (used between stacked sections). */
  divider?: boolean;
  children: ReactNode;
};

/**
 * Shared section wrapper: constrains width, adds vertical rhythm and an optional
 * top divider, and fades the content in as it scrolls into view.
 */
export function Section({ id, className = "", divider = true, children }: SectionProps) {
  return (
    <section id={id} className={divider ? "border-t border-border" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mx-auto w-full max-w-3xl px-6 py-20 md:py-28 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

/**
 * Section heading: a small accent "eyebrow" label above a large title, with an
 * optional supporting line — the santifer.io editorial pattern.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </header>
  );
}
