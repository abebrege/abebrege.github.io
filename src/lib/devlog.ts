import yaml from "js-yaml";
import type { Devlog, DevlogFrontmatter } from "./types";

const files = import.meta.glob("../content/devlog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): {
  data: DevlogFrontmatter;
  content: string;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {} as DevlogFrontmatter, content: raw };
  const data = (yaml.load(match[1]) as DevlogFrontmatter) ?? ({} as DevlogFrontmatter);
  return { data, content: match[2] };
}

export const devlogs: Devlog[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { data, content } = parseFrontmatter(raw);
    return { slug, ...data, content };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getDevlog = (slug: string) => devlogs.find((d) => d.slug === slug);
