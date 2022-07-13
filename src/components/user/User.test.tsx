import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import { User } from "./User";

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

it("Render User Component", () => {
  act(() => {
    ReactDOM.createRoot(container).render(<User />);
  });

  expect(container.textContent?.includes("Search")).toBe(true);
  expect(container.textContent?.includes("Gender")).toBe(true);
  expect(container.textContent?.includes("Reset Filter")).toBe(true);
});
