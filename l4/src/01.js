function sayHi() {
    alert("Hello");
}

// глобальные функции доступны как методы глобального объекта:
window.sayHi();



alert(window.innerHeight); // внутренняя высота окна браузера






// заменим цвет фона на красный,
document.body.style.background = "red";

// а через секунду вернём как было
setTimeout(() => document.body.style.background = "", 1000);










// DOM Living Standard
// https://dom.spec.whatwg.org/



alert(location.href); // показывает текущий URL
if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}



// BOM
// https://html.spec.whatwg.org/




document.body.style.background = 'red'; // сделать фон красным
setTimeout(() => document.body.style.background = '', 3000); // вернуть назад



