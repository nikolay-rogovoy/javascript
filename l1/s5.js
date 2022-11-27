'use strict'

// Са­мый про­стой спо­соб соз­дать объ­ект за­клю­ча­ет­ся во вклю­че­нии в про­грам­му ли­те­ра­ла объ­ек­та
let empty = {};
let point = { x: 0, y: 0 };
let point2 = { x: point.x, y: point.y + 1 };
let book = {
    'main title': 'JavaScript',
    for: 'all audiences',
    author: {
        firstname: 'firstname',
        surname: 'surname'
    }
};

// Встроенные конструкторы
let o = new Object(); // Соз­дать но­вый пус­той объ­ект: то же, что и {}.
let a = new Array(); // Соз­дать пус­той мас­сив: то же, что и [].
let d = new Date(); // Соз­дать объ­ект Date, пред­став­ляю­щий те­ку­щее вре­мя
let r = new RegExp('js'); // Соз­дать объ­ект RegExp для опе­ра­ций со­пос­тав­ле­ния с шаб­ло­ном.

// Вызов конструкторов
function User(firstName, lastName) {
    // Инициализируем объект, проверяем правильность параметров
    if (firstName == false) {
        throw new Error(`firstName is invalid`);
    }
    if (lastName == false) {
        throw new Error(`lastName is invalid`);
    }
    this.firstName = firstName;
    this.lastName = lastName;
    // Вновь соз­дан­ный объ­ект пе­ре­да­ет­ся кон­ст­рук­то­ру как кон­текст вы­зо­ва,
    // бла­го­да­ря че­му функ­ция-кон­ст­рук­тор мо­жет ссы­лать­ся на не­го с по­мо­щью клю­че­во­го сло­ва this
    console.log('User: ', this);

    // Как пра­ви­ло, в функ­ци­ях-кон­ст­рук­то­рах не ис­поль­зу­ет­ся ин­ст­рук­ция return
    // return this;
    // ес­ли кон­ст­рук­тор яв­но вер­нет объ­ект с по­мо­щью ин­ст­рук­ции return, то зна­че­ни­ем вы­ра­же­ния вы­зо­ва кон­ст­рук­то­ра ста­нет этот объ­ект
    // return {};
}

// Вы­зов кон­ст­рук­то­ра соз­да­ет но­вый пус­той объ­ект, на­сле­дую­щий свой­ст­во pro­to­type кон­ст­рук­то­ра
let user = new User('Bob', 'Smith');

console.log(user);

// Прототипы
// Все объ­ек­ты, соз­дан­ные с по­мо­щью ли­те­ра­лов объ­ек­тов, име­ют один и тот же объ­ект-про­то­тип,
// на ко­то­рый в про­грам­ме Ja­va­Script мож­но со­слать­ся так: Object.pro­totype
Object.prototype.objectPrototype = 1;
console.log('point.objectPrototype: ', point.objectPrototype, point);

// Объ­ек­ты, соз­дан­ные с по­мо­щью клю­че­во­го сло­ва new и вы­зо­ва кон­ст­рук­то­ра,
// в ка­че­ст­ве про­то­ти­па по­лу­ча­ют зна­че­ние свой­ст­ва prototype функ­ции-кон­ст­рук­то­ра
User.prototype.userPrototype = 2;
console.log('user.userPrototype: ', user.userPrototype);
console.log('user.objectPrototype: ', user.objectPrototype); // Потому что прототипом для прототипа функции является Object.prototype
console.log('user', user);

Date.prototype.datePrototype = 3;
let date = new Date();
console.log('date.datePrototype: ', date.datePrototype);
console.log('date.objectPrototype: ', date.objectPrototype);

// Создание через Object.create()
let o1 = Object.create({ x: 1, y: 2 }); // o1 на­сле­ду­ет свой­ст­ва x и y.
console.log('o1.objectPrototype: ', o1.objectPrototype);
// Не унас­ле­ду­ет ни ка­ких-ли­бо свойств, ни ба­зо­вых ме­то­дов, та­ких как toString()
// (а это оз­на­ча­ет, что этот объ­ект нель­зя бу­дет ис­поль­зо­вать в вы­ра­же­ни­ях с опе­ра­то­ром +)
let o2 = Object.create(null);
console.log('o2.objectPrototype: ', o2.objectPrototype);
// o3 по­до­бен объ­ек­ту, соз­дан­но­му с по­мо­щью {} или new Object().
let o3 = Object.create(Object.prototype);
console.log('o3.objectPrototype: ', o3.objectPrototype);

// Наследование
function inheritance() {
    let o = { x: 1 };
    // Ищем свойство в o, потом в его прототипе, потом в протипе прототипа, и так далее
    o.x = 2;
    // Даже если есть у протоипа, х будет переопределен, и свойство протоипа исопльзовать не будет
}
inheritance();


// Атрибуты свойств
console.log(Object.getOwnPropertyDescriptor({ x: 1 }, 'x'));
// enumerable – если true, то свойство просматривается в цикле for..in и методе Object.keys()
// writable – значение свойства можно менять, если true.
// Атрибут configurableодн овременно контролирует,может ли свойство быть удалено из объекта и могут ли быть изменены его атрибуты (кроме контроля изменения атрибутаwritable)

// Перечислить все свойства
function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }
    return result;
}

console.log('listAllProperties: ', listAllProperties(user), Object.getPrototypeOf(user));

// как по­лу­чить ссыл­ку на про­то­тип объ­ек­та
console.log('firstName.writable: ', user.firstName.writable);
console.log('firstName.enumerable: ', user.firstName.enumerable);
console.log('firstName.configurable: ', user.firstName.configurable);

// Ат­ри­бут prototype со­дер­жит ссыл­ку на дру­гой объ­ект, от ко­то­ро­го на­сле­ду­ют­ся свой­ст­ва.
console.log('prototype: ', user.prototype);
console.log('class: ', user.class);
console.log('extensible: ', user.extensible);

