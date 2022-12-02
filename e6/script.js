"use strict";

/**
Создайте конструктор Person со свойствами first, last, age
Создайте констркутор Teacher
Дополните Teacher свойством subject

Используйте старый и новый синтактситс для создания конструкторов
*/

function Person(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
}

Person.prototype.prinAge = function () {
    console.log(this.age);
}

function Teacher(first, last, age, subject) {
    Person.call(this, first, last, age);
    this.subject = subject;
}

// Наследуем прототип из Person
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false,
    writable: true,
});

let teacher = new Teacher('Mary', 'Smirh', 31, 'Music');

teacher.prinAge();
console.log(teacher);

class Person2 {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    prinAge() {
        console.log(this.age);
    }
}

class Teacher2 extends Person2 {
    constructor(first, last, age, subject) {
        super(first, last, age);
        this.subject = subject;
    }
}

let teacher2 = new Teacher2('Mary', 'Smith', 33, 'Music');
console.log(teacher2);
// console.log(Teacher, Teacher2);


/**
Создайте класс Transformer: включающий в себя методы run, fire, stop. Методы должны именять переменную state
Добавте метод printState - выводящее в консоль текущее состояние трансформера.
Создайте класс Autobot: включающий метод transform (код, отвечающий за трансформацию в автомобиль)
Создайте класс Decepticon: включающий метод transform (код, отвечающий за трансформацию в самолет)
Методы transform должны изменять свойство form, в этом свойстве будет хранится текущяя форма трансформера
Добавте метод в классы наследники printForm, выведите в консоль текущую форму робота.

Используйте старый и новый синтактситс для создания конструкторов
*/

class Transformer {
    constructor() {
        this.state = 'stop';
    }
    run() {
        this.state = 'run';
    }
    fire() {
        this.state = 'fire';
    }
    stop() {
        this.state = 'stop';
    }
    printState() {
        console.log(this.state);
    }
}

class Autobot extends Transformer {
    constructor() {
        super();
        this.form = 'Робот';
    }

    transform() {
        if (this.form === 'Робот') {
            this.form = 'Автомобиль';
        } else {
            this.form = 'Робот';
        }
    }

    printForm() {
        console.log(this.form);
    }
}

class Decepticon extends Transformer {
    constructor() {
        super();
        this.form = 'Робот';
    }

    transform() {
        if (this.form === 'Робот') {
            this.form = 'Самолет';
        } else {
            this.form = 'Робот';
        }
    }

    printForm() {
        console.log(this.form);
    }
}

let optimus = new Autobot();
let decepticon = new Decepticon();

optimus.fire();
optimus.transform();
optimus.printState();
optimus.printForm();

decepticon.run();
decepticon.transform();
decepticon.printState();
decepticon.printForm();

console.log(optimus, decepticon);

