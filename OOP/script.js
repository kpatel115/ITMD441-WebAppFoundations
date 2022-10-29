// Modern JS Tutorial Online Book Chapter 4 Objects
let user = {
  name: "Karan",
  age: 24,
};


console.log(user.name);

user.job = "web developer";

console.log(user.job);

user["fav food"] = "pbj";

console.log(user["fav food"]);
console.log(user);
let key5 = prompt("which folder would you like to access", "age")

alert(user[key5]);
// computed properties

let fruit = prompt("which fruit should we get", "pear");

let bag = {
  [fruit]: 4,
  apple: 4,
  fruit: "apple",
}
alert( bag.pear );
alert( bag.fruit );

function Obj1(name, age) {
  return {
    name,
    age,
  }
}
Obj1(karan, 24);
console.log(name + age);