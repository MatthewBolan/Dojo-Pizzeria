function pizzaOven (crust,sauce,cheese,toppings) {
    var pizza = [];
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var Ingredients = {
crust: ["deep dish","hand tossed", "hand rolled", "hand thrown"],

sauce: ["traditional", "marinara", "penutbutter", "strawberryjelly"],

cheese: ["mozzarella", "feta", "swiss cheese", "blue cheese"],

toppings: ["sausage", "pepperoni", "mushrooms", "onions", "olives", "bell peppers", "celery", "apple slices", "green peppers", "pineapples", "black olives"]
}

var RandomPizza = pizzaOven(
    Ingredients.crust[Math.floor(Math.random()*(Ingredients.crust.length))], 
    Ingredients.sauce[Math.floor(Math.random()*(Ingredients.sauce.length))], 
    Ingredients.cheese[Math.floor(Math.random()*(Ingredients.cheese.length))],
    Ingredients.toppings[Math.floor(Math.random()*(Ingredients.toppings.length))])
    
console.log(RandomPizza);

