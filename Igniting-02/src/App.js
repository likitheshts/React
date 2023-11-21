import React, { lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroDetails";
import Login from "./components/Login";
import ProfileClass from "./components/ProfileClass";

const InstaMart = lazy(() => import("./components/InstaMart"));
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestroMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Heading 1"
// );

// const continer = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading]
// );
// console.log(heading);

// functional components

// const HeadingComponent = () => {
// return <h4>Helo I'm functional Components</h4>;
// };

// const AppLayout = () => {
//   return {
//     /**
//      * header
//      *  - Logo
//      *  - Menu List
//      *  - Cart
//      * body
//      *  - Search bar
//      *  - RestaurantCard
//      *    - Image
//      *    - Name
//      *    - Rating
//      *    - Cusines
//      *  Footer
//      *  - Links
//      *  - Copyrights
//      *
//      */
//   };
// };
