import { projects } from "../content/projects";
import ProjectCard from "../components/ProjectCard";
import "./page.css";

export default function Projects() {
  return (
    <section className="page">
      <header className="page-head">
        <h1>Projects</h1>
        <p className="muted">Things I've built and am building.</p>
      </header>

      <div className="card-stack">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
