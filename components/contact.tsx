import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, social } from "@/lib/data";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 md:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          05 — Contact
        </p>
        <h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
          Open to learning, collaborating, and opportunities.
        </h2>
        <p className="mt-4 text-base text-muted">Let&apos;s build something together.</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`mailto:${social.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            <Mail className="h-4 w-4" />
            {social.email}
          </a>
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}
          </p>
          {profile.location && (
            <p className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
