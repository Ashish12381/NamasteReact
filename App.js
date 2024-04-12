import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./src/CommonComponents/Header/Header";
import Body from "./src/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Pages/About/About";
import ContactUs from "./src/Pages/ContactUs/ContactUs";
import Error from "./src/Pages/Error/Error";
import RestaurantMenu from "./src/Body/RestaurantMenu/RestaurantMenu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
