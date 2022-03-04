import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  test("Make the API Call", async () => {
    const response = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/simpsons"
    );
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
  });
});
