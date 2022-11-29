"use strict";

/**
Напишите условие if проверяюще текущее время объекта дата
Если время больше 8 часов утра, то выведите сообщение 'Время больше 8'
Если время больше 10 часов утра, то выведите сообщение 'Время больше 10'
Во всех остальных случаях, то выведите сообщение 'Время меньше 8 часов'
*/

(function () {
    let currentDate = new Date(); //
    if (currentDate.getHours() >= 8 && currentDate.getHours() < 10) {
        console.log('Время больше 8');
    } else if (currentDate.getHours() >= 10) {
        console.log('Время больше 10');
    } else {
        console.log('Время меньше 8 часов');
    }
})();

/**
Напишите switch, проверяющее текущий месяц, и возвращающее его строковое представление (Январь, Февраль...)
*/

(function () {
    let currentDate = new Date(); //
    switch (currentDate.getMonth()) {
        case 0:
            console.log('Январь');
            break;
        case 9:
            console.log('Октябрь');
            break;
        case 10:
            console.log('Ноябрь');
            break;
        case 11:
            console.log('Декабрь');
            break;
    }

})();

/**
Напишите while/do while for цикл выполняющий поиск в массиве [1,2,3,4,5] числа 4
*/

(function () {
    let arr = [1, 2, 3, 4, 5, '4', true];

    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 4) {
            console.log('Мы нашли 4');
            break;
        }
        i++;
    }

    i = 0;
    if (arr.length) {
        do {
            if (arr[i] === 4) {
                console.log('Мы нашли 4');
                break;
            }
            i++;
        } while (i < arr.length);
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 4) {
            console.log('Мы нашли 4');
            break;
        }
    }

})();
/**
Используйте цикл for/in для перебора свойст объекта {x:1,y:2,z:3}, выведите значения свойств в консоль
*/
(function () {

    let o = { x: 1, y: 2, z: 3 };
    for (let prop in o) {
        console.log(`${prop}=`, o[prop]);
    }

})();
/**
Напишите два цикла, которые будут инициализировать таблицу пифагора (массив)
Сделайте поиск в таблице пифагора числа 35, выведите в консоль индексы массивов, содержащих это число
*/
(function () {

    let arr = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        arr.push(row);
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
    }

    loop1: for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 35) {
                console.log(i, j);
                break loop1;
            }
        }
    }

    // console.log(arr);

})();
/**
Напишите функцию с одним аргументом, сделайте проверки типа аргумента
а) проверте что аргумент строка, если нет, сгенерируйте исключение.
б) проверте что аргумент число, если нет, сгенерируйте исключение.
в) проверте что аргумент дата, если нет, сгенерируйте исключение.
*/
(function () {

    function f1(x) {
        if (typeof (x) === 'string') {
        } else {
            throw Error('Неправильный аргумент');
        }
    }

    function f2(x) {
        if (typeof (x) === 'number') {
        } else {
            throw Error('Неправильный аргумент');
        }
    }

    function f3(x) {
        if (typeof (x) === 'object' && x instanceof Date) {
        } else {
            throw Error('Неправильный аргумент');
        }
    }

    // f3({});

})();
/**
Напишите функцию принимающую два числовых аргумента, и возращающую результат их деления
Если делитель 0 - сгенерируйте соответствующе исключение
Оберните вызов функции инструкциями try/catch/finally
*/
(function () {

    function f(x, y) {
        if (y === 0) {
            throw new Error('Делить на 0 нельзя');
        }
        return x / y;
    }

    try {
        f(1, 2);
        f(1, 0);
    } catch (error) {
        console.log(error.message);
    }

})();
/**
В переменной min лежит число от 0 до 59.
Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
*/
(function () {

    let min = 35;
    if (min >= 0 && min < 15) {
        console.log('1');
    } else if (min >= 15 && min < 30) {
        console.log('2');
    } else if (min >= 30 && min < 45) {
        console.log('3');
    } else if (min >= 45 && min < 60) {
        console.log('4');
    } else {
        throw new Error('Invalid argument min');
    }

    console.log(Math.ceil(min / 15));

})();
/**
Переменная lang может принимать 2 значения: 'ru' 'en'.
Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
а если имеет значение 'en' – то на английском.
Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.
*/
(function () {

    let lang = 'ru';
    let arr;

    if (lang === 'ru') {
        arr = ['Понедельник', 'Вторник'];
    } else if (lang === 'en') {
        arr = ['Monday'];
    }

    switch (lang) {
        case 'ru':
            arr = ['Понедельник', 'Вторник'];
            break;
        case 'en':
            arr = ['Monday'];
            break;
    }

    let v = {
        'ru': ['Понедельник', 'Вторник'],
        'en': ['Monday'],
    }

    console.log(v['ru']);

})();
/**
Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 5, 0, -3, 2.
*/
(function () {
    let a = 3;
    if (a > 0 && a < 5) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
})();
/**
Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
то выведите 'Верно', в противном случае выведите 'Неверно'.
*/
(function () {
    let a = 3;
    let b = 4;
    // if (a > 2 && a < 11 || b >= 6 && b < 14) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
})();
/**
В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/
(function () {

    // if
    let month = 5;
    if ((month >= 1 && month <= 2) || (month === 12)) {
        // Зима
    } else if (month >= 3 && month <= 5) {
        // Весна
    } else if (month >= 6 && month <= 8) {
        // Лето
    } else if (month >= 9 && month <= 11) {
        // Осень
    }
})();
/**
Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
*/
(function () {
    let str = '469';
    let numbers = str.split('').map(x => Number(x));
    let acc = 0;
    for (let i = 0; i < numbers.length; i++) {
        acc += +numbers[i];
    }

    console.log(numbers.reduce((acc, val) => {
        acc += +val;
        return acc;
    }, 0));
    console.log(numbers, acc);
})();
/**
Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
Если это так - выведите 'да', в противном случае выведите 'нет'.
*/
(function () {

    let str = '125683'; // => [ '1', '2', '5', '6', '8', '3' ] => [ 1, 2, 5, 6, 8, 3 ]

    let chars = str.split('');

    let numbers = [];
    for (let i = 0; i < chars.length; i++) {
        numbers.push(Number(chars[i]));
    }
    console.log(chars, numbers);

    if (numbers[0] + numbers[1] + numbers[2] == numbers[3] + numbers[4] + numbers[5]) {
        console.log('да');
    } else {
        console.log('нет');

    }

    if (Number(str[0]) + Number(str[1]) + Number(str[2]) == Number(str[3]) + Number(str[4]) + Number(str[5])) {
        console.log('да');
    } else {
        console.log('нет');

    }

})();