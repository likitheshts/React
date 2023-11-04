<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>;
import { useRouteError } from "react-router-dom";

const Error = () => {
  const arr = useRouteError();
  //console.log(arr);
  return (
    <>
      <h1>Oops!!</h1>
      <h2>Something went wrong!</h2>
      <h3>{arr.status + ":" + arr.statusText}</h3>
    </>
  );
};
export default Error;
