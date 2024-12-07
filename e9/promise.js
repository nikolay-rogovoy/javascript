const fs = require('fs');

/**
 Прочитать файл command.txt
 и прочитать файл который написан в command.txt, вывести в консоль
 */

(function main() {


    new Promise((resolve, reject) => {
        fs.readFile('e9/command.txt', 'utf8', (err, command) => {
            if (err) {
                reject(err);
            } else {
                resolve(command);
            }
        });
    })
        .then((command) => {
            return new Promise((resolve, reject) => {
                fs.readFile(`e9/${command}`, 'utf8', (err, result) => {
                    resolve(result);
                });
            });
        })
        .then((data) => {
            return { data };
        })
        .then((data) => {
            console.log(data);
        });


    // fs.readFile('e9/command.txt', 'utf8', (err, command) => {
    //     fs.readFile(`e9/${command}`, 'utf8', (err, result) => {
    //         console.log(result);
    //     });
    // });

})();

