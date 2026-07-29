import { NavLink } from "react-router-dom";
import { profile, nav, externalLinks } from "../content/profile";
import "./Sidebar.css";

function CompanyIcon() {
  return (
    <svg
      className="meta-icon"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 6.75A.75.75 0 0 1 3.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 6.75Zm4-3A.75.75 0 0 1 7.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 3.75Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="meta-icon"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <div className="sidebar-inner">
      {/* 1 — profile */}
      <section className="profile">
        <img
          className="avatar"
          src={profile.avatar}
          alt={profile.name}
          width={320}
          height={240}
        />
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-handle muted">@{profile.handle}</p>
        <p className="profile-bio">{profile.bio}</p>
        <ul className="profile-meta muted">
          <li>
            <CompanyIcon />
            <span>{profile.company}</span>
          </li>
          <li>
            <LocationIcon />
            <span>{profile.location}</span>
          </li>
        </ul>
      </section>

      <nav className="nav" aria-label="Primary">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className="nav-link"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* 3 — external links */}
      <ul className="external-links">
        {externalLinks.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <span>{link.label}</span>
              <span className="external-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
