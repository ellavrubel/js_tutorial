'use strict';


let a = 7;

// setTimeout(() => {
//
//   a =100;
//   // console.log(a); все писать в функцию нельзя, поэтому нужен инструмент, кот дождется новое значение и выведет его, этот инструмент - Promise
//
// }, 2000);

console.log(a);

const myPromise = new Promise((resolve,reject) => {

  setTimeout(() => {
    resolve(a = 100);  // resolve - функция, кот будет выполнена, когда весь код (16-18 стр) завершится удачно, т.е. через 2 сек а = 100
  }, 2000);

});

myPromise.then(function () {   // функция - обработчик

  console.log(a);

});


