import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        eyebrow="03 — Learning"
        title="Certifications"
        description="Credentials I'm earning along the way."
      />

      {certifications.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {certifications.map((cert) => (
            <li
              key={`${cert.title}-${cert.issuer}`}
              className="flex items-start gap-4 p-5 transition-colors hover:bg-subtle"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-subtle text-accent">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold tracking-tight text-fg">{cert.title}</h3>
                  <span className="shrink-0 text-sm tabular-nums text-muted">
                    {cert.date}
                  </span>
                </div>
                <p className="text-sm text-muted">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    View credential <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-card px-8 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-subtle text-accent">
        <GraduationCap className="h-6 w-6" />
      </div>
      <p className="text-base font-medium text-fg">
        Working toward my first certifications
      </p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        I&apos;m studying to earn recognized credentials in web development. They&apos;ll be
        listed here as I complete them.
      </p>
    </div>
  );
}
