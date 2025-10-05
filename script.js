let listOfProdacts = [
  { name: 'Хліб', guantity: 2, wasBought: false, price: 25, sum: 50 },
  { name: 'Ковбаса', guantity: 1, wasBought: false, price: 120, sum: 120 },
  { name: 'Сир', guantity: 3, wasBought: true, price: 60, sum: 180 },
  { name: 'Масло', guantity: 1, wasBought: false, price: 85, sum: 85 },
  { name: 'Молоко', guantity: 2, wasBought: false, price: 40, sum: 80 },
];

function showList() {
  let bought = [];
  let notBought = [];
  for (let i = 0; i < listOfProdacts.length; i++) {
    if (listOfProdacts[i].wasBought) {
      bought.push(listOfProdacts[i]);
    } else {
      notBought.push(listOfProdacts[i]);
    }
  }
  let resalt = notBought.concat(bought);
  return resalt;
}

console.log(showList());

function buyProdact(prodact) {
  for (let i = 0; i < listOfProdacts.length; i++) {
    if (listOfProdacts[i].name.toLowerCase() === prodact.toLowerCase()) {
      listOfProdacts[i].wasBought = true;
      // return listOfProdacts[i];
    }
  }
  return listOfProdacts;
}

console.log(buyProdact('молоко'));

function deleteProdact(prodact) {
  let newListOfProdact = [];
  for (let i = 0; i < listOfProdacts.length; i++) {
    if (listOfProdacts[i].name.toLowerCase() !== prodact.toLowerCase())
      newListOfProdact.push(listOfProdacts[i]);
  }
  listOfProdacts = newListOfProdact;
  return listOfProdacts;
}

deleteProdact('хліб');
console.log(showList());
console.log(getSumAllOfProdact());


function addPurchase(name, guantity, price) {
  let found = false;
  for (let i = 0; i < listOfProdacts.length; i++) {
    if (listOfProdacts[i].name.toLowerCase() === name.toLowerCase()) {
      listOfProdacts[i].guantity += 1;
      listOfProdacts[i].wasBought = true;
      listOfProdacts[i].sum = listOfProdacts[i].price * listOfProdacts[i].guantity;
      found = true
    }
  }

  if (!found) {
    listOfProdacts.push({
      name: name,
      guantity: guantity,
      wasBought: true,
      price: price,
      sum: guantity * price
    })
  }
  return listOfProdacts;
}

console.log(addPurchase('цукор', 3, 27));

console.log(showList());


function getSumAllOfProdact() {
  let sumAllOfProdact = 0;
  for (let i = 0; i < listOfProdacts.length; i++) {
    sumAllOfProdact += listOfProdacts[i].sum;
  }
  return sumAllOfProdact;
}

console.log(getSumAllOfProdact());

function getSumOfNotBoughtProdact() {
  let sumOfNotBoughtProdact = 0;
  for (let i = 0; i < listOfProdacts.length; i++) {
    if (!listOfProdacts[i].wasBought) {
      sumOfNotBoughtProdact += listOfProdacts[i].sum;
    }
  }
  return sumOfNotBoughtProdact;
}

console.log(getSumOfNotBoughtProdact());

