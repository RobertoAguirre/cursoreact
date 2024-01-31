//IMPORT - EXPORT
//import { apiKey, cosa } from "./util.js";
//importing default
//import apiKey from "./util.js";
//console.log(cosa);
//import multiple things from the same file
//import * as util from "./util.js";
//console.log(util.apiKey);
//console.log(util.cosa);
//import single things
//export let apiKey = "añsldkfjñ";
//export let cosa = "hodor";
//import everything marked with export as an object

//export default "añlsdkfj"; only on thing to export per file




//using alias
//import {apiKey, cosa as content} from "./util.js";
//console.log(content);
/* VARIABLES
const otherMessage = "HODOR!!!!"; //CONSTANTS CANT BE REASSIGNED
let userMessage = "Hello World!!"; //VARIABLE CAN BE REASSIGNED

console.log(userMessage);
console.log(otherMessage);
*/
//simple functions
/*
function createGreeting(username, message) {
  //console.log(`${message} pinche ${username}`);
  return `${message} pinche ${username}`;
}
const greeting1 = createGreeting("tronco", "que pedo");
//greet("tronco", "que pedo");
console.log(greeting1);

//anonymous function
function(){
  console.log("hello");
}
*/

//arrow functions
//anonymous arrow function
/*
export default (userName, message) => {
  console.log("añlsdkjfñlaksjdfñlaksjdfñlaksj");
  return userName + message;
};
*/

//OBJECTS AND CLASSES
/*const user = {
  name: "Max",
  age: 34,
  greet(username) {
    console.log("hey" + username);
    console.log(this.age); //refering to the age in THIS current object
  }
};
console.log(user);
console.log(user.Max);
user.greet(" hodor");

//blueprints (not super used at least in the course)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hi from bluprint (class)");
  }
}

const user1 = new User("Manuel", 33);
console.log(user1);
user1.greet();*/
/*
//ARRAYS AND ARRAYS METHODS LIKE MAP
const hobbies = ["sports", "cooking", "gaming"];
console.log(hobbies[0]);
//add elements
hobbies.push("warhammering");
console.log(hobbies);
//find index of element passing (runs on everyitem in the array)
const index = hobbies.findIndex((item) => {
  return item === "gaming";
});
console.log(index);
//using MAP to transform every item in an array to another item
//(runs on everyitem in the array)
//map won't modify the original array, that will be unchanged and instead
//it will return a new array, in this case called "editedHobbies"
const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);
//another new array but this time of objects where each object has a text property
const objectHobbies = hobbies.map((item) => ({
  text: item
}));
console.log(objectHobbies);

//another example of .map
const myArray = [1,2,3];
function transformToObjects(arraytomap) {
    // Todo: Add your logic
    // should return an array of objects    
    return arraytomap.map(item=>{
       return {val:item}
    });
}

transformToObjects(myArray);
*/

//DESTRUCTURING

//classic
//const userNameData = ["Max", "Schwarzmuller"];
//const firstName = userNameData[0];
//const lastName = userNameData[1];

//modern destructuring
//remember that in arrays elements are destructured by position
//firstName and lastName are simple variables to use anywhere
const [firstName, lastName] = ["Max", "Schwarzmuller"];
console.log(firstName);
console.log(lastName);

//not only for arrays but also for objects
//classic
/*
const user = {
  name:"Max",
  age:34
}

const name = user.name;
const age = user.age;
*/
//modern destructuring
//rememgber that in objects elements are destructured by name
//so they must have the same name
//name and age are simple variables to use anywhere
const { name, age } = {
  name: "Max",
  age: 34
};
console.log(name);
console.log(age);
//using aliases

/*
const { name: userName, age } = {
  name: "Max",
  age: 34
};
*/
//console.log(userName); //using alias

//DESTRUCTURING IN FUNCTIONS
//classic
/*
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}*/
/*
//modern destricturing
//
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}*/

//function would be called like this
//storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument
/*
//SPREAD OPERATOR
//merge arrays
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];
//... the three dots are the syntax
//if you try to merge like
const _mergedHobbies = [hobbies, newHobbies]; //you will have an array of arrays
//if i want only one array with the elements of both i use spread operator ...
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(_mergedHobbies);
console.log(mergedHobbies);

//You can also merge objects
const user = {
  name: "Max",
  age: 34
};
//a different object exteded with the spread operator to have
//the prevous "user" object properties
const extendedUser = {
  ...user,
  userName: "moco",
  email: "añlksdjf@mail.com"
};
console.log(extendedUser);
*/

/*
//CONTROL STRUCTURES
const password = prompt("YourPassword");
if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else if (password === "hi") {
  console.log("hi works");
} else {
  console.log("access denied");
}

const hobbies = ["Sports", "Cooking", "Farming"];
//classic for
for (let i = 0; i <= hobbies.length - 1; i++) {
  console.log("classic " + hobbies[i]);
}
//modern for that we love now
for (const hobby of hobbies) {
  console.log(hobby);
}
*/

//MANIPULATING THE DOM - NOT WITH REACT
//just an example
// const list = document.querySelector('ul');
// list.remove();

/*
//USING FUNCTIONS AS VALUES
function handleTimeout() {
  console.log("Timed out");
}
const handleTimeout2 = () => {
  console.log("timer2 timed out");
};
//if you dont add the timeout is instantaneous
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
//anonymous
setTimeout(() => {
  console.log("timer3 timed out");
}, 4000);

//this function is executin the greeter() function
function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi"));
*/

/*
//DEFINING FUNCTIONS INSIDE FUNCTIONS
function init() {
  function greet() {
    console.log("hi");
  }
  greet();
}

init();
*/

// //REFERENCE VS PRIMITIVE
// let userMessage = "Hello";
// userMessage = userMessage.concat("!!!");
// console.log(userMessage);

// const hobbies = ["Sports", "Cooking", "Warhammering"];
// hobbies.push("Working"); //can push, splice, etc but no hobbies = "something" because is a constant
// console.log(hobbies);

//MORE ARRAY FUNCTIONS
// Particularly important in this course are:

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
