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

    const fetch = jest.fn(() => {
      fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons");
    });

    const stub = jest.fn();
    stub();
    expect(stub).toBeCalled();

    const FirstHeading = screen.getByText(/Home/i);
    const secondHeading = screen.queryByText(/Add Character/i);

    expect(FirstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
    await screen
      .findByText(/Customer Usability Consultant/i)
      .then((result) => expect(result).toBeInTheDocument());

    await screen
      .findByTestId("0Delete")
      .then((result) => expect(result).toBeInTheDocument());
  });
});
