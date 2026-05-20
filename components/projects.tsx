import { ArrowUpRight, Github, Hammer } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { projects, social } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="02 — Work"
        title="Projects"
        description="Things I'm building as I learn. Each one teaches me something new."
      />

      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-fg/30 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-fg">
                  {project.title}
                </h3>
                <div className="flex shrink-0 items-center gap-2 text-muted">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="transition-colors hover:text-fg"
                    >
                      <Github className="h-[18px] w-[18px]" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      className="transition-colors hover:text-accent"
                    >
                      <ArrowUpRight className="h-[18px] w-[18px]" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-subtle px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-card px-8 py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-subtle text-accent">
        <Hammer className="h-6 w-6" />
      </div>
      <p className="text-base font-medium text-fg">Currently building my first projects</p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        I&apos;m learning by building. My work will appear here soon — check back as I ship.
      </p>
      {social.github && (
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-fg"
        >
          <Github className="h-4 w-4" />
          Follow along on GitHub
        </a>
      )}
    </div>
  );
}
