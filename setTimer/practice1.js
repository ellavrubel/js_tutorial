'use strict';

// вынесение setTimeout за пределы функции

const callback = function () {
  console.log('Hey!');
}

setTimeout(callback, 5000);

// аргументы, попадающие в аргументы переданной функции

const sum = function (a, b) {
  console.log(a + b);
}

setTimeout(sum, 3000, 34, 67); // 34 и 67 попадают в a/b   // 101

// пример того, что возвращается произвольное число - в браузере, т.к. в Node.js  возвращается объект
                                                                                                    // Timeout {
                                                                                                    //   _called: false,
                                                                                                    //   _idleTimeout: 2000,
                                                                                                    //   _idlePrev: [TimersList],
                                                                                                    //   _idleNext: [TimersList],
                                                                                                    //   _idleStart: 534,
                                                                                                    //   _onTimeout: [Function: test],
                                                                                                    //   _timerArgs: [Array],
                                                                                                    //   _repeat: null,
                                                                                                    //   _destroyed: false,
                                                                                                    //   [Symbol(unrefed)]: false,
                                                                                                    //   [Symbol(asyncId)]: 9,
                                                                                                    //   [Symbol(triggerId)]: 1 }

const test = function (string) {
  console.log(string);
}

const anyNumber = setTimeout(test, 2000, 'Hello!');

console.log(anyNumber);  // 7 // 6...
clearTimeout(anyNumber);

//

// setInterval()

const interval = function (str) {
  console.log(str);
}

let int = setInterval(interval, 3000, 'Ella'); // будет выполняться до бесконечности пока не прервут чтобы иметь возможность применить clearInterval() setInterval() должен быть присвоен переменной

clearInterval(int); // должно быть прописано условие (нажатие кнопки, наступление css события), чтобы сработал clearInterval()

// или clearInterval() может быть помещено в функцию setInterval()

const textToShow = function (string) {
  console.log(string);
}

const timer = setInterval(textToShow, 1000, 'Master!');

setInterval(function () {

  clearInterval(timer);

}, 3000); // за 3 сек 2 раза вывелось слово Master!