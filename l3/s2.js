// Ад обратных вызовов

fs.readdir(source, function (err, files) {
    if (err) {
        console.log('Error finding files: ' + err);
    } else {
        files.forEach(function (filename, fileIndex) {
            console.log(filename);
            gm(source + filename).size(function (err, values) {
                if (err) {
                    console.log('Error identifying file size: ' + err);
                } else {
                    console.log(filename + ' : ' + values);
                    var aspect = (values.width / values.height);
                    widths.forEach(function (width, widthIndex) {
                        var height = Math.round(width / aspect);
                        console.log('resizing ' + filename + 'to ' + height + 'x' + height);
                        this.resize(width, height).write(dest + 'w' + width + '_' + filename, function (err) {
                            if (err) {
                                console.log('Error writing file: ' + err);
                            }
                        });
                    }.bind(this));
                }
            });
        });
    }
});


var result = multiplyTwoNumbers(5, 10);
console.log(result);
// выведется 50


var photo = downloadPhoto('http://coolcats.com/cat.gif');
// photo равно 'undefined'!


downloadPhoto('http://coolcats.com/cat.gif', handlePhoto);

function handlePhoto(error, photo) {
    if (error) {
        console.error('Ошибка загрузки!', error);
    } else {
        console.log('Загрузка завершена', photo);
    }
}

console.log('Загрузка начата');


// Промисы
var promise = new Promise(function (resolve, reject) {
    // Эта функция будет вызвана автоматически

    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении
    // reject(ошибка) при ошибке
})

promise.then(onFulfilled, onRejected)

// onFulfilled – функция, которая будет вызвана с результатом при resolve.
// onRejected – функция, которая будет вызвана с ошибкой при reject.

// С его помощью можно назначить как оба обработчика сразу, так и только один:

// onFulfilled сработает при успешном выполнении
promise.then(onFulfilled)
// onRejected сработает при ошибке
promise.then(null, onRejected)

    .catch
// Для того, чтобы поставить обработчик только на ошибку, вместо .then(null, onRejected) 
// можно написать .catch(onRejected) – это то же самое.

// Синхронный throw – то же самое, что reject
// Если в функции промиса происходит синхронный throw (или иная ошибка), то вызывается reject:

let p = new Promise((resolve, reject) => {
    // то же что reject(new Error("o_O"))
    throw new Error("o_O");
})

p.catch(alert); // Error: o_O

// Пример
'use strict';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result");
    }, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
    .then(
        result => {
            // первая функция-обработчик - запустится при вызове resolve
            alert("Fulfilled: " + result); // result - аргумент resolve
        },
        error => {
            // вторая функция - запустится при вызове reject
            alert("Rejected: " + error); // error - аргумент reject
        }
    );

// Promise после reject/resolve – неизменны
// Когда промис переходит в состояние «выполнен» – с результатом (resolve) или ошибкой (reject) – это навсегда.

'use strict';

let promise = new Promise((resolve, reject) => {

    // через 1 секунду готов результат: result
    setTimeout(() => resolve("result"), 1000);

    // через 2 секунды — reject с ошибкой, он будет проигнорирован
    setTimeout(() => reject(new Error("ignored")), 2000);

});

promise
    .then(
        result => alert("Fulfilled: " + result), // сработает
        error => alert("Rejected: " + error) // не сработает
    );

// Цепочки промисов
// Чейнинг (chaining), то есть возможность строить асинхронные цепочки из промисов – пожалуй, основная причина,
// из-за которой существуют и активно используются промисы.

/**
Например, мы хотим по очереди:

Загрузить данные посетителя с сервера (асинхронно).
Затем отправить запрос о нём на github (асинхронно).
Когда это будет готово, вывести его github-аватар на экран (асинхронно).
…И сделать код расширяемым, чтобы цепочку можно было легко продолжить.
 */

'use strict';

// сделать запрос
httpGet('/article/promise/user.json')
    // 1. Получить данные о пользователе в JSON и передать дальше
    .then(response => {
        console.log(response);
        let user = JSON.parse(response);
        return user;
    })
    // 2. Получить информацию с github
    .then(user => {
        console.log(user);
        return httpGet(`https://api.github.com/users/${user.name}`);
    })
    // 3. Вывести аватар на 3 секунды (можно с анимацией)
    .then(githubUser => {
        console.log(githubUser);
        githubUser = JSON.parse(githubUser);

        let img = new Image();
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.appendChild(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });

httpGet(...)
    .then(...)
    .then(...)
    .then(...)


    