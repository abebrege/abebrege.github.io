import { Link } from "react-router-dom";
import { projects } from "../content/projects";
import ProjectCard from "../components/ProjectCard";
import "./page.css";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="page">
      <header className="intro">
        <p>
          I research the effective use of LLMs to improve software development processes in my free time
          and I work full-time building tools for security and privacy at <a href="https://www.northcrossgroup.com" target="_blank" rel="noopener noreferrer">Northcross Group</a>.
          Here, I am currently specializing in building tools to assist in the post-quantum migration process by leveraging LLMs. 
          Most recently I have been investigating the use of byLLM in webscraping and data extraction, intersecting my current
          research direction with my previous experience in web scraping.
        </p>
        <p>
          In the past, I have taken interest in the growing area of research on providing high-level abstractions in quantum programming languages.
          I find the strict requirements of quantum mechanics to be a fascinating challenge for programming language design.
          For more information, check out <a href="https://noembedding.com" target="_blank" rel="noopener noreferrer">noembedding.com</a>, a curated resource on high-level abstractions in quantum programming.
          While these languages are still in their infancy, I will continue researching the use of LLMs to improve the development process of the classical
          programming environment with the goal of eventually applying these techniques to the quantum programming environment.
        </p>
        <p>
          In all, I am interested in providing a more productive and efficient user experience for developers of varying skill levels, and I believe that LLMs can be a powerful tool in achieving this goal.
        </p>
      </header>

      {featured.length > 0 && (
        <section className="section">
          <div className="section-head">
            <h2>Featured projects</h2>
            <Link to="/projects">All projects →</Link>
          </div>
          <div className="card-stack">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
