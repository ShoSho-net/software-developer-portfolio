import { Section, SectionHeader } from "@/components/section";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <Section id="tech">
      <SectionHeader
        eyebrow="04 — Toolbox"
        title="Tech stack"
        description="The tools and languages I'm learning and building with right now."
      />
      <ul className="flex flex-wrap gap-2.5">
        {techStack.map((tech) => (
          <li
            key={tech.name}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-fg/30"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {tech.name}
            {tech.level && (
              <span className="text-xs font-normal text-muted">· {tech.level}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
