"use strict"

/**Вы­во­дит име­на и зна­че­ния всех свойств объ­ек­та o. Воз­вра­ща­ет undefined.*/
function printprops(o) {
    for (var p in o)
        console.log(p + ": " + o[p] + "\n");
}

/**Вы­чис­ля­ет Де­кар­то­во рас­стоя­ние ме­ж­ду точ­ка­ми (x1,y1) и (x2,y2).*/
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

/**Ре­кур­сив­ная функ­ция (вы­зы­ваю­щая са­ма се­бя), вы­чис­ляю­щая фак­то­ри­ал*/
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

/**
 * Сле­дую­щее вы­ра­же­ние оп­ре­де­ля­ет функ­цию, вы­чис­ляю­щую квад­рат ар­гу­мен­та.
 * Об­ра­ти­те вни­ма­ние, что она при­сваи­ва­ет­ся пе­ре­мен­ной
*/
let square = function (x) { return x * x; }

/**
 * Вы­ра­же­ния оп­ре­де­ле­ния функ­ций мо­гут иметь име­на, что по­зво­ля­ет
 * про­из­во­дить ре­кур­сив­ные вы­зо­вы.
*/
let f = function fact(x) { if (x <= 1) return 1; else return x * fact(x - 1); };

/**
 * Вы­ра­же­ния оп­ре­де­ле­ния функ­ций мо­гут так­же ис­поль­зо­вать­ся в ка­че­ст­ве
 * ар­гу­мен­тов дру­гих вы­ра­же­ний:
*/
let data = [3, 5, 1, 6];
data.sort(function (a, b) { return a - b; });
console.log(data);

/**
 * Вы­ра­же­ния оп­ре­де­ле­ния функ­ций ино­гда мо­гут тут же вы­зы­вать­ся:
 */
let tensquared = (function (x) { return x * x; }(10));


/**В Ja­va­Script до­пус­ка­ет­ся вло­же­ние оп­ре­де­ле­ний функ­ций в дру­гие функ­ции. На­при­мер:*/
function hypotenuse(a, b) {
    function square(x) { return x * x; }
    return Math.sqrt(square(a) + square(b));
}

// Вызов функций
printprops({ x: 1 });
let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
let probability = factorial(5) / factorial(13);

// Вызов методов
let o = {
    name: 'Валентина',
    f: function () {
        console.log(this.name);
    }
};
o.f();

var calculator = { // Ли­те­рал объ­ек­та
    operand1: 1,
    operand2: 1,
    add: function () {
        // Об­ра­ти­те вни­ма­ние, что для ссыл­ки на этот объ­ект ис­поль­зу­ет­ся
        // клю­че­вое сло­во this.
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();  // Вы­звать ме­тод, что­бы вы­чис­лить 1+1.
console.log('result: ', calculator.result)  // => 2

/*
rect.setSize(width, height);
setRectSize(rect, width, height);
*/

// this в функциях

function f1() {
    console.log(this);
}
f1();

module.exports.foo = 5;
let obj = {
    num: 1,
    f1: function () {
        console.log('f1', this);
        let f2 = () => {
            console.log('f2', this);
        };
        f2();
        let self = this;
        let f3 = function () {
            console.log('f3', this, self);
        };
        f3();
    },

    f4: () => {
        // Берет контекст при объявлении функции
        console.log('f4', this);
    },

    f5: function (f) {
        f();
    }
};

console.log(this);
obj.f1();
obj.f4();
obj.f5(() => console.log(this));
obj.f5(function () { console.log(this) });

