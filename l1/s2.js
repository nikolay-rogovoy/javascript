"use strict"

/***/
function typeConverter() {
    console.log('typeConverter: ', 10 + ' objects') // '10 objects'. Чис­ло 10 пре­об­ра­зу­ет­ся в стро­ку
    console.log('typeConverter: ', '7' * '4') // 28: обе стро­ки пре­об­ра­зу­ют­ся в чис­ла
    let n = 1 - 'x'; // NaN: стро­ка 'x' не мо­жет быть пре­об­ра­зо­ва­на в чис­ло
    console.log('typeConverter: ', n);
    console.log('typeConverter: ', n + ' objects') // 'NaN objects': NaN пре­об­ра­зу­ет­ся в стро­ку 'NaN'

    // Преобразование типов и равенство
    null == undefined // Эти два зна­че­ния счи­та­ют­ся рав­ны­ми
    '0' == 0 // Стро­ка пре­об­ра­зу­ет­ся в чис­ло.
    0 == false // Ло­гич. зна­че­ние пре­об­ра­зу­ет­ся в чис­ло
    '0' == false // Оба опе­ран­да пре­об­ра­зу­ют­ся в чис­ла

    // Явные преобразования
    Number('3')	// 3
    String(false) // 'false' или мож­но ис­поль­зо­вать false.toString()
    Boolean([]) // true
    Object(3) // new Number(3)

    // Конвертации операторами
    let x = 'x';
    x + '' // То же, что и String(x)
        + x // То же, что и Number(x). Мож­но так­же встре­тить x-0
    !!x // То же, что и Boolean(x). Об­ра­ти­те вни­ма­ние на два зна­ка !

    let nn = 17;
    let binary_string = nn.toString(2); // Вер­нет '10001'
    let octal_string = '0' + nn.toString(8); // Вер­нет '021'
    let hex_string = '0x' + nn.toString(16); // Вер­нет '0x11'
    console.log('typeConverter: ', binary_string, octal_string, hex_string);

    n = 123456.789;
    n.toFixed(0);		// '123457'
    n.toFixed(2);		// '123456.79'
    n.toFixed(5);		// '123456.78900'
    n.toExponential(1);	// '1.2e+5'
    n.toExponential(3);	// '1.235e+5'
    n.toPrecision(4);	// '1.235e+5”
    n.toPrecision(7);	// “123456.8'
    n.toPrecision(10);	// '123456.7890'
}

typeConverter();

/***/
function parseNumber() {
    console.log('parseNumber: ', parseInt('3 blind mice')); //3
    console.log('parseNumber: ', parseFloat(' 3.14 meters')); //3.14
    console.log('parseNumber: ', parseInt('-12.34')); //-12
    console.log('parseNumber: ', parseInt('0xFF')); //255
    console.log('parseNumber: ', parseInt('0xff')); //255
    console.log('parseNumber: ', parseInt('-0XFF')); //-255
    console.log('parseNumber: ', parseFloat('.1')); //0.1
    console.log('parseNumber: ', parseInt('0.1')); //0
    console.log('parseNumber: ', parseInt('.1')); //NaN: це­лые чис­ла не мо­гут на­чи­нать­ся с '.'
    console.log('parseNumber: ', parseFloat('$72.47')); //NaN: чис­ла не мо­гут на­чи­нать­ся с '$'
}

parseNumber();
