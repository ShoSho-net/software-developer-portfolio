import { Section, SectionHeader } from "@/components/section";
import { about, profile } from "@/lib/data";
import { asset } from "@/lib/asset";

export function About() {
  return (
    <Section id="about" divider={false}>
      <SectionHeader eyebrow="01 — About" title={about.heading} />
      <div className="grid gap-10 md:grid-cols-5 md:items-start">
        <div className="space-y-5 md:col-span-3">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="md:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(profile.avatar)}
            alt={`Portrait of ${profile.name}`}
            width={628}
            height={385}
            className="aspect-[3/4] w-full rounded-2xl border border-border object-cover object-[50%_28%] shadow-sm"
          />
        </div>
      </div>
    </Section>
  );
}
