"use scrict";

/***/

// Старый синтакситс наследования

function Animal(name) {
    this.speed = 0;
    this.name = name;
}

Animal.prototype.run = function (speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
};

Animal.prototype.stop = function () {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
}

let animal = new Animal('Мой питомец');


function Rabbit(name, color) {
    Animal.call(this, name);
    this.color = color;
}
Rabbit.prototype = Object.create(Animal.prototype);
Object.defineProperty(Rabbit.prototype, 'constructor', {
    value: Rabbit,
    enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
    writable: true
});

Rabbit.prototype.hide = function () {
    console.log(`${this.name} прячется!`);
};




let rabbit = new Rabbit('Кролик', 'Белый');

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!
console.log('Цвет кролика: ', rabbit.color, rabbit);



// Новые классы (ECMAScript 2015)

class A {
    constructor(x) {
        this.x = x;
    }
    f() {
        console.log('f');
    }
}

class B extends A {
    constructor(x, y) {
        super(x);
        this.y = y;
    }
}

let b = new B(1, 2);
b.f();
console.log(b);

