// JS Study Notes - Lesson 1: Variables
const name = 'Mouataz';
let age = 20;
var city = 'Algiers';
console.log(name, age, city);


// Lesson 2: Functions
function greet(n) { return 'Hello ' + n; }
const add = (a, b) => a + b;


// Lesson 3: Arrays
const langs = ['js', 'python', 'go'];
langs.push('rust');
console.log(langs.map(l => l.toUpperCase()));
