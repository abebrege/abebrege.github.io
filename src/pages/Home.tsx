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
          I work full-time building tools for security and privacy at <a href="https://www.northcrossgroup.com" target="_blank" rel="noopener noreferrer">Northcross Group</a>.
          Here, I am currently specializing in building tools to assist the post-quantum migration process while additionally remediating cryptographic API misuse.
        </p>
        <p>
          In my free time, I enjoy researching the effective use of LLMs to improve the development process.
          Recently, I built a <a href="https://github.com/abebrege/scrape-byLLM">small webscraping library</a> using <a href="https://byllm.jaseci.org/">byLLM</a> to improve the user experience of scraping while reducing the cost of each scrape.
        </p>
        <p>
          In the past, I have taken interest in the growing area of research on providing high-level abstractions in quantum programming languages.
          For more information, check out <a href="https://noembedding.com" target="_blank" rel="noopener noreferrer">noembedding.com</a> (or the <a href="https://github.com/abebrege/no-embedding-api/tree/main/db/seeders" target="_blank" rel="noopener noreferrer">repo</a>) for information on universities and their research in this growing field.
        </p>
        <p>
          Whatever the topic, my focus always centers on providing a better user experience for developers and improving the development process.
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
