"use client";

import { motion } from "motion/react";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { profile, social } from "@/lib/data";
import { asset } from "@/lib/asset";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] w-full max-w-3xl flex-col justify-center px-6 py-24">
      {/* Profile photo (from public/, path set in lib/data.ts). */}
      <motion.div
        custom={0}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mb-8 h-24 w-24 overflow-hidden rounded-full border border-border bg-subtle shadow-sm sm:h-28 sm:w-28"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(profile.avatar)}
          alt={`Portrait of ${profile.name}`}
          width={224}
          height={224}
          className="h-full w-full object-cover object-[50%_22%]"
        />
      </motion.div>

      <motion.p
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        {profile.role}
      </motion.p>

      <motion.h1
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        custom={3}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        custom={4}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          View my work
          <ArrowDown className="h-4 w-4" />
        </a>
        <a
          href={`mailto:${social.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg"
        >
          <Mail className="h-4 w-4" />
          Email me
        </a>
        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg transition-colors hover:border-fg"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
      </motion.div>
    </section>
  );
}
