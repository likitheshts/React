import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1"
);

const continer = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading]
);
console.log(heading);

//functional components

const HeadingComponent = () => {
  return <h4>Helo I'm functional Components</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
