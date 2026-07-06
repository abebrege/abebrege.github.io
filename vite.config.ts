import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// abebrege.github.io is a GitHub Pages *user site* served at the domain root,
// so no `base` path is required. Deep-link refreshes are handled by the
// public/404.html SPA fallback.
export default defineConfig({
  plugins: [react()],
});
