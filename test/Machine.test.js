const Machine = require("../src/Machine");
// const Items = require("../src/Items");

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


  //AC 2: As a customer, I want to know how much money I have deposited, so that I know what I can purchase.
  // describe("the vending machine", () => {
  //     const acceptedAmounts = [10, 20, 50, 100, 500];
  //     const depositedMoney = 500;
  // if(acceptedAmounts.includes(depositedMoney)){
  //     it("should tell me how much money I have deposited", () => {
  //         // setup
  //         const machine = new Machine();
      
          
  //         const expectedBill = `You have deposited RS: ${depositedMoney}`;
      
  //         // exercise
  //         const deposited = machine.deposit(depositedMoney);
      
  //         // assert
          
  //         expect(deposited).toEqual(expectedBill);
  //       })
  // } else {
  //     it('does not accept invalid bill amount', ()=> {

  //         const machine = new Machine();
      
  //         // const depositedMoney = 200;
  //         const expectedBill = "You have deposited the wrong amount, Machine accept bills only in 10,20,50,100,500 Rupees";
      
  //             // exercise
  //             const deposited = machine.deposit(depositedMoney);
      
  //              // assert
          
  //         expect(deposited).toEqual(expectedBill);
      
  //       })
  //     }
      

  // });

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