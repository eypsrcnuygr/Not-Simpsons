import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import Form from "../Components/Form";
import store from "../Store/index";
import "jest-canvas-mock";

describe("Form", () => {
  test("it adds the character", async () => {
    const history = createMemoryHistory();
    Storage.prototype.setItem = jest.fn(() => ["Test"]);
    JSON.parse = Storage.prototype.getItem = jest.fn(() => [
      { 0: "Test", 1: "Test2" },
    ]);

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
