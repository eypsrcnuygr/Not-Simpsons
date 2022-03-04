import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import AppContainer from "../Components/AppContainer";
import store from "../Store/index";

describe("App", () => {
  test("renders Main Page", async () => {
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );

    const FirstHeading = screen.getByText(/Home/i);
    const secondHeading = screen.queryByText(/Add Character/i);
    expect(FirstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
  });
});
