/**
Напишите функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
которая при каждом вызове дает число на 1 больше, и так до бесконечности.
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
Шаг можно не указывать, тогда он будет равен одному.
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
*/

function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    return function () {
        let lastVal = start;
        start += step;
        return lastVal;
    }
}

let s1 = sequence(1, 2);
let s2 = sequence();
let s3 = sequence(100, 10);

console.log(s1(), s2(), s3());
console.log(s1(), s2(), s3());
console.log(s1(), s2(), s3());
console.log(s1(), s2(), s3());
console.log(s1(), s2(), s3());

/**
Напишите функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции. 
*/

function partial(fn, a1) {
    return fn.bind(null, a1);
}

partial((x, y) => {
    console.log(x + y);
}, 1)(2);

