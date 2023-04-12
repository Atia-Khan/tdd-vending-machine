const Machine = require("../src/Machine");
// const Items = require("../src/Items");

describe("the vending machine", () => {
  it("should have items to purchase", () => {
    // setup
    const machine = new Machine();

    const expected = [{ "crisps": 100 }, { "chocolate": 350 }, { "mints": 70 }];

    // exercise
    const actual = machine.seeSelections();

    // assert
    expect(Array.isArray(actual)).toEqual(true);
    expect(expected).toEqual(actual);
  });
});
