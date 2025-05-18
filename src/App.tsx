import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/pages/Home";
import Menu from "./features/menu/Menu";
import AboutUs from "./UI/pages/AboutUs";
import Contact from "./UI/pages/Contact";
import AppLayout from "./UI/AppLayout";
import Login from "./features/user/Login";
import CakeDetail from "./features/menu/CakeDetail";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/cake/:id", element: <CakeDetail /> },
      { path: "/contactus", element: <Contact /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
