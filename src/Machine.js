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
    const acceptedBill = [10, 20, 50, 100, 500];

    this.items.forEach((value) => {
      if (value.code === itemCode) {
        objectItem = value;
        itemNotFound = false;
      }
    });

    if (itemNotFound) {
      return "The item you selected is unavailable";
    }
    if (objectItem.price > this.amount) {
      return `Your deposit is insufficient.  Please add Rs ${
        objectItem.price - this.amount
      } for this item`;
    }

    
    let returnAmount = this.amount - objectItem.price;
    const bill = {
      item: objectItem.itemName,
      change: [],
    };
    for (let i = acceptedBill.length-1; i >=0 ; i--) {
      if (returnAmount >= acceptedBill[i]) {
        bill.change.push(acceptedBill[i]);
        returnAmount -= acceptedBill[i];
      }
    }

    if(returnAmount === 0){
      return bill;
    }else{
      return 'Cannot return proper change. Please choose another item or cancel the transaction'
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
 
};
