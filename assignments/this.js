/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding - when this isn't specified as to what object it is attached to so it defaults to the console object which is all of JavaScript.
* 2. Implicit Binding - This is when you call a function using a specified object in the form object.function(). This in this case refers to the object specified.
* 3. New Binding - This case is used when using a constructor to make a new object and 'this' will refer to that specific instance of that object being created.
* 4. Explicit Binding - This usage appears when using .apply/.call to override what the constructor made this refer to and instead to look at a specified instance.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log("Window Binding");
function addTwo(a,b){
  a += b;
  console.log(this);
}
addTwo(3,2);

// Principle 2
// code example for Implicit Binding
console.log("Implicit Binding");
const pizzasPrices = {
  pepperoni: 6.99,
  sausage: 6.99,
  supreme: 8.99,
  cheese: 5.99,
  showPrices: function(pizza){
    console.log(pizza + ' $6.99');
    console.log(this);
  }
}

pizzasPrices.showPrices('sausage');

// Principle 3
// code example for New Binding
console.log("New Binding");
function PizzaMenu(price, pizza){
  this.price = price;
  this.pizza = pizza;
  this.printPrice = function(){
    console.log(this.pizza + ' ' + this.price);
  }
}

const bbqChicken = new PizzaMenu('$8.99', 'Barbeque Chicken');
const rancher = new PizzaMenu('$10.99', 'Rancher');

bbqChicken.printPrice();
rancher.printPrice();

// Principle 4
// code example for Explicit Binding
console.log("Explicit Binding");
bbqChicken.printPrice.call(rancher);
bbqChicken.printPrice.apply(rancher);