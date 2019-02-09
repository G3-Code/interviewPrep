const UniqueString = require("./UniqueString");

describe("Test case for unique string", () => {
  it("should check for unique string", () => {
    expect(UniqueString("track")).toBe(true);
  });
  it("should check for unique string", () => {
    expect(UniqueString("crack")).toBe(false);
  });
  it("should check for unique string", () => {
    expect(UniqueString("tempest")).toBe(false);
  });
});
