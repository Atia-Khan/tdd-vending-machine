const Machine = require("../src/Machine");

// AC 1: As a customer, I want to see that the vending machine has items, so that I can purchase them.
describe("the vending machine", () => {
  it("should have items to purchase", () => {
    // setup
    const machine = new Machine();

    const expected = [
      { itemName: 'crisps', price: 100, code: 'b1' },
      { itemName: 'chocolate', price: 350, code: 'b2' },
      { itemName: 'mints', price: 70, code: 'b3' }];

    // exercise
    const actual = machine.seeSelections();

    // assert
    expect(expected).toEqual(actual);
  });

  // 2nd test case
  it('show me, how much money I have deposited', () => {
    // setup
    const machine = new Machine();
    const myDeposit = 100;
    const notAccepted = 1000;
    // exercise
    const actualAmount = machine.deposit(myDeposit);
    const notAcceptedAmount = machine.deposit(notAccepted);

    // assert
    expect(`You have deposited Rs ${myDeposit}`).toEqual(actualAmount);
    expect(`We accept bills in these amounts: 10, 20, 50, 100, 500`).toEqual(notAcceptedAmount);
  });

  // 3rd test case
  it('I want to add additional money', () => {
    // setup
    const machine = new Machine();
    const previousDeposit = 100;
    const curentDeposit = 50;

    machine.deposit(previousDeposit);
    // exercise
    const actualAmount = machine.deposit(curentDeposit);

    // assert
    expect(`You have deposited Rs ${previousDeposit + curentDeposit}`).toEqual(actualAmount);
  });

  // 4th test case
  it('I want to see a message if my item is unavailable', () => {
    // setup
    const machine = new Machine();
    const itemCode = 'b4';

    // exercise
    const receivedItem = machine.selectItem(itemCode);

    // assert
    expect(`The item you selected is unavailable`).toEqual(receivedItem);
  });

  // 5th test case
  it('if my deposit is insufficient', () => {
    // setup
    const machine = new Machine();
    const amountDeposit = 50;
    const itemCode = 'b3';

    // exercise
    machine.deposit(amountDeposit);
    const receivedItem = machine.selectItem(itemCode);

    // assert
    expect(`Your deposit is insufficient.  Please add Rs ${70-amountDeposit} for this item`).toEqual(receivedItem);
  });


  // 6th test case
  it(' I want to receive change', () => {
    // setup
    const machine = new Machine();
    const amountDeposit = 100;
    const itemCode = 'b3';

    // exercise
    machine.deposit(amountDeposit);
    const receivedItem = machine.selectItem(itemCode);

    // assert
    expect({item: 'mints', change: [20, 10]}).toEqual(receivedItem);
  });

});
// 7 test 
it('should refund my money when I push the cancel button', () => {
  // setup
  const machine = new Machine();
  const depositAmount = 100;
  const expected = { change: [100] };

  // exercise
  machine.deposit(depositAmount);
  const actual = machine.cancel();

  // assert
  expect(expected).toEqual(actual);
});

// 8 test
it("should not dispense item and display message when unable to return proper change", () => {
  // setup
  const machine = new Machine();
  const amountDeposit = 500;
  const itemCode = "b1";

  // exercise
  machine.deposit(amountDeposit);
  const actual = machine.selectItem(itemCode);

  // assert
  expect(actual).toEqual('Cannot return proper change. Please choose another item or cancel the transaction');
});