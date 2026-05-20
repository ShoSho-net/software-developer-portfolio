import { Section, SectionHeader } from "@/components/section";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about" divider={false}>
      <SectionHeader eyebrow="01 — About" title={about.heading} />
      <div className="space-y-5">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
