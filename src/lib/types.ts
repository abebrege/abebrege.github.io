export interface Project {
  slug: string;
  name: string;
  summary: string; // short one-liner, GitHub-style repo description
  description: string; // longer prose / markdown for the expanded detail
  language: string; // "Python", "TypeScript", ...
  languageColor: string; // hex for the language dot
  stars?: number;
  topics: string[]; // rendered as pills
  repoUrl: string;
  liveUrl?: string; // optional demo/site link
  featured?: boolean; // show on Home
}

export interface DevlogFrontmatter {
  title: string;
  date: string; // ISO: "2026-02-03"
  summary?: string;
  tags?: string[];
  cover?: string; // optional hero image URL/path
  links?: { label: string; url: string }[];
}

export interface Devlog extends DevlogFrontmatter {
  slug: string; // derived from filename
  content: string; // raw markdown body (frontmatter stripped)
}
