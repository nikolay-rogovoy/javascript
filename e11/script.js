'use strict';

/**
Создайте многострочный литерал, выполните в него интерполяцию переменной
*/
(function () {
    let a = 123;
    let str = `string ${a} string`;
})();

/**
Выполните сортировку массива чисел [1,2,3,8,7,6] используя стрелочную функцию как параметр метода sort
*/
(function () {
    let arr = [1, 2, 3, 8, 7, 6];
    arr.sort((a, b) => a - b);
    console.log(arr);
})();

/**
For...of
Выполните обход массива с помощью for...of [1,2,3,8,7,6] и вывод его значений в консоль
*/
(function () {
    let arr = [1, 2, 3, 8, 7, 6];
    for (let num of arr) {
        console.log(num);
    }
})();

/**
Создайте копию объекта {x:1,y:2,z:3}, используйте Object.assign()
*/
(function () {
    let a = { x: 1, y: 2, z: 3 };
    let b = Object.assign({}, a);
    b.x = 321;
    console.log(a, b);
})();

/**
Добавте в объект {x:1,y:2} другой объект , используйте Object.assign()
*/
(function () {
    let o1 = { x: 1, y: 2 };
    let o2 = { a: 1, b: 2 };
    Object.assign(o1, o2);
    console.log(o1, o2);
})();

/**
Rest parameters
Создайте функцию с параметром оставшихся аргуметов
Вычислите сумму всех аргументов
*/
(function () {
    function f(a, b, ...params) {
        return a + b + params.reduce((acc, val) => {
            return acc + val;
        }, 0)
    }
    console.log(f(1, 2));
    console.log(f(1, 2, 3, 4));
})();

/**
Создайте функцию с параметром по умолчанию.
Выведите в консоль значение параметра.
Вызовите функцию с параметром и без, убедитесь что параметр по умолчанию используется
*/
(function () {
    function f(a = 5) {
        console.log(a);
    }
    f();
    f(6);
})();

/**
С помощью деструкции создате переменные x, y из объекта { x: 1, y: 2}
*/
(function () {
    let o = { x: 1, y: 2 };
    let { x, y } = o;
    console.log(x, y);
})();

/**
Дан массив [1,2,3,3,2,1]
с помощью объекта Set сделайте новый массив с уникальными значениями, выведите в консоль
*/
(function () {
    let arr = [1, 2, 3, 3, 2, 1];
    let s = new Set(arr);
    let arr2 = Array.from(s);
    console.log(arr, arr2);
})();

/**
Создайте класс Person, имеющий геттер и сеттер свойства name
*/
(function () {
    class Person {
        constructor(name) {
            this._name = name;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }
    }

    let p = new Person('Bob');
    console.log(p.name);
    p.name = 'Mary';
    console.log(p.name);

})();

/**
Создайте две функции разрешающие промис с использованием setTimeout() через 1 и 2 секунды соответственно
В функциях выведите в консоль момент ее разрешения.
Создайте третью, которая запускает одновременно выполнение первых функций, и после выполнения обоих выводит
об этом информацию в консоль
*/
(function () {
    function f(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Функция работала ${delay} милисекунд`);
                resolve(delay);
            }, delay);
        });
    }
    console.log('Begin');
    // Promise.all([f(1000), f(2000)])
    //     .then((ok, err) => {
    //         console.log('End');
    //     });
    f(1000)
        .then(() => {
            return f(2000);
        })
        .then(() => {
            return f(100);
        })
        .then((ok, err) => {
            console.log('End');
        });

    //**/ */
    ;
    ;
    ;
})();

/**
Дан текстареа. В него вводится текст.
Сделайте так, чтобы после захода на эту страницу через некоторое время,
введенный текст остался в текстареа. Текст должен запоминаться в локальном хранилище.
*/
(function () {

})();

/**
Реализуйте записную книгу, хранящую данные в локальном хранилище.
*/
(function () {

})();

/**
Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку,
которая найдет строки aa, aba по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
*/
(function () {
    let regexp = /ab?a/g;
    let str = 'aa \\ /aba abba \'abbba\' abca abea';
    let str2 = "aa \n aba abba 'abbba' \"abca\" abea";
    let str3 = `aa aba abba
    asd \n

    as \\
    as
    abbba abca ${str} abea`;
    str = str.replace(regexp, '!');
    console.log(str);
})();

/**
Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'.
Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.
*/
(function () {

})();
