/** @format */

/* // for (var i = 1; i < 10; i++) {
//   console.log(i);
// }

//js can change a whole function into string ---so cool but don't know what to use it for
class changingFunToString {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  dist() {
    const { x, y } = this;
    return (x * x + y * y) ** 0.5;
  }
}

abc = new changingFunToString(4, 5);
// console.log(abc.dist());
// abc.dist = "it really changed";
// console.log(abc.dist);
// console.log(abc.dist());
newData = { x: 12, y: 5 };
//a new copy of function is created from a class
eee = abc.dist.bind(newData);
console.log(eee());
console.log(abc.dist()); */

//--------------------------------------------------------------------------------------------------------

/* console.log(null || 2 || undefined); //return first truthy value
console.log(1 && null && 2);//retrun first falsy value */

/* let age = 15;
if (!(age >= 14 && age <= 90)) console.log("yes"); */

//---------------------------------------------------------------------------

// const readline = require("readline");    | didn't wrk

// --wrk but more line
/* const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
}); */

// esy way to take input
/* const prompt = require("prompt-sync")();
let name = prompt("whsf  ");
console.log(`abc ${name}`); */
// --------------------------------------------------------------------------

// chk if number is prime number
// ---naive way--- timeComplexity-O(n)
/* const prompt = require("prompt-sync")();
const n = prompt("Enter the number-");
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log(`${isPrime(n)}`);

// need to understand root 2 concept
 */

// ----best way 2 to root n---- timeComplexity-O(sqrt(n))
/* const prompt = require("prompt-sync")();
const n = prompt("enter the number-");
function isPrime() {
  if (n == 1) return "its one dumb";
  for (let i = 2; i * i <= n; ++i) {
    console.log(`\n ${i}`);
    if (n % i == 0)
      return "we did the scientific research on this number and found out its not what you are looking for";
  }
  return "we got it man, we successfully concluded its the number that used in nuclear bomb";
}
console.log(isPrime());

 */

// ---------------------------------------------------------------------------

// switch statement
/* let browser = "abc";
if (browser === "Edge") console.log(1);
else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("2");
} else {
  console.log(0);
} */
// -----------------------------------------------------------------------

// rewrite function using ||

/* let age = 11;
// console.log(age > 18 ? true : "did parent allow you");
console.log(age > 18 || "did parents allow you");
 */

// -------------------------------------------------------------------------

// pow program----pow for power Ranger
/* let n = 2,
  t = 1;
function getPow() {
  let ans = 1;
  for (let i = 0; i < t; ++i) {
    ans *= n;
  }
  return ans;
}
console.log(getPow());
 */

// --------------------------------------------------------------------------
// arrow function
/* let prompt = require("prompt-sync")();
let ask = (question, yes, no) => {
  if (prompt(question)) yes();
  else no();
};
ask(
  "what is the question",
  () => console.log("yes ran"),
  () => console.log("no ran")
);
 */

// ------------------------------------------------------------
// ARMSTRONG NUMBER
// ------------------------------------------------------------
/* let prompt = require("prompt-sync")();
let n = +prompt("enter the number"); //change the input string to number using +
// console.log(typeof n);
if (Number.isInteger(n) != true) {
  console.log("its not a valid number");
  process.exit(1); //terminate immidiately
}
let temp = n;
let sum = 0;

while (n != 0) {
  let r = Math.floor(n % 10);
  sum += r * r * r;
  n = Math.floor(n / 10);
}
if (temp == sum) console.log(`its a armstrong number ${sum},${temp}`);
else console.log(`its not a armstrong number ${sum} ,${temp}`); */
// ------------------------------------------------------------
// REVERSE A NUMBER
// ------------------------------------------------------------
/* let prompt = require("prompt-sync")();
let n = prompt("enter the number");
let rev_n = 0;
// while (n > 0) {
//   rev_n = rev_n * 10 + Math.floor(n % 10);
//   n = Math.floor(n / 10);
// }
// --------Better way----------
rev_n = parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n); //split-> array to char cause reverse will not work on string
console.log(`reversed number ${rev_n}`); */
// ------------------------------------------------------------
// OBJECTS
// ------------------------------------------------------------
// ------------creating a obbj-------------
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);
// ----------check if obj is empty-----------
// function isEmpty(obj) {
//   for (let key in obj) return true;
//   return false;
// }
// let schedule = { abc: "aa" };
// console.log(isEmpty(schedule));
// --------------sum the salaries----------
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) sum += salaries[key];
// console.log(sum);
// -------------multiply numeric------------
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") obj[key] *= 2;
//   }
// }
// let menu = {
//   width: 200,
//   height: 300,
//   title: "my menu",
// };
// multiplyNumeric(menu);
// console.log(menu);
// ---------------calculator---------------
// let prompt = require("prompt-sync")();
// let calculator = {
//   n: 0,
//   n2: 0,
//   read() {
//     this.n = +prompt("input number");
//     this.n2 = +prompt("input number");
//   },
//   sum() {
//     return this.n + this.n2;
//   },
//   mul() {
//     return this.n * this.n2; //multiply changes the string to number auto
//   },
// };
// calculator.read();
// console.log(calculator.n, calculator.n2);
// console.log("sum" + calculator.sum());
// console.log("mul" + calculator.mul());
// ------------------chaining----------------
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     // console.log(this);//returns obj
//     return this;
//   },
//   down() {
//     this.step--;

//     return this;
//   },
//   showStep: function () {
//     console.log(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep().down().showStep();
// ------------calculator with constructor-------------
function Calculator() {
  this.read = function () {
    let prompt = require("prompt-sync")();
    this.n1 = +prompt("n1-");
    this.n2 = +prompt("n2-");
  };
  this.sum = function () {
    return this.n1 + this.n2;
  };
  this.mul = function () {
    return this.n1 * this.n2;
  };
}
let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
