'use strict';

// split() -метод строки, возвращающий массив

const text = 'Next, time I will, actually, try it myself.';
const arr = text.split(',', 3);   // [ 'Next', ' time I will', ' actually' ]

for (let i = 0; i < arr.length; i++){

  console.log(`word: ${arr[i]}`);

  // word: Next
  // word:  time I will
  // word:  actually
}

const name = 'Ella';

const arr2 = name.split('');

console.log(arr2);  // [ 'E', 'l', 'l', 'a' ]  - может потребоваться сделать reverse(), но к строке он не применим, надо сначала создать массив

console.log(arr2.reverse().join('').toUpperCase()); // ALLE


// при приплюсовывании массива к строке, под капотом вызывается метод toString() и на выходе получается строка

// reduce() - сворачивает массив до одного значения, массив НЕ МУТИРУЕТ

const arrayToReduce = [1, 2, 3, 4];
const result = arrayToReduce.reduce((sum, current)=> {   // sum - переменная в кот аккумулируется результат функции, current -                                                                                                                                  элемент массива

  return sum + current;
}, 0);   // 0 - второй аргумент reduce(), первоначальное значение sum

  console.log(arrayToReduce);  // [ 1, 2, 3, 4 ]
console.log(result);           // 10

// reduceRight() - сворачивает массив с конца

const str = ['s', 't', 'r'];
const strReduced = str.reduceRight((sum, current)=> {

  return sum + current;
}, '');
console.log(strReduced);  // rts


// работа с концом массива
// pop() - МУТИРУЕТ МАССИВ, извлекает один элемент с конца массива и его возвращает, не принимает никаких аргументов

const test = ['er', 5, 'Ol', 'news'];
const word = test.pop();

console.log(test);             // [ 'er', 5, 'Ol' ]
console.log(word);             //  news

// push() - добавляет элемент в конец массива

// работа с началом массива

// unshift() - добавляет в начало элемент     shift() - убирает






