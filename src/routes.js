import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import DashboardLayout from "./layout/DashboardLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Home /> }, // render by default beacause of index: true
        { path: "about", element: <About /> },
        { path: "contact", element: <About /> },
        { path: "work", element: <About />, children:[{}]},
        { path: "skills", element: <About /> },
        { path: "404", element: <Page404 /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
}
