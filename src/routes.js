import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Page404 from "./pages/Page404";
import DashboardLayout from "./layout/DashboardLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/portfolio-v1/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Home /> }, // render by default beacause of index: true
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "work", element: <Work />, children:[{}]},
        { path: "skills", element: <Skills /> },
        { path: "404", element: <Page404 /> },
      ],
    },
  {
      path: "/",
      element: <DashboardLayout />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
}
