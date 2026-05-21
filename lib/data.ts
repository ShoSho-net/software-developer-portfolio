// =============================================================================
//  EDIT YOUR PORTFOLIO HERE
// =============================================================================
//  Micheal — this single file controls (almost) all the words and links on your
//  site. Change the text between the quotes, save the file, and the site updates.
//  You do NOT need to touch any other file to update your content.
//
//  Tips:
//   - Keep the quotes "" around text.
//   - To add a project or certification later, copy one { ... } block inside the
//     [ ] list, paste it, and edit the values. (See the examples in comments.)
// =============================================================================

/** Basic info about you, shown in the hero, page title, and footer. */
export const profile = {
  name: "Micheal Obianwu Ifeatu",
  // Short role shown under your name and in the browser tab.
  role: "Aspiring Software Developer",
  // The one-liner under your name in the hero section.
  tagline: "Theatre Art @ University of Ibadan · Aspiring Software Developer",
  // A short paragraph that introduces you in the hero.
  intro:
    "I'm a Theatre Art student at the University of Ibadan learning to build for the web. " +
    "I'm at the very beginning of my software journey — curious, consistent, and shipping as I learn.",
  // Used for SEO (search engines / link previews). Keep it under ~160 characters.
  metaDescription:
    "Micheal Obianwu Ifeatu — Theatre Art student at the University of Ibadan and aspiring software developer. Portfolio, tech stack, and projects.",
  // Your initials — used as the small logo in the header.
  initials: "MO",
  // Your photo. Lives in the `public/` folder; change the filename here if you
  // replace it. Used as the hero avatar and the About-section photo.
  avatar: "/portrait.png",
  // Optional: location text shown in the contact section.
  location: "Ibadan, Nigeria",
};

/** Your links. Leave a value as an empty string "" to hide that link. */
export const social = {
  email: "michealuche594@gmail.com",
  linkedin: "https://www.linkedin.com/in/micheal-obianwu-a1b3b740b/",
  // Add your GitHub username URL here once you create one, e.g.
  // "https://github.com/your-username". Leave "" for now.
  github: "",
};

/** The "About me" section. Each string is its own paragraph. */
export const about = {
  heading: "From the stage to the screen",
  paragraphs: [
    "I study Theatre Art at the University of Ibadan, where I've learned how to tell a " +
      "story, hold an audience, and bring an idea to life on stage. Those same instincts — " +
      "empathy for the audience, attention to detail, and the discipline of rehearsing until " +
      "it's right — are what drew me to software.",
    "Now I'm channelling that creativity into building things people can actually use. " +
      "I'm teaching myself web development from the ground up: how the web works, how to write " +
      "clean code, and how to turn a blank screen into a working product.",
    "I'm just getting started, and I'm documenting the journey here. This site itself is one " +
      "of my first steps — and it will grow as I do.",
  ],
};

/**
 * Your tech stack — the tools and languages you're learning or working with.
 * Add or remove items freely. `level` is optional ("Learning" | "Familiar" |
 * "Comfortable") and shows as a small label.
 */
export const techStack: { name: string; level?: string }[] = [
  { name: "HTML", level: "Learning" },
  { name: "CSS", level: "Learning" },
  { name: "JavaScript", level: "Learning" },
  { name: "Python", level: "Learning" },
  { name: "React", level: "Learning" },
  { name: "Next.js", level: "Learning" },
  { name: "Tailwind CSS", level: "Learning" },
  { name: "Git & GitHub", level: "Learning" },
];

/**
 * Your projects. It's empty for now and the site shows a friendly "coming soon"
 * message. When you finish a project, add a block like the commented example.
 */
export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string; // live demo URL (optional)
  repo?: string; // source code URL (optional)
};

export const projects: Project[] = [
  // -------------------------------------------------------------------------
  // NOTE: These are SAMPLE projects so you can see how the section looks when
  // it's full. Replace them with your real projects (or delete the ones you
  // haven't built yet). To add a project, copy one { ... } block and edit it.
  // -------------------------------------------------------------------------
  {
    title: "Personal Portfolio",
    description:
      "This very website — my first real project. Built to learn how modern web apps are structured, styled, and deployed.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repo: "",
    link: "",
  },
  {
    title: "Stage Cue — Rehearsal Timer",
    description:
      "A simple timer web app for theatre rehearsals: set scene lengths, get cues, and keep a session on schedule. My take on bringing the stage and the screen together.",
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "",
    link: "",
  },
  {
    title: "Quote of the Day",
    description:
      "A small app that fetches a fresh inspirational quote from a public API on each visit. My first time working with fetch() and JSON.",
    tags: ["JavaScript", "REST API", "CSS"],
    repo: "",
    link: "",
  },
  {
    title: "To-Do List App",
    description:
      "A classic to-do app with add, complete, and delete — saved in the browser so your list persists. Great practice for state and the DOM.",
    tags: ["React", "Local Storage"],
    repo: "",
    link: "",
  },
];

/**
 * Your certifications. Empty for now — the site shows a "working toward my first
 * certifications" message. Add a block like the commented example when you earn one.
 */
export type Certification = {
  title: string;
  issuer: string;
  date: string; // e.g. "2026"
  link?: string; // credential URL (optional)
};

export const certifications: Certification[] = [
  // -------------------------------------------------------------------------
  // NOTE: These are SAMPLE certifications to show how the section looks.
  // Replace them with the ones you actually earn (and add a `link` to each
  // credential). Delete any you don't have yet.
  // -------------------------------------------------------------------------
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2026",
    link: "",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2026",
    link: "",
  },
  {
    title: "Version Control with Git",
    issuer: "Coursera · Atlassian",
    date: "2025",
    link: "",
  },
];
