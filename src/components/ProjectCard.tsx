import { useState } from "react";
import type { Project } from "../lib/types";
import Markdown from "./Markdown";
import "./ProjectCard.css";

export default function ProjectCard({ project }: { project: Project }) {
  const alwaysOpen = Boolean(project.featured);
  const [open, setOpen] = useState(false);
  const showDetails = alwaysOpen || open;

  return (
    <article className="project-card">
      <header className="project-header">
        <a
          className="project-name"
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
        </a>
      </header>

      <p className="project-summary">{project.summary}</p>

      {!alwaysOpen && (
        <button
          className="details-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? "Hide details ▴" : "Details ▾"}
        </button>
      )}

      {showDetails && (
        <div className="project-description">
          <Markdown>{project.description}</Markdown>
        </div>
      )}

      <footer className="project-meta">
        <span className="lang">
          <span
            className="lang-dot"
            style={{ backgroundColor: project.languageColor }}
            aria-hidden="true"
          />
          {project.language}
        </span>
        {project.liveUrl && (
          <a
            className="live-link"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live ↗
          </a>
        )}
      </footer>
    </article>
  );
}
