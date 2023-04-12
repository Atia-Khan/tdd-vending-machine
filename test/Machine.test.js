const Machine = require("../src/Machine");
// const Items = require("../src/Items");

// AC 1: As a customer, I want to see that the vending machine has items, so that I can purchase them.
describe("the vending machine", () => {
  it("should have items to purchase", () => {
    // setup
    const machine = new Machine();

    const expected = [{ crisps: 100 }, { chocolate: 350 }, { mints: 70 }];

    // exercise
    const actual = machine.seeSelections();

    // assert
    expect(Array.isArray(actual)).toEqual(true);
    expect(expected).toEqual(actual);
  });
});

//AC 2: As a customer, I want to know how much money I have deposited, so that I know what I can purchase.

describe("the vending machine", () => {
    const acceptedAmounts = [10, 20, 50, 100, 500];
    const depositedMoney = 500;
if(acceptedAmounts.includes(depositedMoney)){
    it("should tell me how much money I have deposited", () => {
        // setup
        const machine = new Machine();
    
        
        const expectedBill = `You have deposited RS: ${depositedMoney}`;
    
        // exercise
        const deposited = machine.deposit(depositedMoney);
    
        // assert
        
        expect(deposited).toEqual(expectedBill);
      })
} else {
    it('does not accept invalid bill amount', ()=> {

        const machine = new Machine();
    
        // const depositedMoney = 200;
        const expectedBill = "You have deposited the wrong amount, Machine accept bills only in 10,20,50,100,500 Rupees";
    
            // exercise
            const deposited = machine.deposit(depositedMoney);
    
             // assert
        
        expect(deposited).toEqual(expectedBill);
    
      })
    }
    

});
