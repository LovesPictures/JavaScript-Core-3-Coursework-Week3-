let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let sum = 0;
console.log(`QTY\t` + `ITEM`.padEnd(20, " ") + `TOTAL`);
order.map((item) => {
  let { quantity, itemName, unitPrice } = item;

  let total = quantity * unitPrice;

  sum += total;
  console.log(quantity + `\t` + itemName.padEnd(20, " "), total.toFixed(2));
});

console.log(`Total: ` + sum);
