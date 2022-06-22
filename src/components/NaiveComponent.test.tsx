import { NaiveComponent } from "./NaiveComponent";

/**
 *
 */
jest.mock("./data-hooks/UseGetUser", () => ({
  useGetUser: () => ({ name: "some name" }),
}));
describe("NaiveCompo", () => {
  it("should jus be a quick test", () => {
    NaiveComponent();
  });
});
