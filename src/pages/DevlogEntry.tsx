import { useParams, Link } from "react-router-dom";
import { getDevlog } from "../lib/devlog";
import { formatDate } from "../lib/format";
import Markdown from "../components/Markdown";
import "./page.css";

export default function DevlogEntry() {
  const { slug } = useParams();
  const post = slug ? getDevlog(slug) : undefined;

  if (!post) {
    return (
      <p className="not-found">
        Post not found. <Link to="/devlog">← Back to devlog</Link>
      </p>
    );
  }

  return (
    <article className="devlog-entry">
      <Link to="/devlog" className="back-link">
        ← Devlog
      </Link>

      <h1>{post.title}</h1>
      <time className="devlog-date muted" dateTime={post.date}>
        {formatDate(post.date)}
      </time>

      {post.tags && post.tags.length > 0 && (
        <ul className="devlog-tags">
          {post.tags.map((tag) => (
            <li key={tag} className="pill topic-pill">
              {tag}
            </li>
          ))}
        </ul>
      )}

      {post.cover && <img src={post.cover} alt="" className="devlog-cover" />}

      <div className="devlog-body">
        <Markdown>{post.content}</Markdown>
      </div>

      {post.links && post.links.length > 0 && (
        <footer className="devlog-links">
          {post.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </footer>
      )}
    </article>
  );
}
