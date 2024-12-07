"use strict";


/**
Создайте функцию  выводящих в консоль всех свойст объекта { x: 1, y: 2, foo: 'bar' }
Используйте синтаксис декларации функции (Function Declaration)
*/

let q1 = { x: 1, y: 2, foo: 'bar' };
let f1 = function (obj) {
    for (let propName in obj) {
        console.log(propName, obj[propName]);
    }
}
f1(q1);

/**
Создайте функцию для вычисления факториала
Используйте синтакстис функционального выражения (Function Expression)
*/

let w1 = function (num) {
    if (num > 0) {
        return w1(num - 1) * num;
    } else {
        return 1;
    }
}

console.log(w1(5));



/**
Создайте функцию для вычисления квадрата числа
Используйте стрелочную нотацию
*/
let e1 = (num) => {
    return Math.pow(num, 2);
}

console.log(e1(3), '123', '123123', e1(3));


/**
Создайте функцию конструктор, создающую объект с артрибутами firstName, lastName
Объект должен содержать метод hello(); Выводящий приветствие firstName в консоль
Добавте в прототип функции метод bye(); Выводящий проание с firstName в консоль
Вызовите метод bye у объекта.
*/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hello = () => {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let person = new Person('firstName', 'lastName');
Person.prototype.bye = function () {
    console.log(`Bye ${this.firstName} ${this.lastName}`);
}
person.hello();
person.bye();

/**
Добавте в Object.prototype свойство author = 'Your Name';
Создайте объкт используя объектный литерал, например: { foo: 'bar' }, убедитесь в наличии свойства author у объекта
*/

Object.prototype.author = 'Nikolay';
let qw = { foo: 'bar' };
console.log(qw.author);

/**
Создайте функцию возвращающую сумму всех аргументов (используйте arguments)
*/

function sum() {
    let res = 0;
    for (let a of arguments) {
        res += a;
    }
    return res;
}

console.log(sum(1, 2, 10));
