'use strict';

// try/catch не ловит ошибки асинхронной функции, когда он снаружи функции, он обязательно должен быть внутри

const asyncTest = function () {

  try{
    const t = custom(1);
  } catch (e) {
    console.log(e.message);  // custom is not defined
  }

  try {
    const s = custom(3, 5);
  } catch (e) {
    console.log(e.message);   // custom is not defined
  }

  console.log(t);
  console.log(s);
}

setTimeout(function () {

  try {
    asyncTest();

  } catch (e) {
    console.log(e.message);  // t is not defined
  }
}, 1000);

