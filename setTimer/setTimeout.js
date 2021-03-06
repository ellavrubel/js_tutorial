'use strict';

 // timer - позволяет вызвать функцию с задержкой (интервалом)

// существует 2 таймера в js:
                              // setTimeout - выполняет функцию через определенный промежуток времени
                              // setInterval - выполняет функцию множество раз через заданный промежуток времени

// setTimeout синтаксис

// const timerID = setTimeout(func/code, delay[, arg1, arg1....]);
// console.log (typeof timerId); // number
// console.log (timerId) // всегда произвольное число, служит для того, чтобы таймер можно было остановить

// пример

const timerId = setTimeout(function () {
  console.log(1);
}, 1000);   // выведет в консоль 1 не ранее, чем через 1 сек   точное кол-во времени зависит от ПК пользователя, т.е. для установления точного                                                                времени запуска функции метод не подходит

// setTimeout() может принимать неограниченное количество аргументов, но все аргументы после 2-го попадают в аргументы функции

// отмена setTimeout()

clearTimeout(timerId); // если таймер не успел выполнится, он будет отменен и больше выполнен не будет



// рекурсивный setTimeout используется для более гибкой настройки повторения функции, например задавая каждый раз разное число задержки

let counter = 1;

let delay = setTimeout(function timer() {
  console.log('Get request', counter);

  if(counter === 3){

    return;
  }

  delay = setTimeout(timer, 1000);
  counter ++;

}, 1000)    // Get request 1
            // Get request 2
            // Get request 3

//
// дефолтная задержка - 4мс, т.е. указав 0, все равно будет минимум 4мс