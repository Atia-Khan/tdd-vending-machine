module.exports = class Machine {
  constructor() {
    this.items = [{ crisps: 100 }, { chocolate: 350 }, { mints: 70 }];
  }

  seeSelections() {
    return this.items;
  }

  deposit(amount) {

    const acceptedAmounts = [10, 20, 50, 100, 500];
    if (acceptedAmounts.includes(amount)) {
      return `You have deposited RS: ${amount}`;
    } else {
      return "You have deposited the wrong amount, Machine accept bills only in 10,20,50,100,500 Rupees";
    }
  }
};
