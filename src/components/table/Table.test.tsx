import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import { Table } from "./Table";
import { TableHeaders } from "./Table.interface";

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

it("Render Dynamic Table Component", () => {
  const tableHeaders: TableHeaders[] = [
    {
      title: "Header 1",
      enableSorting: false,
      sortKey: "username",
      render: (data: any) => data.value,
    },
  ];

  const dataTable = [
    {
      value: "Value 1",
    },
  ];

  act(() => {
    ReactDOM.createRoot(container).render(
      <Table headers={tableHeaders} dataTable={dataTable} />
    );
  });

  expect(container.textContent?.includes("Header 1")).toBe(true);
  expect(container.textContent?.includes("Value 1")).toBe(true);
});
