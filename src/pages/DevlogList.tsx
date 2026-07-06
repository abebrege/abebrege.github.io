import { devlogs } from "../lib/devlog";
import DevlogListItem from "../components/DevlogListItem";
import "./page.css";

export default function DevlogList() {
  return (
    <section className="page">
      <header className="page-head">
        <h1>Devlog</h1>
        <p className="muted">Short notes on what I'm building.</p>
      </header>

      {devlogs.length === 0 ? (
        <p className="muted">No entries yet.</p>
      ) : (
        <div className="card-stack">
          {devlogs.map((post) => (
            <DevlogListItem key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
