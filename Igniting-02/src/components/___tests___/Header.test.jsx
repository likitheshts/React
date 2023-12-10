import { render } from "@testing-library/react";
import HeaderComponent from "../Header";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");
  //console.log(logo);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart should you zero items", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("cart");
  //console.log(logo);
  expect(logo.innerHTML).toBe("Cart - 0");
});
