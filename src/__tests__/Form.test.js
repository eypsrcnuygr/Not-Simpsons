import {
  render,
  screen,
  waitFor,
  userEvent,
  fireEvent,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import Form from "../Components/Form";
import store from "../Store/index";
import "jest-canvas-mock";

describe("Add Character", () => {
  test("it adds the character and navigate to main page", async () => {
    const history = createMemoryHistory();

    Storage.prototype.setItem = jest.fn(() => ["Test"]);
    Storage.prototype.getItem = jest.fn(() => ["Test"]);

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Form />
        </Router>
      </Provider>
    );
    const button = screen.getByText("Submit");
    const fullName = screen.getByTestId("FullName");
    const jobTitle = screen.getByTestId("JobTitle");
    const about = screen.getByTestId("About");
    const image = screen.getByTestId("ImageLink");
    expect(button).toHaveTextContent("Submit");

    fireEvent.change(fullName, { target: { value: "Test" } });
    fireEvent.change(jobTitle, { target: { value: "Test" } });
    fireEvent.change(about, { target: { value: "Test" } });
    fireEvent.change(image, { target: { value: "Test" } });
    expect(fullName.value).toBe("Test");
    expect(jobTitle.value).toBe("Test");
    expect(about.value).toBe("Test");
    expect(image.value).toBe("Test");

    fireEvent.click(button);

    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
