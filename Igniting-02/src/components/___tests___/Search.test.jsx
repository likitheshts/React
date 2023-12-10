import Body from "../Body";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import { Restro_Data } from "./data";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: Promise.resolve(Restro_Data),
  });
});

test("Shimmer should load", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(screen.getByTestId("search")));
  const shimmer = body.getByTestId("shimmer");

  expect(shimmer).toBeInTheDocument();
  //console.log(search)
});
