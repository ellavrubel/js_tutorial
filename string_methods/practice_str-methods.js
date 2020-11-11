'use strict';

//

const text = 'Hello, Dolly!';
const textLength = text.length;
console.log(textLength);         // 13
// можно не сохранять в переменную и просто к строке с текстом применять свойство length, но это нежелательно, т.к. переменную можно переназначить, а строку нет
  console.log('My name is....'.length);   // 14

//

// доступ к буквам через [] = методу charAt() - его использовать предпочтительней, т.к. это строковый нативный метод

const x = 'Abracadabrar';
console.log(x[5]);       // a

// последний символ строки

const lastIndex = x.length -1;
console.log(x[lastIndex]);   // r

// строка иммутабельна, т.е. ее изначальное состояние не изменяется, в результате мутаций появляются новые строки

//

const str = 'Вы можете указывать сколько угодно';
const index = str.indexOf('h');

if (index >= 0){
  console.log('exists');
} else {
  console.log('does not exists'); // -1 - h не существует, поэтому  // does not exists

}

//

const book = 'Advanture';
const ind = book.slice(- book.indexOf('t'));  // -5
console.log(ind);  // nture

// trim()

const spacedText = '    string-tring   ';
const cutedText = spacedText.trim();

console.log(spacedText.length); // 19
console.log(cutedText);         // string-tring
console.log(spacedText.trimEnd());  //     string-tring
console.log(spacedText.trimStart())  // string-tring

// проверка на наличие символов в строке

const stringToValidate = ' ';

if(stringToValidate.trim()){
  console.log('valid');
} else {
  console.log('invalid'); // invalid

}

// includes()

const day = 'Friday';
console.log(day.includes('day', 1)); //true

// bad practice

console.log(day.indexOf('ri') >= 0);  // true

// good practice

console.log(day.includes('ri'));  // true

//







