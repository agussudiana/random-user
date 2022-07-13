import { convertObjectToQueryString } from "./helper";

describe("Helper Testing", () => {
  it("Convert Object To Query String", () => {
    const obj = {
      page: 1,
      results: 10,
    };
    const queryString = convertObjectToQueryString(obj);
    expect(queryString).toBe("page=1&results=10");
  });

  it("Convert Object To Query String with Removed Key", () => {
    const obj = {
      page: 1,
      results: "",
    };
    const queryString = convertObjectToQueryString(obj);
    expect(queryString).toBe("page=1");
  });
});

export {};
