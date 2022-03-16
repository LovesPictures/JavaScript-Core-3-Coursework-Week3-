const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

let { name, age, favouriteFood } = personOne;

function introduceYourself(personOne) {
  //works without the param declared -
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}
console.log(`i made these test changes `);
introduceYourself(personOne);
