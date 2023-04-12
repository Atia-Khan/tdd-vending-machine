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
  selectItem(itemCode){
    let objectItem;
    let itemNotFound = true;
    
    this.items.forEach(value=>{
      if(value.code === itemCode){
        objectItem = value;
        itemNotFound = false;
      }
    })

    if(itemNotFound){
      return 'The item you selected is unavailable';
    }
    else if(objectItem.price > this.amount){
      return `Your deposit is insufficient.  Please add Rs ${objectItem.price-this.amount} for this item`
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

  // deposit(amount) {

  //   const acceptedAmounts = [10, 20, 50, 100, 500];
  //   if (acceptedAmounts.includes(amount)) {
  //     return `You have deposited RS: ${amount}`;
  //   } else {
  //     return "You have deposited the wrong amount, Machine accept bills only in 10,20,50,100,500 Rupees";
  //   }
  // }
};
