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


