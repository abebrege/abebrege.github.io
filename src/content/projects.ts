import type { Project } from "../lib/types";

export const projects: Project[] = [
  {
    slug: "MASC (fork)",
    name: "MASC (fork)",
    summary: "Updating the MASC project for a future development effort.",
    description: "",
    language: "Java",
    languageColor: "#ED8B00",
    topics: ["security", "cryptography-api-use"],
    repoUrl: "https://github.com/abebrege/MASC",
    featured: true,
  },
  {
    slug: "scrape-byllm",
    name: "scrape-byLLM",
    summary: "Meaning-Typed Programming vs. manual LLM querying for web scraping.",
    description:
      "Investigating the accuracy, cost efficiency, and usability of Meaning-Typed " +
      "Programming versus manually querying an LLM when scraping the web. Includes " +
      "benchmarks across accuracy, token cost, and developer ergonomics.",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["llm", "web-scraping", "benchmarks"],
    repoUrl: "https://github.com/abebrege/scrape-byLLM",
    featured: true,
  },
  {
    slug: "open-pqc-inventory",
    name: "open-pqc-inventory",
    summary: "Network, source, package, and disk analyzers for ACDI.",
    description:
      "Python implementations of a network, source-code, package, and disk analyzer " +
      "for ACDI — building a cryptographic inventory to support post-quantum readiness.",
    language: "Python",
    languageColor: "#3572A5",
    topics: ["pqc", "cryptography", "security"],
    repoUrl: "https://github.com/abebrege/open-pqc-inventory",
    featured: true,
  },
  {
    slug: "no-embedding-site",
    name: "no-embedding-site",
    summary: "Frontend of noembedding.com.",
    description: "The frontend for noembedding.com.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["frontend", "website"],
    repoUrl: "https://github.com/abebrege/no-embedding-site",
    liveUrl: "https://noembedding.com",
    featured: true,
  },
  {
    slug: "serpent",
    name: "serpent",
    summary: "Like Strava for programmers — track your progress.",
    description:
      "A progress tracker for programmers: log and visualize your coding activity " +
      "the way athletes track workouts.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    topics: ["developer-tools", "tracking"],
    repoUrl: "https://github.com/abebrege/serpent",
  },
];
