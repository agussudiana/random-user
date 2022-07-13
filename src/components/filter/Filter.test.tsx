import { act } from "react-dom/test-utils";
import { Filter } from "./Filter";
import ReactDOM from "react-dom/client";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
});

jest.mock("hooks/useQueryContext", () => {
  return {
    useQueryContext: () => ({
      query: { gender: "" },
      setQuery: jest.fn(),
    }),
  };
});

it("Render Filter Component", () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Filter />);
  });

  expect(container.textContent?.includes("Search")).toBe(true);
  expect(container.textContent?.includes("Gender")).toBe(true);
  expect(container.textContent?.includes("Reset Filter")).toBe(true);
});
