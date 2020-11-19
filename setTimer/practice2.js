'use strict';

// выполнение setTimeout() всегда браузером будет запланировано в послед очередь, несмотря на, например, нулевой таймер

// console.log(1);
//
// setTimeout(function () {
//   console.log(2);
// }, 0);
//
// console.log(3);
//
// // result always will be       1
//                             // 3
//                             // 2
//
// // recursive setTimeout() - example
//
// let second = setTimeout(function tick() {
//   console.log(1);
//
//   second = setTimeout(tick, 5000); // код повторяется пока не будет принудительно остановлен
//
// }, 1000);

//

let count = 0;

let x = setTimeout(function step() {

  if (count < 3){
    console.log(count);
    x = setTimeout(step, 2000);
  } else {
    clearTimeout(x);
  }

  count++;

}, 1000);   // 0, 1, 2

//

