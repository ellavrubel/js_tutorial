'use strict';


// синтаксис аналогичен setTimeout, но работать будет бесконечно до тех пор пока его не остановим

const timerId = setInterval(function () {

  console.log(1);
}, 5000);    // будет выводиться 1 через каждые 5 сек

// отменить setInterval можно также при помощи функции clearTimeout(), в коде это допускается и отмена произойдет, но семантически это НЕПРАВИЛЬНО

// правильно отменять через clearInterval()

clearInterval(timerId);
