// Cannot destructure Property of Undefined Error in JS

// EXAMPLE 1 - Provide a fallback of an empty object in case the value is `undefined`

// ✅ empty object fallback
const {name} = undefined || {};
console.log(name); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using an empty object as a default parameter

// // ✅ default parameter set to empty object

// function test(obj = {}) {
//   const {country} = obj;
//   console.log(country); // 👉️ undefined
// }

// test();
// test(undefined);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use a default object parameter if you got the error in a function

// function test(obj = {}) {
//   const {country} = obj;
//   console.log(country); // 👉️ undefined
// }

// test();
// test(undefined);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Providing a fallback value of an empty object when destructuring

// function getEmployee(emp = {}) {
//   const {name, age} = emp || {};

//   console.log(name); // 👉️ undefined
//   console.log(age); // 👉️ undefined
// }

// getEmployee(null);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Alternatively, use the optional chaining (?.) operator

// const fromDb = undefined;
// const name = fromDb?.name;
// console.log(name); // 👉️ undefined

// const obj = {name: 'Tom'};
// const n = obj?.name;
// console.log(n); // 👉️ "Tom"

// ------------------------------------------------------------------

// // Cannot destructure Property of Null Error in JavaScript

// // EXAMPLE 6 - Specify a fallback of an empty object in case the value is `null`

// // ✅ empty object fallback if null
// const {name} = null || {};
// console.log(name); // 👉️ undefined

// // --------------------------------------

// // ✅ empty object fallback in function

// function example(obj) {
//   const {num} = obj || {};
//   console.log(num); // 👉️ undefined
// }

// example(null);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Use the optional chaining operator to access possibly `null` properties

// const fromDb = null;
// const name = fromDb?.name;
// console.log(name); // 👉️ undefined

// const obj = {name: 'Alice'};
// const n = obj?.name;
// console.log(n); // 👉️ "Alice"
