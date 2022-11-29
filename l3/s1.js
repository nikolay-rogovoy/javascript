// Обработка массивов с помощью функций
{
    let data = [1, 1, 3, 5, 5];        // Мас­сив чи­сел
    // Сред­нее - это сум­ма зна­че­ний эле­мен­тов, де­лен­ная на их ко­ли­че­ст­во
    let total = 0;
    for (let i = 0; i < data.length; i++) total += data[i];
    let mean = total / data.length;  // Сред­нее зна­че­ние рав­но 3
    // Что­бы най­ти стан­дарт­ное от­кло­не­ние, не­об­хо­ди­мо вы­чис­лить сум­му квад­ра­тов
    // от­кло­не­ний эле­мен­тов от сред­не­го.
    total = 0;
    for (let i = 0; i < data.length; i++) {
        let deviation = data[i] - mean;
        total += deviation * deviation;
    }
    let stddev = Math.sqrt(total / (data.length - 1)); // Стан­дарт­ное от­кло­не­ние = 2
}

{
    // Для на­ча­ла не­об­хо­ди­мо оп­ре­де­лить две про­стые функ­ции
    let sum = function (x, y) { return x + y; };
    let square = function (x) { return x * x; };
    // За­тем ис­поль­зо­вать их со­вме­ст­но с ме­то­да­ми клас­са Array для вы­чис­ле­ния
    // сред­не­го и стан­дарт­но­го от­кло­не­ния
    let data = [1, 1, 3, 5, 5];
    let mean = data.reduce(sum) / data.length;
    let deviations = data.map(function (x) { return x - mean; });
    let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));
}
// полифил
let map = Array.prototype.map
    ? function (a, f) { return a.map(f); } // Ес­ли ме­тод map() дос­ту­пен
    : function (a, f) {                     // Ина­че реа­ли­зо­вать свою вер­сию
        let results = [];
        for (let i = 0, len = a.length; i < len; i++) {
            if (i in a) results[i] = f.call(null, a[i], i, a);
        }
        return results;
    };

// Области видимости
{

    var scope = "global";               // Объ­яв­ле­ние гло­баль­ной пе­ре­мен­ной
    function checkscope() {
        var scope = "local";            // Объ­яв­ле­ние ло­каль­ной пе­ре­мен­ной с тем же име­нем
        return scope;                   // Вер­нет ло­каль­ное зна­че­ние, а не гло­баль­ное
    }
    checkscope()                        // => "local"


    var scope = "global scope";         // Гло­баль­ная пе­ре­мен­ная
    function checkscope() {
        var scope = "local scope";      // Ло­каль­ная пе­ре­мен­ная
        function nested() {
            var scope = "nested scope"; // Вло­жен­ная об­ласть ви­ди­мо­сти ло­каль­ных пе­ре­мен­ных
            return scope;               // Вер­нет зна­че­ние этой пе­ре­мен­ной scope
        }
        return nested();
    }
    checkscope()                        // => "nested scope"


    function test(o) {
        var i = 0;                       // i оп­ре­де­ле­на в те­ле всей функ­ции
        if (typeof o == "object") {
            var j = 0;                   // j оп­ре­де­ле­на вез­де, не толь­ко в бло­ке
            for (var k = 0; k < 10; k++) {  // k оп­ре­де­ле­на вез­де, не толь­ко в цик­ле
                console.log(k);          // вы­ве­дет чис­ла от 0 до 9
            }
            console.log(k);              // k по-преж­не­му оп­ре­де­ле­на: вы­ве­дет 10
        }
        console.log(j);                  // j оп­ре­де­ле­на, но мо­жет быть не­ини­циа­ли­зи­ро­ва­на
    }



    function f() {
        console.log(scope);  // Вы­ве­дет "undefined", а не "global"
        var scope = "local"; // Ини­циа­ли­зи­ру­ет­ся здесь, а оп­ре­де­ле­на вез­де
        console.log(scope);  // Вы­ве­дет "local"
    }


    function f() {
        var scope;           // Объ­яв­ле­ние ло­каль­ной пе­ре­мен­ной в на­ча­ле функ­ции
        console.log(scope);  // Здесь она дос­туп­на, но име­ет зна­че­ние "undefined"
        scope = "local";     // Здесь она ини­циа­ли­зи­ру­ет­ся и по­лу­ча­ет свое зна­че­ние
        console.log(scope);  // А здесь она име­ет ожи­дае­мое зна­че­ние
    }
    
    

}




{
    // Замыкания
    let scope = "global scope";        // Гло­баль­ная пе­ре­мен­ная
    function checkscope() {
        let scope = "local scope";     // Ло­каль­ная пе­ре­мен­ная
        function f() { return scope; } // Вер­нет зна­че­ние ло­каль­ной пе­ре­мен­ной scope
        return f();
    }
    checkscope()                       // => "local scope"
}
{
    let scope = "global scope";        // Гло­баль­ная пе­ре­мен­ная
    function checkscope() {
        let scope = "local scope";     // Ло­каль­ная пе­ре­мен­ная
        function f() { return scope; } // Вер­нет зна­че­ние ло­каль­ной пе­ре­мен­ной scope
        return f;
    }
    checkscope()()                     // Ка­кое зна­че­ние вер­нет этот вы­зов?
}
// Скры­тые пе­ре­мен­ные

function counter() {
    let n = 0;
    return {
        count: function () { return n++; },
        reset: function () { n = 0; }
    };
}
let c = counter(), d = counter(); //Соз­дать два счет­чи­ка
c.count()                         //=> 0
d.count()                         //=> 0: они дей­ст­ву­ют не­за­ви­си­мо
c.reset()                         // ме­то­ды reset() и count() со­вме­ст­но ис­поль­зу­ют од­ну пе­ре­мен­ную
c.count()                         // => 0: сброс счет­чи­ка c
d.count()                         // => 1: не ока­зы­ва­ет влия­ния на счет­чик d


{
    // Эта функ­ция воз­вра­ща­ет функ­цию, ко­то­рая все­гда воз­вра­ща­ет v
    function constfunc(v) { return function () { return v; }; }
    // Соз­дать мас­сив функ­ций-кон­стант:
    let funcs = [];
    for (let i = 0; i < 10; i++) funcs[i] = constfunc(i);
    // Функ­ция в эле­мен­те мас­си­ва с ин­дек­сом 5 воз­вра­ща­ет 5.
    funcs[5]() // => 5


    // Воз­вра­ща­ет мас­сив функ­ций, воз­вра­щаю­щих зна­че­ния 0-9
    function constfuncs() {
        let funcs = [];
        for (let i = 0; i < 10; i++)
            funcs[i] = function () { return i; };
        return funcs;
    }
    let funcs = constfuncs();
    funcs[5]()     // Что вер­нет этот вы­зов?


    let self = this; // Со­хра­нить зна­че­ние this в пе­ре­мен­ной для ис­поль­зо­ва­ния
    // во вло­жен­ной функ­ции.
    let outerArguments = arguments; // Со­хра­нить для ис­поль­зо­ва­ния во вло­жен­ных функ­ци­ях

    // Свойства и методы функций и конструктор Function
    function f(x, y, z) {
        // Про­ве­рить чис­ло ожи­дае­мых и фак­ти­че­ски пе­ре­дан­ных ар­гу­мен­тов.
        console.log(f.length, arguments.length);
        // Те­перь вы­пол­нить ос­тав­шую­ся часть функ­ции как обыч­но
        return x + y + z;
    }

    // Методы call() и apply()

    f.call(o);
    f.apply(o);

    //
    o.m = f;    // Вре­мен­но сде­лать f ме­то­дом o.
    o.m();      // Вы­зы­вать его без ар­гу­мен­тов.
    delete o.m; // Уда­лить вре­мен­ный ме­тод.

    f.call(o, 1, 2);
    f.apply(o, [1, 2]);

    let biggest = Math.max.apply(Math, array_of_numbers);


    // За­ме­ща­ет ме­тод m объ­ек­та o вер­си­ей ме­то­да, ко­то­рая ре­ги­ст­ри­ру­ет
    // со­об­ще­ния до и по­сле вы­зо­ва ори­ги­наль­но­го ме­то­да.
    function trace(o, m) {
        let original = o[m];          // Со­хра­нить ори­ги­наль­ный ме­тод в за­мы­ка­нии.
        o[m] = function () {           // Оп­ре­де­лить но­вый ме­тод.
            console.log(new Date(), "Entering:", m);      // За­пи­сать со­об­ще­ние.
            let result = original.apply(this, arguments); // Вы­звать ори­ги­нал.
            console.log(new Date(), "Exiting:", m);       // За­пи­сать со­об­ще­ние.
            return result;                                // Вер­нуть ре­зуль­тат.
        };
    }

    // bind
    function f(y) { return this.x + y; } // Функ­ция, ко­то­рую тре­бу­ет­ся при­вя­зать
    let o = { x: 1 };                   // Объ­ект, к ко­то­ро­му вы­пол­ня­ет­ся при­вяз­ка
    let g = f.bind(o);                   // Вы­зов g(x) вы­зо­вет o.f(x)
    g(2)                                 // => 3

    let sum = function (x, y) { return x + y };   // Воз­вра­ща­ет сум­му 2 ар­гу­мен­тов
    // Соз­дать но­вую функ­цию, по­доб­ную sum, но со свя­зан­ным зна­че­ни­ем null
    // клю­че­во­го сло­ва this и со свя­зан­ным зна­че­ни­ем пер­во­го ар­гу­мен­та, рав­ным 1.
    // Но­вая функ­ция при­ни­ма­ет все­го один ар­гу­мент.
    let succ = sum.bind(null, 1);
    succ(2) // => 3: ар­гу­мент x свя­зан со зна­че­ни­ем 1, а 2 пе­ре­да­ет­ся в арг. y

    function f(y, z) { return this.x + y + z };  // Еще од­на функ­ция сло­же­ния
    let g = f.bind({ x: 1 }, 2);                   // Свя­зать this и y
    g(3) // => 6: this.x - свя­зан с 1, y - свя­зан с 2, а 3 пе­ре­да­ет­ся в z

    // Что будет в консоли?
    function f() {
        console.log(this);
    }
    f.bind(1).bind(2).bind(3)();


    // Конструктор Function()

    let f1 = new Function("x", "y", "return x*y;");
    let f2 = function (x, y) { return x * y; }

    let scope = "гло­баль­ная";
    function constructFunction() {
        let scope = "ло­каль­ная";
        return new Function("return scope"); // Здесь не ис­поль­зу­ет­ся
        // ло­каль­ная об­ласть ви­ди­мо­сти!
    }
    // Сле­дую­щая стро­ка вер­нет "гло­баль­ная", по­то­му что функ­ция, воз­вра­щае­мая
    // кон­ст­рук­то­ром  Function(), яв­ля­ет­ся гло­баль­ной.
    constructFunction()();         // => "гло­баль­ная"

}
