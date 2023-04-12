const Machine = require("../src/Machine");
// const Items = require("../src/Items");



// AC 1: As a customer, I want to see that the vending machine has items, so that I can purchase them.
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

//AC 2: As a customer, I want to know how much money I have deposited, so that I know what I can purchase.


describe("the vending machine", () => {
    it("should tell me how much money I have deposited", () => {
      // setup
      const machine = new Machine();
  
      const depositedMoney = 150;
      const expectedBill = `You have deposited RS: ${depositedMoney}`;
  
      // exercise
      const deposit = deposit(depositedMoney);
  
      // assert
      expect(typeof deposit).toEqual('string');
      expect(deposit).toEqual(expectedBill);
    });
  });

