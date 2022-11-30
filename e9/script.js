"use strict";

/**
Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа.
Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число
и возвращать true, если число положительное, и false - если отрицательное.
*/
(function () {

    function isPositive(num) {
        return num >= 0;
    }

    let arr = [1, 2, -4, 5, - 3, 0];

    let arrPositive = arr.filter(isPositive);
    // console.log(arr, arrPositive);

})();

/**
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
Если это так - пусть функция возвращает true, если не так - false.
*/
(function () {

    function isNumberInRange(num) {
        return (num > 0 && num < 10);
        if (num > 0 && num < 10) {
            return true;
        } else {
            return false;
        }
    }

})();

/**
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
*/
(function () {

    function isNumberInRange(num) {
        return (num > 0 && num < 10);
    }
    let arr = [-1, 1, 2, 3, 0, 1];

    let arr2 = arr.filter(isNumberInRange);

    // console.log(arr, arr2);

})();

/**
Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает
сумму его цифр.
*/

function getDigitsSum(num) {
    return num
        .toString()
        .split('')
        .map(x => +x)
        .reduce((acc, val) => acc + val, 0);
}

/**
Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию
getDigitsSum из предыдущей задачи.
*/
(function () {

    let result = [];
    for (let i = 1; i <= 2022; i++) {
        if (getDigitsSum(i) === 13) {
            result.push(i);
        }
    }

    // console.log(result);

})();

/**
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/

function isEven(num) {
    return num % 2 == 0;
}

/**
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/

(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let arrEven = arr.filter(isEven);
    // console.log(arrEven);
})();


/**
Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
(чисел, на которое делится данное число).
*/
(function () {
    let num = 123456;
    let result = [1, num];
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    // console.log(result);
})();

/**
Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
*/
(function () {
    let str = 'Сделайте заглавным первый символ каждого слова этой строки.';
    let arr = str.split(' ');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length) {
            let firstChar = arr[i][0].toUpperCase();
            let newWord = firstChar + arr[i].substring(1);
            result.push(newWord);
        }
    }
    // console.log(result.join(' '));
})();

/**
Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
Функция должна возвращать true или false.
*/
(function () {

    function inArray(str, arr) {
        return arr.indexOf(str) !== -1;
    }

    // let x = 'которая определяет, есть в массиве элемент с заданным текстом или нет.'
    // let a = x.split(' ').forEach(function(v) {v[0] = v[0].toUpperCase()}); 

    // console.log(inArray('qwe', ['asd', 'zxc', 'qwe']))

})();

/**
Дана строка, например, '123456'. Сделайте из нее '214365'.
*/
(function () {
    let str = '123456';
    let result = '';
    for (let i = 0; i < str.length - 1; i += 2) {
        result += str[i + 1] + str[i];
    }
    console.log(result);
})();

/**
Что будет на экране?
alert(str);
var str = "Hello"; 

var str
alert(str);
str = "Hello"; 

 - Hello
 - undefined
 - будет ошибка

*/
(function () {

})();

/**
JSON - это...
*/
(function () {
    // JavaScript Object Notation
    {
        ""
    }

    let jsonData = {
        "foo": "bar",
        "x": 1,
        "y": 2,
        "arr": []
    };
    let str = `{\"x\": 1}`;
    let obj = JSON.parse(str);
    console.log(obj, obj.x, JSON.stringify(jsonData));

})();

/**
Расшифруйте аббревиатуру DOM.
*/
(function () {
    // Document Object Model
})();

/**
Чем отличается const от let?
*/
(function () {

})();

/**
Расшифруйте аббревиатуру API.
*/
(function () {
    // Application Programming Interface

})();

/**
В каком разделе можно вставить JavaScript?
 - <head> и <body>
 - <head>
 - <body>
*/
(function () {

})();

/**
Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
*/
(function () {
    let a = 10, b = 3;
    console.log(a % b);
})();

/**
Даны переменные a и b. Проверьте, что a делится без остатка на b.
Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
*/
(function () {
    let a = 10, b = 3;
    let o = a % b;
    console.log(o === 0 ? 'Делится' : `Делится с остатком ${o}`);
})();

/**
Возведите 2 в 10 степень. Результат запишите в переменную st.
*/
(function () {
    let st = Math.pow(2, 10);
    console.log(st);
})();

/**
Найдите квадратный корень из 245.
*/
(function () {
    console.log(Math.sqrt(245));
})();

/**
Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов.
*/
(function () {
    let arr = [4, 2, 5, 19, 13, 0, 10];
    console.log(Math.sqrt(arr.map(x => Math.pow(x, 3)).reduce((acc, val) => acc + val, 0)));
})();

/**
Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
*/
(function () {
    let num = Math.sqrt(379);
    console.log(num, Math.round(num), Math.round(num * 10) / 10, Math.round(num * 100) / 100);
})();

/**
Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
запишите результаты округления в объект с ключами 'floor' и 'ceil'.
*/
(function () {
    let num = 587;
    let sqr = Math.sqrt(num);
    let result = {
        floor: Math.floor(sqr),
        ceil: Math.ceil(sqr),
    };
    console.log(result);
})();


/**
Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
*/
(function () {
    let arr = [4, -2, 5, 19, -130, 0, 10];
    // Math.min(4, -2, 5, 19, -130, 0, 10);
    console.log(Math.min(...arr), Math.max(...arr))
})();


/**
Выведите на экран случайное целое число от 1 до 100.
*/
(function () {
    let rnd = Math.round(Math.random() * 100);
    console.log(rnd);
})();


/**
Заполните массив 10-ю случайными целыми числами.
*/
(function () {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.random());
    }
    console.log(arr);
})();


/**
Даны переменные a и b. Найдите найдите модуль разности a и b.
Проверьте работу скрипта самостоятельно для различных a и b.
*/
(function () {
    let a = 5, b = 10;
    console.log(Math.abs(a - b));
})();


/**
Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
*/
(function () {
    let a = 5, b = 10;
    let c = Math.abs(a - b);
})();


/**
Дан массив arr. Найдите среднее арифметическое его элементов.
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
*/
(function () {
    let arr = [12, 15, 20, 25, 59, 79];
    console.log(arr.reduce((acc, val) => acc + val, 0) / arr.length);
})();


/**
Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
*/
(function () {
    let arr = [12, 15, 20, 25, 59, 79];
    function f(arr) {
        console.log(arr.shift());
        if (arr.length) {
            f(arr);
        }
    }

    f(arr);
})();


/**
Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
И так, пока сумма не станет однозначным числом (9 и менее).
*/
(function () {

    let num = 12345;

    function f(num) {
        let sum = getDigitsSum(num);
        if (sum <= 9) {
            return sum;
        } else {
            return f(sum);
        }
    }
    // console.log('f(num)', f(num));
})();

function getDigitsSum(x) {
    let str = String(x);
    let a = str.split('');
    let sum = 0;
    a.forEach(function (v) { sum += +v });
    console.log('getDigitsSum = ', sum);
    if (sum < 10 && sum >= 0)
        return sum;
    else {
        return getDigitsSum(sum);
    }
}
// console.log(getDigitsSum(12980));

function getDigitsSum(num) {
    let digits = String(num);
    // console.log(+digits[0]);
    let sumDigits = 0;
    for (var i = 0; i <= digits.length; i++) {
        sumDigits += +digits[i];
        console.log(sumDigits);
    } return sumDigits;
}

console.log(getDigitsSum(123));

/**
Напишите функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
которая при каждом вызове дает число на 1 больше, и так до бесконечности.
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
Шаг можно не указывать, тогда он будет равен одному.
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
*/

/**
Напишите функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции. 
*/

