import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import LayoutWrapper from "../layout";
//Pages
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
]);

const ApplicationRoute = () => <RouterProvider router={router} />;

export default ApplicationRoute;
