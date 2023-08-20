const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

for (let productObj of sales) {
  //   console.log(productObj);
  productObj.price;

  let price = productObj.price;
  let discount = productObj.discount;
  let netPrice = price;
  if (discount) {
    netPrice = price * (1 - discount);
  }
  const newObj = { netPrice: netPrice };

  console.log(newObj);
}
console.log(newArr);

// const summary = [{ netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 }];

sales.forEach((obj) =>
 newArr.push({ newPrice: obj.price * (1 - obj.discount || 0) })
);
console.log(sales);
console.log(newArr);
