function pizzaoven(crusttype, saucetype, cheeses, toppings) {
    var pizza = {};
    pizza.crusttype = crusttype;
    pizza.saucetype = saucetype;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaoven("deep dish", "traditional", "mozzarella", ["sausage", "pepperoni"]);
var p2 = pizzaoven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaoven("hand rolled", "penutbutter", "swiss cheese", ["bell peppers", "celery", "apple slices"]);
var p4 = pizzaoven("hand thrown", "strawberry", "blue cheese", ["green peppers", "pineapples", "black olives"]);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);


