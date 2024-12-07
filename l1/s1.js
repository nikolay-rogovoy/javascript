"use strict"

const glob = {
    aa: '21312'
};

const aa = '21312';
console.log(aa);

aa = '123';

// Простые типы
let a, b, c, d = true;
a = 1;
b = 'Строка';
c = 3.14;

console.log('Простые типы:', a, b, c, d);

let arr = ['Value 1', , 'Value 4', 'Value 11'];

arr.sort();


// Специальные
let nullVar = null;
let undefinedVar = undefined;
console.log('Специальные:', nullVar, undefinedVar);

// Объекты
let user = {
    firstName: 'Иван',
    lastName: 'Яковлев',
    login: 'login',
    pass: 'pass'
};
let data = new Date();

// Функции
function f1() {
    console.log('f1');
}

// Объявление Function Expression
let f2 = function () {
    console.log('f2');
}

// Стрелочные функции
let f3 = () => {
    console.log('f3');
}

f1();
f2();
f3();

// Объектно-ориентированный язык
let userObject = {
    firstName: 'Иван',
    lastName: 'Яковлев',
    login: 'login',
    pass: 'pass',
    getHelloString: function () {
        return `Hello ${this.lastName} ${this.firstName}`;
    }
};

console.log(userObject.getHelloString());

//
let immutableString = 'immutable string';
console.log(immutableString, immutableString[1]);
//immutableString[1] = 'M' // Ошибка, изменить нельзя

// Простые числа
function simpleNumber() {
    let simpleNumber1 = 12  //Чис­ло две­на­дцать
    let simpleNumber2 = 0xff    //Шестнадцатеричный интервал = 255
    let simpleNumber3 = 1.2     //Чис­ло од­на це­лая две де­ся­тых
    let simpleNumber4 = 6.02e23 // 6.02 × 10^23 (экс­по­нен­ци­аль­ная нотация)

    // Проблема округления
    const x = 0.3 - 0.2;    //три­дцать ко­пе­ек ми­нус два­дцать ко­пе­ек
    const y = 0.2 - 0.1;    //два­дцать ко­пе­ек ми­нус 10 ко­пе­ек
    const result1 = x == y              //=> false: по­лу­чи­лись два раз­ных зна­че­ния!
    const result2 = x == 0.1            //=> false: .3-.2 не рав­но .1
    const result3 = y == 0.1            //=> true: .2-.1 рав­но .1

    console.log('simpleNumber: ', result1, result2, result3);
}
simpleNumber();

// Дата и время
function dataTime() {
    let then = new Date(2010, 0, 1);                //Пер­вый день пер­во­го ме­ся­ца 2010 го­да
    let later = new Date(2010, 0, 1, 17, 10, 30);   //Та же да­та, в 17:10:30 ло­каль­но­го вре­ме­ни
    let now = new Date();                           //Те­ку­щие да­та и вре­мя
    let elapsed = now - then;                       //Раз­ность дат: ин­тер­вал в мил­ли­се­кун­дах
    console.log('dataTime: ', later.getFullYear())  //=> 2010
    console.log('dataTime: ', later.getMonth())     //=> 0: счет ме­ся­цев на­чи­на­ет­ся с ну­ля
    console.log('dataTime: ', later.getDate())      //=> 1: счет дней на­чи­на­ет­ся с еди­ни­цы
    console.log('dataTime: ', later.getDay())       //=> 5: день не­де­ли. 0 - воскр., 5 - пятн.
    console.log('dataTime: ', later.getHours())     //=> 17: 17 ча­сов ло­каль­но­го вре­ме­ни
    console.log('dataTime: ', later.getUTCHours())  //ча­сы по UTC; за­ви­сит от ча­со­во­го поя­са
    console.log('dataTime: ', later.toString())     //=> "Fri Jan 01 2010 17:10:30 GMT+0300"
    console.log('dataTime: ', later.toUTCString())  //=> "Fri, 01 Jan 2010 14:10:30 GMT"
    console.log('dataTime: ', later.toLocaleDateString())   //=> "1 Ян­варь 2010 г."
    console.log('dataTime: ', later.toLocaleTimeString())   //=> "17:10:30"
    console.log('dataTime: ', later.toISOString())  //=> "2010-01-01T14:10:30.000Z"
}

dataTime();


// Строки
function strings() {
    let s1 = 'срока\n - перенос строки \\n - а с экранированием ничего не происходит';
    let s2 = "срока";
    let s3 = `срока${s2}
    asdf
    asdf
    asdf ${s1}
    asdef
Многострочная строка тут \u000A - еще перенос строки`;
    console.log('strings: ', s1, s2, s3);

    /*
Управ­ляю­щие по­сле­до­ва­тель­но­сти JavaScript:
\0\u0000	Символ NULL в строке JavaScript
\b\u0008	«Забой» в строке JavaScript
\t\u0009	Горизонтальная табуляция в строке JavaScript
\n\u000A	Перевод строки в строке JavaScript
\v\u0008	Вертикальная табуляция в строке JavaScript
\\\u005C	Обратный слэш в в строке JavaScript
\’\u0027	Одинарные кавычки в строке JavaScript
\”\u0022	Двойные кавычки в строке JavaScript
\r\u000D	Возврат каретки в строке JavaScript
\f\u000C	Перевод страницы в строке JavaScript
*/

}

strings();

/***/
function bool() {
    let b1 = true;
    let b1_2 = false;
    let res = 1 < 2; // => res = true
    let b2 = 1 + 1 == 2;
    let b3 = !!'string';
    let b4 = !'string';
    let b5 = Boolean(null);
    console.log('bool:', b1, b2, b3, b4, b5);
}
bool();

/***/
function nullAndUndefined() {

    let user = {
        name: 'Bob',
        pass: '123123_new',
        comment: undefined,
    };

    let orm;

    orm.save(user);


    if (result.a == undefined) {

    }



    let obj = {
        a: null
    }
    console.log('nullAndUndefined: ', 'obj.a == null = ', obj.a == null);
    console.log('nullAndUndefined: ', 'obj.a === null = ', obj.a === null);
    console.log('nullAndUndefined: ', 'obj.a == undefined = ', obj.a == undefined);
    console.log('nullAndUndefined: ', 'obj.a === undefined = ', obj.a === undefined);
    console.log('nullAndUndefined: ', 'obj.b === undefined = ', obj.b === undefined);
    let f = function () { };
    console.log('nullAndUndefined: ', f());
}

nullAndUndefined();

// Global object
console.log('globalVar: ', this);
module.exports.foo = 5;
console.log('globalVar: ', this);
// this в глобальной области видимости NodeJS — это текущий объект module.exports, а не глобальный объект.
/***/
function globalVar() {
    console.log('globalVar: global = ', global);
    console.log('globalVar: this = ', this);
}

globalVar();


/***/
function wrapObject() {
    let user = {
        name: 123,
        print: function () {
            console.log(this.name);
        }
    };
    console.log(user.name);
    user.print();

    let s = 'hello world!'; // Стро­ка
    let word = s.substring(s.indexOf(' ') + 1, s.length); // Ис­поль­зо­ва­ние свойств стро­ки
    // Под капотом происходит: new String(s).

    /* Будет работать только для не строгового режима
    s = 'test'; // На­чаль­ное стро­ко­вое зна­че­ние.
    s.len = 4; // Ус­та­но­вить его свой­ст­во.
    let t = s.len; // Те­перь за­про­сить зна­че­ние свой­ст­ва.
    console.log('wrapObject: ', t);
    */
    let s2 = 'test', n = 1, b = true; //Стро­ка, чсло и ло­ги­че­ское зна­че­ние.
    let S = new String(s2); //Объ­ект String
    let N = new Number(n); //Объ­ект Number
    let B = new Boolean(b); //Объ­ект Boolean

}

wrapObject();

/***/
function immutableValues() {
    let num = 1; // Нет смысла в трансформации числа.
    let str = 'Test string'; // Строки не изменяемы.
    // str[1] = 'E'; // Исключение Cannot assign to read only property '1' of string 'Test string'
    str = str.substring(0, 1) + 'E' + str.substring(2);
    console.log('immutableValues(): ', str);
    str += str;
    str = str.replace('TE', 'te');
    console.log('immutableValues(): ', str);
    str = str.replace(/string/g, 'STRING');
    console.log('immutableValues(): ', str);

    let o = { x: 1 }; // На­чаль­ное зна­че­ние объ­ек­та
    o.x = 2; // Из­ме­нить, из­ме­нив зна­че­ние свой­ст­ва
    o.y = 3; // Из­ме­нить, до­ба­вив но­вое свой­ст­во

    let a = [1, 2, 3] // Мас­си­вы так­же яв­ля­ют­ся из­ме­няе­мы­ми объ­ек­та­ми
    a[0] = 0; // Из­ме­нить зна­че­ние эле­мен­та мас­сив
    a[3] = 4; // До­ба­вить но­вый эле­мент

    let s1 = '123';
    let s2 = '123';

    if (s1 == s2) {

    }

    let o2 = { x: 1 }, p2 = { x: 1 };	// Два объ­ек­та с оди­на­ко­вы­ми свой­ст­ва­ми
    o2 === p2		// => false: раз­ные объ­ек­ты не яв­ля­ют­ся рав­ны­ми
    let a2 = [], b2 = [];	// Два раз­лич­ных пус­тых мас­си­ва
    a2 === b2		// => false: раз­лич­ные мас­си­вы не яв­ля­ют­ся рав­ны­ми

    let a3 = []; // Пе­ре­мен­ная a ссы­ла­ет­ся на пус­той мас­сив.
    let b3 = a3; // Те­перь b ссы­ла­ет­ся на тот же мас­сив.
    b3[0] = 1; // Из­ме­не­ние мас­си­ва с по­мо­щью ссыл­ки в пе­ре­мен­ной b.
    a3[0]; // => 1: из­ме­не­ние мож­но на­блю­дать в пе­ре­мен­ной a.
    a3 === b3; // => true: a и b ссы­ла­ют­ся на один и тот же объ­ект, по­это­му они рав­ны.
}

let obj;

let asd = '1' + 1;
if (obj) {

}

immutableValues();


let global = this;
/***/
function copyObjects() {

    let a = ['a', 'b', 'c']; // Ко­пи­руе­мый мас­сив
    var b = []; // Мас­сив, ку­да вы­пол­ня­ет­ся ко­пи­ро­ва­ние
    for (var i = 0; i < a.length; i++) { // Для ка­ж­до­го эле­мен­та в мас­си­ве a[]
        b[i] = a[i]; // Ско­пи­ро­вать эле­мент a[] в b[]
    }
}

copyObjects();

