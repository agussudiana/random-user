import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("hooks/useQueryContext", () => {
  return {
    useQueryContext: () => ({
      query: { gender: "" },
      setQuery: jest.fn(),
    }),
  };
});
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
