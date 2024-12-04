const shoppingCart = [    // a constant variable called shoppingCart
  {
    product: "Bananas",  // three objects with product, price and quantity
    price: 0.5,
    quantity: 6,
  },
  {
    product: "Apples",
    price: 0.7,
    quantity: 8,
  },
  {
    product: "Yoghurt",
    price: 1.5,
    quantity: 10,
  },
];

let totalCost = 0;              // variable let called totalCost which has a value of O

for (let i = 0; i < shoppingCart.length; i++) {     // for loop with iteration 
  let item = shoppingCart[i];                      // constant variable is declared called item, which has the value of hoppingCart[i]
  const costForItem = item.price * item.quantity;  // 
  totalCost += costForItem;
}

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

console.log(`The total cost for this cart is ${formatter.format(totalCost)}`);

//  The total cost for this cart is £23.60
// One of JavaScript's flexible behaviours is that accessing a non-existent property on an object simply evaluates to undefined. 
//However, this lenient behaviour does not apply when trying to access a property on an undefined or null value (instead JavaScript throws an error, which by default would cause the software to crash).


// typeof item shows 'undefined' 