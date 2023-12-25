import logo from "./logo.svg";
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  }
  
]);
function App() {
  return (

    <Provider store={Store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        <Footer />
  
      </div>
    </Provider>
   
  );
}

export default App;
