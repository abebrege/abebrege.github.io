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

