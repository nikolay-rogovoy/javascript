"use strict";

Object.prototype.hello = function () {
    console.log(this);
}

/*
let o = {
    foo: 'bar'
};
*/

let o = Object.create(Object.prototype);
o.foo = 'bar';

o.hello();

let o2 = Object.create(o);
o2.name = 'Bob';

o2.hello();

function O3(age) {
    let result = Object.create(Object.getPrototypeOf(o2));
    result.name = 'name';
    result.age = age;
    return result;
}

let o3 = new O3(10);

O3.prototype = Object.getPrototypeOf(o2);

o3.hello();
console.log('o3.name = ', o3.name);

console.log(o.foo, o2.foo, o3);

