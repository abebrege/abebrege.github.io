import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import DevlogList from "./pages/DevlogList";
import DevlogEntry from "./pages/DevlogEntry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "devlog", element: <DevlogList /> },
      { path: "devlog/:slug", element: <DevlogEntry /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
