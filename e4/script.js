"use strict"


/**
Создайте обект { x: 1, y: 2 }
Удалите свойство y
Увеличте свойство х на 1 используя префиксный инкремент, прибавте к нему свойство y, результат выведите в консоль
*/

/**
Создайте две переменные используя шестнадцатиричный литерал: 0xA, 0x6
Выполните их поразрядное сложение, выведите результат в консоль, должно получиться 0
*/

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

/**
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

console.log(decodedString);
*/
