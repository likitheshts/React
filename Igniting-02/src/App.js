import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

//functional components

// const HeadingComponent = () => {
//   return <h4>Helo I'm functional Components</h4>;
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
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout />);
