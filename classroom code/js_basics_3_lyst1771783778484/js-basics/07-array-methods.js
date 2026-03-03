const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

// ForEach method example

// Q. Print each dish name with its quantity like:

orders.forEach((item) => console.log(`${item.dish} - ${item.qty}`))

// Q. Print only spicy dishes in uppercase.

orders.forEach((item) => {
  if (item.spicy === true) {
    console.log("spicy dishes are: ",item.dish.toUpperCase())
}
})


// map

// Q. Create a new array that contains only dish names.
const dishes = []
orders.map((dish) => dishes.push(dish.dish))
console.log(dishes);

// Q. Create a new array where each element is the total price per order (price * qty).
const totalPrice = []
orders.map((item) => totalPrice.push(item.price*item.qty))
console.log(totalPrice);


// filter

// Get all spicy dishes.

orders.filter((item) => {
  if(item.spicy === true) {
    console.log(item.dish);
    
  }
})

// Get all orders where total cost (price * qty) is greater than 20.
orders.map((item) => ((item.price*item.qty) > 20) ? console.log(item):"")


//reduce

//Calculate the total revenue of all orders.

const total = orders.reduce((acc,item) => {
  return acc += item.price*item.qty
},0)
console.log(total);

// Count how many total items were ordered (sum of all qty).

const totalQty = orders.reduce((acc,item) => {
  return acc += item.qty
},0)
console.log(totalQty);


//CLASSROOM CODE

const myData = orders.forEach((order, index) => {
  console.log(`  #${index + 1} : ${order.qty}x ${order.dish}`);
});
// console.log(myData);
//
const receiptLines = orders.map((o) => `${o.dish}: $${o.price * o.qty}`);
console.log(receiptLines);

const spicyOrders = orders.filter((o) => o.spicy);
console.log(spicyOrders);

const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.qty * order.price;
}, 0);

console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, order) => {
    const category = order.spicy ? "spicy" : "mild";

    acc[category].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);

console.log(grouped);

const ticketNumbers = [100, 25, 3, 42, 8];
const ascendingOrder = [...ticketNumbers].sort((a, b) => a - b);
const descendingOrder = [...ticketNumbers].sort((a, b) => b - a);
console.log(ascendingOrder);
console.log(descendingOrder);

const kitchenOrders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
  { dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1 },
];

// data | (v1=true, v2=false, v3=true)

const mildReport = kitchenOrders
  .filter((order) => !order.spicy)
  .map((order) => ({
    dish: order.dish,
    total: order.price * order.qty,
  }))
  .toSorted();
