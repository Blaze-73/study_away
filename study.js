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


// Lesson 4: Objects
const user = { name, age, city };
console.log(Object.keys(user));


// Lesson 5: Loops and conditionals
for (const l of ['js','py']) { if (l === 'js') console.log('favorite: ' + l); }


// Lesson 6: Promises and async
async function fetchData() { return await Promise.resolve([1,2,3]); }
fetchData().then(console.log);
