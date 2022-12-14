"use scrict";


// Создание массивов
let empty = [];                 // Пус­той мас­сив
let primes = [2, 3, 5, 7, 11];  // Мас­сив с пя­тью чи­сло­вы­ми эле­мен­та­ми
let misc = [1.1, true, "a",]; // 3 эле­мен­та раз­ных ти­пов + за­вер­шаю­щая за­пя­тая


let base = 1024;
let table = [base, base + 1, base + 2, base + 3];

// Ли­те­ра­лы мас­си­вов мо­гут со­дер­жать ли­те­ра­лы объ­ек­тов или ли­те­ра­лы дру­гих мас­си­вов:
let b = [
    [1, { x: 1, y: 2 }],
    [2, { x: 3, y: 4 }]
];

let count = [1, , 3]; // Эле­мен­ты с индексами 0 и 2. count[1] => undefined
let undefs = [, ,];  // Мас­сив без элементов, но с длиной, равной 2

// Вы­звать кон­ст­рук­тор без ар­гу­мен­тов:
let a1 = new Array(); // []
// Вы­звать кон­ст­рук­тор с един­ст­вен­ным чи­сло­вым ар­гу­мен­том, оп­ре­де­ляю­щим дли­ну мас­си­ва
let a2 = new Array(10); // [,,,,,,,,,,,];
// Яв­но ука­зать в вы­зо­ве кон­ст­рук­то­ра зна­че­ния пер­вых двух или бо­лее эле­мен­тов мас­си­ва
let a3 = new Array(5, 4, 3, 2, 1, "testing, testing"); // 5, 4, 3, 2, 1, "testing, testing"
let a4 = new Array('5');['5'];

// Чтение и запись элементов массива
let a = ["world"];
let value = a[1 + 2];
a[1] = 3.14;
i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];


// Объект как индекс
o = {};             // Соз­дать про­стой объ­ект
o[1] = "one";       // Ин­дек­си­ро­вать его це­лы­ми чис­ла­ми

a.length          // => 4

a[-1.23] = true;   // Бу­дет соз­да­но свой­ст­во с име­нем "-1.23"
a["1000"] = 0;     // 1001-й эле­мент мас­си­ва
a[1000] = 0;     // 1001-й эле­мент мас­си­ва
a[1.000]           // Эле­мент с ин­дек­сом 1. То же, что и a[1]
a[1]           // Эле­мент с ин­дек­сом 1. То же, что и a[1]


// Нет выхода за границы массива
a = [true, false]; // Этот мас­сив име­ет эле­мен­ты с ин­дек­са­ми 0 и 1
a[2]               // => undefined. Нет эле­мен­та с та­ким ин­дек­сом.
a[-1]              // => undefined. Нет свой­ст­ва с та­ким име­нем.

// Разреженные массивы
a = new Array(5);  // Нет эле­мен­тов, но a.length име­ет зна­че­ние 5.
a = [];            // Соз­даст пус­той мас­сив со зна­че­ни­ем length = 0.
a[1000] = 0;       // До­ба­вит один эле­мент, но ус­та­но­вит дли­ну рав­ной 1001.

a1 = [,];            // Мас­сив без элементов с длиной, равной 1
a2 = [undefined];    // Мас­сив с одним неопределенным элементом
0 in a1              // => false: a1 не име­ет эле­мента с ин­дек­сом 0
0 in a2              // => true: a2 име­ет эле­мен­т с ин­дек­сом 0 и со значением undefined

// Длина массива
a = [].length              // => 0: мас­сив не име­ет эле­мен­тов
['a', 'b', 'c'].length   // => 3: наи­боль­ший ин­декс ра­вен 2, дли­на рав­на 3

a[1000]; // length = 1000 + 1

a = [1, 2, 3, 4, 5];       // Соз­дать мас­сив с пя­тью эле­мен­та­ми.
// delete a[1];
a.length = 3;          // те­перь мас­сив a со­дер­жит эле­мен­ты [1,2,3].
a.length = 0;          // Уда­лит все эле­мен­ты. a - пус­той мас­сив [].
a.length = 5;          // Дли­на рав­на 5, но эле­мен­ты от­сут­ст­ву­ют, по­доб­но Array(5)


// Добавление и удаление элементов массива
a = []               // Соз­дать пус­той мас­сив.
a[0] = "zero";       // И до­ба­вить эле­мен­ты.
a[1] = "one";

// push()
a = [];              // Соз­дать пус­той мас­сив
a.push("zero")       // До­ба­вить зна­че­ние в ко­нец. a = ["zero"]
a.push("one", "two") // До­ба­вить еще два зна­че­ния. a = ["zero", "one", "two"]
a[a.length] = '123';
a[a.length] = '123';
a[a.length] = '123';

// unshift()
// при этом су­ще­ст­вую­щие эле­мен­ты в мас­си­ве сме­ща­ют­ся в по­зи­ции с бо­лее вы­со­ки­ми ин­дек­са­ми.

// Удаление из массива
a = [1, 2, 3];
delete a[1];         // те­перь в мас­си­ве a от­сут­ст­ву­ет эле­мент с ин­дек­сом 1
1 in a               // => false: ин­декс 1 в мас­си­ве не оп­ре­де­лен
a.length             // => 3: опе­ра­тор delete не из­ме­ня­ет свой­ст­во length мас­си­ва

a.length = 0;

// pop() Достает из массива последний элемент
// shift() Достает элемент из начала массива
// splice() - позволяет встав­лять, уда­лять и за­ме­щать эле­мен­ты

// Обход элементов массива
let keys = Object.keys(o); // По­лу­чить мас­сив имен свойств объ­ек­та o
let values = []            // Мас­сив для со­хра­не­ния зна­че­ний свойств
for (let i = 0; i < keys.length; i++) { // Для ка­ж­до­го эле­мен­та в мас­си­ве
    let key = keys[i];                 // По­лу­чить имя свой­ст­ва по ин­дек­су
    values[i] = o[key];                // Со­хра­нить зна­че­ние в мас­си­ве values
}


// ис­клю­чить из об­ра­бот­ки зна­че­ния null, undefined и не­су­ще­ст­вую­щие эле­мен­ты
for (let i = 0; i < a.length; i++) {
    if (!a[i]) continue; // Про­пус­тить null, undefined и не­су­ществ. эле­мен­ты
    // те­ло цик­ла
}

// Ес­ли не­об­хо­ди­мо про­пус­тить толь­ко зна­че­ние undefined и не­су­ще­ст­вую­щие эле­мен­ты, про­вер­ку мож­но за­пи­сать так
for (let i = 0; i < a.length; i++) {
    if (a[i] === undefined) continue; // Про­пус­тить undefined + не­су­ществ. эл.
    // те­ло цик­ла
}

// про­пус­тить толь­ко не­су­ще­ст­вую­щие эле­мен­ты
for (let i = 0; i < a.length; i++) {
    if (!(i in a)) continue; // Про­пус­тить не­су­ще­ст­вую­щие эле­мен­ты
    // те­ло цик­ла
}

// Многомерные массивы
// Соз­дать мно­го­мер­ный мас­сив
let table2 = new Array(10);             // В таб­ли­це 10 строк
for (let i = 0; i < table2.length; i++)
    table2[i] = new Array(10);          // В ка­ж­дой стро­ке 10 столб­цов
// Ини­циа­ли­зи­ро­вать мас­сив
for (let row = 0; row < table.length; row++) {
    for (col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}
// Рас­чет про­из­ве­де­ния 5*7 с по­мо­щью мно­го­мер­но­го мас­си­ва
let product = table[5][7][5];             // 35

a = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

// Методы класса Array
// join()

a = [1, 2, 3];         //Соз­дать но­вый мас­сив с ука­зан­ны­ми тре­мя эле­мен­та­ми
a.join();              //"1,2,3"
a.join(" ");           //"1 2 3"
a.join("");            //"123"
b = new Array(10);     //Мас­сив с дли­ной, рав­ной 10, и без эле­мен­тов
b.join('-')            //'---------': стро­ка из 9 де­фи­сов

// reverse()
let a = [1, 2, 3];
a.reverse().join(); // => "3,2,1": те­перь a = [3,2,1]

// sort()
a = new Array("banana", "cherry", "apple");
a.sort();
s = a.join(", "); // s == "apple, banana, cherry"

a = [33, 4, 1111, 222];
a.sort();                // Ал­фа­вит­ный по­ря­док: 1111, 222, 33, 4
a.sort(function (a, b) { // Чи­сло­вой по­ря­док: 4, 33, 222, 1111
    return a - b;        // Воз­вра­ща­ет зна­че­ние < 0, 0 или > 0
});                      // в за­ви­си­мо­сти от по­ряд­ка сор­ти­ров­ки a и b
let f = function (a, b) { return b - a };
a.sort(function (a, b) { return b - a }); // Обратный числовой порядок
a.sort(f); // Обратный числовой порядок


a = ['ant', 'Bug', 'cat', 'Dog']
a.sort();   // сор­ти­ров­ка с уче­том ре­ги­ст­ра сим­во­лов: ['Bug','Dog','ant',cat']
a.sort(function (s, t) { // Сор­ти­ров­ка без уче­та ре­ги­ст­ра сим­во­лов
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});            // => ['ant','Bug','cat','Dog']

// concat()
a.concat([4, 5]);//

// slice
a = [1, 2, 3, 4, 5];
a.slice(0, 3);   // Вер­нет [1,2,3]
a.slice(3);     // Вер­нет [4,5]
a.slice(1, -1);  // Вер­нет [2,3,4]
a.slice(-3, -2); // Вер­нет [3]

// splice()
a = [1, 2, 3, 4, 5, 6, 7, 8];
a.splice(4);   // Вер­нет [5,6,7,8]; a = [1,2,3,4]
a.splice(1, 2); // Вер­нет [2,3]; a = [1,4]
a.splice(1, 1); // Вер­нет [4]; a = [1]

a = [1, 2, 3, 4, 5];
a.splice(2, 0, 'a', 'b'); // Вер­нет []; a = [1,2,'a','b',3,4,5]
a.splice(2, 2, [1, 2], 3); // Вер­нет ['a','b']; a = [1,2,[1,2],3,3,4,5]


// forEach
let data = [1, 2, 3, 4, 5]; // Мас­сив, эле­мен­ты ко­то­ро­го бу­дут сум­ми­ро­вать­ся
// Най­ти сум­му эле­мен­тов мас­си­ва
let sum = 0;            // На­чаль­ное зна­че­ние сум­мы 0
data.forEach(function (value) { sum += value; }); // При­ба­вить зна­че­ние к sum
sum                     // => 15
// Уве­ли­чить все эле­мен­ты мас­си­ва на 1
data.forEach(function (v, i, a) { a[i] = v + 1; });
data                    // => [2,3,4,5,6]

// map
a = [1, 2, 3];
b = a.map((x) => { return x * x; }); // b = [1, 4, 9]

// filter
a = [5, 4, 3, 2, 1];
smallvalues = a.filter((x) => { return x < 3 });   // [2, 1]
everyother = a.filter((x, i) => { return i % 2 == 0 }); // [5, 3, 1]

let dense = sparse.filter(function () { return true; });
a = a.filter(function (x) { return x !== undefined && x != null; });

// reduce() reduceRight()
a = [1, 2, 3, 4, 5]
sum = a.reduce(function (acc, val) { return acc + val }, 0);     // Сум­ма зна­че­ний
product = a.reduce(function (acc, val) { return acc * val }, 1); // Про­из­вед. зна­че­ний
max = a.reduce(function (acc, val) { return (acc > val) ? acc : val; }); // Наи­больш. зна­че­ние

a = [2, 3, 4]
// Вы­чис­лить 2^(3^4). Опе­ра­ция воз­ве­де­ния в сте­пень име­ет ас­со­циа­тив­ность спра­ва на­ле­во
let big = a.reduceRight(function (accumulator, value) {
    return Math.pow(value, accumulator);
});

// indexOf() и lastIndexOf()
a = [0, 1, 2, 1, 0];
a.indexOf(1)       // => 1: a[1] = 1
a.lastIndexOf(1)   // => 3: a[3] = 1
a.indexOf(3)       // => -1: нет эле­мен­та со зна­че­ни­ем 3

// Оты­ски­ва­ет все вхо­ж­де­ния зна­че­ния x в мас­сив и воз­вра­ща­ет
// мас­сив ин­дек­сов най­ден­ных сов­па­де­ний
function findAll(a, x) {
    var results = [],            // Воз­вра­щае­мый мас­сив ин­дек­сов
        len = a.length,          // Дли­на мас­си­ва, где вы­пол­ня­ет­ся по­иск
        pos = 0;                 // На­чаль­ная по­зи­ция по­ис­ка
    while (pos < len) {           // По­ка ос­та­лись не­про­ве­рен­ные эле­мен­ты...
        pos = a.indexOf(x, pos); // Ис­кать
        if (pos === -1) break;   // Ес­ли ни­че­го не най­де­но, по­иск за­вер­шен.
        results.push(pos);       // Ина­че - со­хра­нить ин­декс в мас­си­ве
        pos = pos + 1;           // И про­дол­жить по­иск со сле­дую­ще­го эле­мен­та
    }
    return results;              // Вер­нуть мас­сив ин­дек­сов
}
