
// Многострочные литералы
let v
`string ${v}

\n \t \u0010


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
var obj = { a: 1, b: { b: 2 } };
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

console.log(myFun(), myFun(undefined)); // 25


// Destructuring assignment


let [firstName, lastName] = ["firstName", "lastName"];

alert(firstName); // firstName
alert(lastName);  // lastName


let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

// второй элемент не нужен
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul


let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);


let user = {};
[user.name, user.surname] = "qwe asd".split(' ');

alert(user.name); // qwe
alert(user.surname); // asd


let user = {
    name: "John",
    age: 30
  };
  
  // цикл по ключам и значениям
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, затем age:30
  }


let [firstName, lastName] = [];

alert(firstName); // undefined


// значения по умолчанию
let [firstName = "Гость", lastName = "Анонимный"] = [];

alert(firstName); // Гость
alert(lastName);  // Анонимный


function defaultLastName() {
    return Date.now() + '-visitor';
}

// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName = defaultLastName()] = ["Вася"];

alert(firstName); // Вася
alert(lastName);  // 1436...-visitor



// Деструктуризация объекта
let { var1, var2 } = { var1: …, var2: … };

let options = {
    title: "Меню",
    width: 100,
    height: 200
};

let { title, width, height } = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200


let options = {
    title: "Меню",
    width: 100,
    height: 200
};

let { width: w, height: h, title } = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200



let options = {
    title: "Меню"
  };

let {width=100, height=200, title} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200

// Можно и сочетать одновременно двоеточие и равенство:
let options = {
    title: "Меню"
  };

let {width:w=100, height:h=200, title, ...rest} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200




let arr1 = [1, 2, 3];
var a, b, rest;
var [a, b] = arr1;
let a = arr1[0];
let b = arr1[b];


let { a, b } = { a: 1, b: 2 };
let a = { a: 1, b: 2 }.a;

// Map
var myMap = new Map();

var keyObj = {},
    keyFunc = function () { },
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
myMap.get(function () { }) // undefined, потому что keyFunc !== function () {}
myMap.has('key') == true



// Set

var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
var o = { a: 1, b: 2 };



// Cинтаксис getter'ов и setter'ов
class Student {
    constructor(name) {
        this.name = name;
    }
    fgetName() {
        return this.name;
    }
    get Name() {
        return this.name;
    }

    fsetName(name) {
        this.name = name;
    }
    set Name(newName) {
        if (typeof (newName) != "string")
            throw new Error("Name is not a string!");
        else
            this.name = newName; // Robert
    }
}
var robert = new Student('robert');
robert.Name = "Robert";
robert.fsetName("Robert");
console.log(robert.Name);
console.log(robert.fgetName());



// Promise



// Iterators

function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true };
        }
    }
}

