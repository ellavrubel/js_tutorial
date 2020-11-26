'use strict';

                      // Напишите функцию timer которая будет принимать в качестве аргументов:
                      // 1. Первый параметр — число которое будет служить тайм-аутом в секундах для таймера
                      // или интервала.
                      // 2. Второй параметр — булевый, если true мы запускаем timeout, если false — запускаем
                      // interval.
                      // 3. Третий параметр опциональный. Третий параметр может передаваться только если
                      // второй параметр имеет значение false. Третий параметр указывает через сколько
                      // секунд нужно остановить интервал.

                        // В качестве данных выводимых таймером или таймаутом взять текущую дату.


                      // Обратите внимание!
                      // 1. Необходимо генерировать ошибку если первый параметр не число.
                      // 2. Необходимо генерировать ошибку если второй параметр не булевый.
                      // 3. Если передан 3-й аргумент и он не число необходимо генерировать ошибку.
                      // 5. Если вторым аргументом было передано значение true и при этом был передан 3-й
                      // аргумент — необходимо генерировать ошибку.




function timer (x, boolean, y) {

  if (typeof x !== 'number'){
    throw new Error(`'x' must be a number of seconds!`);
  }
  if (typeof boolean !== 'boolean'){
    throw new Error(`please, put here something that is true or false`);
  }
  if (typeof y !== 'number'){
    throw new Error(`'y' must be a number of seconds!`);
  }
  if (boolean === true){
    throw new Error(`when 'boolean' is true, there mustn't be an 'y'!`);
  }

  let timerDate = setTimeout(() => console.log(new Date()), x);

  let timerInterval = setInterval(() => {
    let stopInterval = 0;
    stopInterval++;

    console.log(new Date());

    if(stopInterval > y){
      clearInterval(timerInterval);
    }

  }, x);

  if (boolean === true){
    return timerDate;
  } else {
    return timerInterval;
  }

}

timer(3000, false, 5000);

