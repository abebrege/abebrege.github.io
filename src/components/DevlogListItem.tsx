import { Link } from "react-router-dom";
import type { Devlog } from "../lib/types";
import { formatDate } from "../lib/format";
import "./DevlogListItem.css";

export default function DevlogListItem({ post }: { post: Devlog }) {
  return (
    <article className="devlog-item">
      <time className="devlog-item-date muted" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <h3 className="devlog-item-title">
        <Link to={`/devlog/${post.slug}`}>{post.title}</Link>
      </h3>
      {post.summary && (
        <p className="devlog-item-summary muted">{post.summary}</p>
      )}
      {post.tags && post.tags.length > 0 && (
        <ul className="devlog-tags">
          {post.tags.map((tag) => (
            <li key={tag} className="pill topic-pill">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
