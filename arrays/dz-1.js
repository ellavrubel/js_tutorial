'use strict';

                // 1. Напишите функцию reverse которая будет принимать в качестве аргумента строку и
                // возвращать перевернётую строку.

                // Обратите внимание!
                // 1. Использовать циклы запрещено.


const text = `Reverse method will change the original array.`;

const reverseText = (string) => {

  let str = Array.from(string);

  return str.reverse().join('');
}

console.log(reverseText(text));  // .yarra lanigiro eht egnahc lliw dohtem esreveR
