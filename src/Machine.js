module.exports = class Machine {
  constructor() {
    this.items = [
      { itemName: 'crisps', price: 100, code: 'b1' },
      { itemName: 'chocolate', price: 350, code: 'b2' },
      { itemName: 'mints', price: 70, code: 'b3' }];
    this.amount = 0;
  }

  seeSelections() {
    return this.items;
  }

  // b4
  selectItem(itemCode) {
    let objectItem;
    let itemNotFound = true;

    this.items.forEach((value) => {
      if (value.code === itemCode) {
        objectItem = value;
        itemNotFound = false;
      }
    });

    if (itemNotFound) {
      return "The item you selected is unavailable";
    } else if (objectItem.price > this.amount) {
      return `Your deposit is insufficient.  Please add Rs ${
        objectItem.price - this.amount
      } for this item`;
    } else if (objectItem.price < this.amount) {
      const acceptedBill = [10, 20, 50, 100, 500];

      // Check if change can be returned
      const changeRequired = this.amount - objectItem.price;
      let changePossible = false;
      for (let i = 0; i < acceptedBill.length; i++) {
        if (acceptedBill[i] <= changeRequired) {
          changePossible = true;
          break;
        }
      }

      if (!changePossible) {
        return "Cannot return proper change.  Please choose another item or cancel the transaction";
      } else {
        this.amount -= objectItem.price;

        const bill = {
          item: objectItem.itemName,
          change: [],
        };

        for (let index = acceptedBill.length - 1; index >= 0; index--) {
          const element = acceptedBill[index];

          if (this.amount >= element) {
            bill.change.push(element);
            this.amount -= element;
          }
        }

        return bill;
      }
    }
  }


  deposit(myDeposit) {
    const acceptedBill = [10, 20, 50, 100, 500];
    if(acceptedBill.includes(myDeposit)){
        this.amount += myDeposit;
        return `You have deposited Rs ${this.amount}`;
    }
    else{
        return 'We accept bills in these amounts: 10, 20, 50, 100, 500'
    }
}
cancel() {
    const refundedAmount = this.amount;
    this.amount = 0;
    return { change: [refundedAmount] };
  }
  // deposit(amount) {

  //   const acceptedAmounts = [10, 20, 50, 100, 500];
  //   if (acceptedAmounts.includes(amount)) {
  //     return `You have deposited RS: ${amount}`;
  //   } else {
  //     return "You have deposited the wrong amount, Machine accept bills only in 10,20,50,100,500 Rupees";
  //   }
  // }
};
