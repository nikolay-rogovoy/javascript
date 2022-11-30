let fs = require('fs');
const rxjs = require('rxjs');

"use scrict";

/*
let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Получили данные из файла');
    }, 1000);
})
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Получили метаданные файла');
            }, 1000);
        });
    })
    .then((metadata) => {
        console.log(metadata);
    })
    .then(() => {
        return writeFile('');
    })
    .then((result) => {
        console.log(result);
    });

console.log('Старт работы?');

function writeFile(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Записали данные в файл');
        }, 1000);
    });
}
*/

// console.log(rxjs);

let fileContent = fs.readFileSync('l3/d1.json', 'utf8');
let data = JSON.parse(fileContent);
data.baz = 'foo';
fs.writeFileSync('l3/d2.json', JSON.stringify(data, null, 2), { encoding: 'utf-8' });

/*
rxjs.range(1, 10)
    .pipe(
        rxjs.filter(x => x % 2 === 1),
        rxjs.map(x => x + x)
    )
    .subscribe(x => console.log(x));
*/