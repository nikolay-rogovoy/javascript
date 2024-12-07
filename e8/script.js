"use strict";

/**
Создайте массив используя литерал [1,2,3]
Создайте массив используя Array [3,2,1]
Поменяйте значения в массивах используя цикл for
*/

(function () {
    let a1 = [1, 2, 3];
    let a2 = [3, 2, 1];
    for (let i = 0; i < a1.length; i++) {
        let val = a1[i];
        a1[i] = a2[i];
        a2[i] = val;
    }
    console.log(a1, a2);
})();

/**
Создайте массив [1, 2, 3, 4, 5]
Возведите в квадрат все его значения
*/
(function () {
    let arr = [1, 2, 3, 4, 5];
    arr = arr.map(x => x * x);
    console.log(arr);
})();


/**
Создайте массив [1, 2, 3, 4, 5]
Добавте в конец массива 6, 7, 8; (push)
Удалите из начала массива 1, 2 (shift)
*/
(function () {
    let arr = [1, 2, 3, 4, 5];
    arr.push(6, 7, 8);
    arr.shift();
    arr.shift();
    console.log(arr);
})();

/**
Создайте массив [1, 2, 3, 4, 5]
Соберите все значения массива в строку исплользуя join и reduce: "1*2*3...."
Сделайте сборку строки наоборот "5*4*3..."
*/
(function () {
    let arr = [1, 2, 3, 4, 5];
    let str = arr.join('*');
    // 1*2*3...
    // *1*2*3....
    let str2 = arr.reduce((acc, val, i) => {
        acc += `${i === 0 ? '' : '*'}${val}`
        // acc += `*${val}`
        return acc;
    }, '');
    console.log(str, str2);

})();

/**
Создайте строку содержащее Ваше имя
Создайте из строки масиив символов: string.split(''); [...string]; Array.from(string); Object.assign([], string);
['W', 'o', 'r', 'd']
Отсортируйте массив без учета заглавных букв
Соберите массив обратно в строку, выведите в консоль результат
*/
(function () {
    let name = 'Nikolay';
    let arr = name.split('');
    arr.sort((a, b) => {
        return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
    })
    console.log(name, arr.join(''));
})();

/**
Создайте массив [1, 2, 3, 4, 5] и [1, 2, 3]
Соедините их используя
a) concat
b) splice
Используйте метод forEach для вывода в консоль всех значений
Используя map получите новый массив объектов: [{x: 1}, {x:2}]
*/
(function () {
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [1, 2, 3];
    let a3 = a1.concat(a2);
    let a4 = [...a1, ...a2];
    a1.splice(a1.length, 0, ...a2);
    a3.forEach(item => console.log(item));
    a3.map(x => {
        return { x };
    });
    // a1.splice(a1.length, 0, a2[0], a2[1], a2[2]);
    console.log(a3, a1);
})();

/**
Создайте массив [1, 2, 2, 3, 3]
С помощью методов filter и indexOf удалите из массива дублирующие значения
*/
(function () {
    let arr = [1, 2, 2, 3, 3];
    let arr2 = arr.filter((x, i) => {
        // console.log(x, i, arr.indexOf(x) === i);
        return arr.indexOf(x) === i;
    });
    console.log(arr2);
})();

/**
Чему равно i в конце кода?
for(var i=0; i<10; i++) {
;
}
alert(i);
*/
(function () {

})();

/**
Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
*/
(function () {
    let str = 'aaa@bbb@ccc';
    // str = str.replace('@', '!');
    while (str.indexOf('@') !== -1) {
        str = str.replace('@', '!');
    }
    console.log(str);
})();

/**
Работа с slice
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
*/
(function () {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(arr.length, 0, ...[1, 2, 3]);
    arr.splice(arr.length, 0, ...[4, 5]);
    console.log(arr);
})();

/**
Работа с splice
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/
(function () {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);
    console.log(arr);

    arr = [1, 2, 3, 4, 5];
    arr.splice(arr.length, 0, ...[2, 3, 4]); // -> arr.push(...[2, 3, 4]);
    console.log(arr);

    arr = [1, 2, 3, 4, 5];
    arr.splice(3, 0, ...['a', 'b', 'c']);
    console.log(arr);

    arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, ...['a', 'b']);
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');
    console.log(arr);

})();

/**
Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
*/
(function () {

    let obj = { js: 'test', jq: 'hello', css: 'world' };
    let arr = [];
    for (let prop in obj) {
        arr.push(prop);
    }
    for(let item of arr) {
        console.log(item);    
    }
    for(let item in arr) {
        console.log(item);    
    }

    console.log(arr, Object.keys(obj));
})();


/**
Дана строка 'js'. Сделайте из нее строку 'JS'.

Дана строка 'JS'. Сделайте из нее строку 'js'.

Дана строка 'я учу javascript!'.
Найдите количество символов в этой строке.

Дана строка 'я учу javascript!'.
Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
*/
