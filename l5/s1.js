
// Многострочные литералы
let v
`string ${v}
string ${v}
`;

// let and const

{
    const pi = Math.pi;
    let i = 1;
}

// Arrow function expressions

(params) => { statements }
singleParam => { statements }
() => { statements }
foo => foo.bar;

// For...of

let arr = [1, 2, 3];
for (let item of arr);

// Computed property names
var a = {
    ["a" + (10 - 6)]: {
        ["some" + "string"]: true,
        [10 + 20]: 10,
        [`hello ${a()}`]: a()
    }
}

// Object.assign()
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.



// Rest parameters
function f(a, b, ...theArgs) {
    // ...
}

// Default parameters

function myFun(a = 5) {
    return a * a;
}

console.log(myFun()); // 25


// Destructuring assignment

var a, b, rest;
var [a, b] = [1, 2];

let {a, b} = {a:1, b:2};

// Map
var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";

// задание значений
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// получение значений
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get("a string");   // "value associated with 'a string'"
                         // потому что keyString === 'a string'
myMap.get({});           // undefined, потому что keyObj !== {}
myMap.get(function() {}) // undefined, потому что keyFunc !== function () {}



// Set

var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};



// Cинтаксис getter'ов и setter'ов
class Student {
	constructor(name) {
    	        this.name = name;
  	}
  	get Name() {
  		return this.name;
  	}
  	set Name(newName) {
  		if(typeof(newName) != "string")
  			throw new Error("Name is not a string!");
  		else
  			this.name = newName; // Robert
  	}
}
var robert = new Student('robert');
robert.Name = "Robert";
console.log(robert.Name);



// Promise



// Iterators

function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true };
       }
    }
}

