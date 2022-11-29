"use strict";

let o = { foo: 'bar' };

try {
    console.log(o, o.baz.f);
}
catch (error) {
    console.log('Предприняли меры по устранению ошибки');
    throw new Error('Мер оказалось недостаточно');
}
finally {
    console.log('Этот код выполнится в любом случае');
}

console.log('Конец программы');
