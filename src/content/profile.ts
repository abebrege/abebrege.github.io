export interface ExternalLink {
  label: string;
  url: string;
}

export interface NavItem {
  label: string;
  to: string;
  end?: boolean;
}

export const profile = {
  name: "Abe Brege",
  handle: "abebrege",
  avatar: "/profile.jpg",
  bio: "Building tools for LLMs, cryptographic inventory, and security.",
  company: "Northcross Group",
  location: "Marquette, MI",
};

export const nav: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "Projects", to: "/projects" },
];

export const externalLinks: ExternalLink[] = [
  { label: "noembedding.com", url: "https://noembedding.com" },
  { label: "GitHub", url: "https://github.com/abebrege" },
  { label: "Email", url: "mailto:abrege11@gmail.com" },
];
