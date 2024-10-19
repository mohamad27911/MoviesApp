import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Details from "./pages/Details";
export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/details",
      element: <Details />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}
