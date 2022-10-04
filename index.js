let myFirstName = "Alexandra";
let myLastName = "Alexandrescu";
let myFullName = myFirstName + " " + myLastName;

console.log("Hello, my name is:", myFullName);

let myAge = 26;
let currentYear = 2022;
let myBirthYear = currentYear - myAge;

console.log("I was born in", myBirthYear);

console.log(
  "------------------ This is my recipe of carbonara ------------------"
);

let spaghetti = 400;
let guancialeMeat = 250;
let eggYolks = 6;
let pecorinoCheese = 50;
let pepper = 4;
let water = 4000;
let salt = 5;

console.log("Those are de ingredients: ");
console.log("Spaghetti: ", spaghetti, "g");
console.log("Guanciale meat: ", guancialeMeat, "g");
console.log("Fresh egg yolks: ", eggYolks);
console.log("Pecorino cheese: ", pecorinoCheese, "g");
console.log("Fresh pepper: ", pepper, "g");
console.log("Water for boiling the spaghetti: ", "4 liters");
console.log("A pinch of salt for the water: ", salt, "g");

console.log("--------- Now, let's cook! ---------");
//Let's cook some carbonara!!

let cheeseSauce = eggYolks + pecorinoCheese;
console.log(
  "This is the cheese sauce made from pecorino and egg yolks: ",
  cheeseSauce
);

//I added to my pasta sauce 2 grams of pepper
let pepperCheeseSauce = 2;
let remainingPepper = pepper - pepperCheeseSauce;
cheeseSauce += pepperCheeseSauce;
console.log(
  "I added 2 grams of pepper to finish the cheese sauce: ",
  cheeseSauce
);

let saltedWater = water + salt;
console.log(
  "This is the salted water in which I will boil the spaghetti: ",
  saltedWater
);

let droppedSpaghetti = saltedWater + spaghetti;
console.log("I put the spaghetti into the boiled water: ", droppedSpaghetti);

let pastaBoiledWater = 200;
console.log(
  "I put aside some boiled water from the pasta to use it for the guanciale sauce: ",
  pastaBoiledWater
);

let absorbedSalt = 2;
let absorbedWater = 100;
let cookedSpaghettiWeight = spaghetti + absorbedSalt + absorbedWater;
console.log(
  "These are the boiled spaghetti after absorbing some water and salt: ",
  cookedSpaghettiWeight
);

let guancialeSauce = guancialeMeat + pastaBoiledWater;
console.log(
  "I added the boiled water I put aside to the guanciale: ",
  guancialeSauce
);

let carbonara =
  guancialeSauce + cookedSpaghettiWeight + cheeseSauce + remainingPepper;
console.log("Final weight of my pasta dish: ", carbonara);
