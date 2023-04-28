import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

import LayoutWrapper from "../Layout";
import PageNotFound from "../pages/404";
import RandomGroupPage from "../pages/RandomGroup";

const router = createBrowserRouter([
   {
      element: (
         <LayoutWrapper>
            <Outlet />
         </LayoutWrapper>
      ),
      children: [
         {
            path: "/randomizer/",
            element: <Navigate to="/randomizer/group-generator" replace />,
         },
         {
            path: "/randomizer/group-generator",
            element: <RandomGroupPage />,
         },
      ],
   },
   {
      path: "/randomizer/404-page-not-found",
      element: <PageNotFound />,
   },
   {
      path: "*",
      element: <Navigate to="/randomizer/404-page-not-found" replace />,
   },
]);

const ApplicationRoute = () => <RouterProvider router={router} />;

export default ApplicationRoute;
