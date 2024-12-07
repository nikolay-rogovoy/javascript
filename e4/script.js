"use strict"


/**
Создайте обект { x: 1, y: 2 }
Удалите свойство y
Увеличте свойство х на 1 используя префиксный инкремент, прибавте к нему свойство y, результат выведите в консоль
*/

let v1 = { x: 1, y: 2 };
delete v1.y;
++v1.x;
v1.x += v1.y;
console.log(v1.x);


/**
Создайте две переменные используя шестнадцатиричный литерал: 0xA, 0x6
Выполните их поразрядное сложение, выведите результат в консоль, должно получиться 2
*/

let q1 = 0xA, q2 = 0x6;
console.log(q1 & q2);

/**
Создайте строковую переменную myPrivateData 'My secrets'
Создайте числовую переменную key
Зашифруйте переменную myPrivateData ключом key используя оператор по­раз­ряд­ное ИС­КЛЮ­ЧАЮ­ЩЕЕ ИЛИ
Для шифрования нужно обойти строку посимвольно и к каждому символу применить оператор исключаещего или
for (let i = 0; i < myPrivateData.length; i++) {
...
Для получения кода символа используйте метод charCodeAt(индекс символа в строке)
Дешефруйте обратно данные, результат выведите в консоль.
Для получения символа из его кода используйте String.fromCharCode(код символа)
*/

let myPrivateData = 'My secrets';
let key = 1;

let publicData = [];

for (let i = 0; i < myPrivateData.length; i++) {
    publicData.push(myPrivateData.charCodeAt(i) ^ key);
}

let decodedString = '';
for (let i = 0; i < publicData.length; i++) {
    decodedString += String.fromCharCode(publicData[i] ^ key);
}

console.log(publicData, decodedString);

