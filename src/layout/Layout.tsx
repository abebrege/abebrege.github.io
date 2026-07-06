import { Outlet, ScrollRestoration } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}
