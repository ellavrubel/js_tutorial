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

// replace()

const justText = 'By default, the replace() method replaces only the first match.';
const newText = justText.replace('method', 'свойство');
console.log(newText);   // By default, the replace() свойство replaces only the first match.
console.log(justText.replace(' ', '-'));  // By-default, the replace() method replaces only the first match.

// правильно сначала вызывать trim() и далее replace()
console.log(justText.trim().replace(' ', ''));  // Bydefault, the replace() method replaces only the first match.

// для замены всех нужных символов строки
console.log(justText.replace(/ /g, '*')); // By*default,*the*replace()*method*replaces*only*the*first*match.


// concat()

const planeText = 'the replace() method';
const concatText = 'replaces only the first match';
console.log(planeText.concat(' ', concatText ));  // the replace() method replaces only the first match

//

// split() - превращает строку в массив, в аргумент передается символ разделения элементов массива, если его нет - вся строка на индекс 0

const stringToArray = 'If the separator is "", the returned array will be an array of single characters.';

console.log(stringToArray.split(' ')); // [ 'If',  'the',  'separator',  'is',  '"",',  'the',  'returned',  'array',  'will',  'be',  'an',                                                  'array',   'of',   'single',  'characters.' ]

const s = 'Olga';
console.log(s.split('|')); // [ 'Olga' ]

//


// repeat()

const indent = ' '.repeat(4);

let indentLevel = 1;

const newIndent = indent.repeat(++indentLevel);
const someIndent = indent.repeat(++ indentLevel);


console.log(indent + 'firstLevel');
console.log(newIndent + 'secondLevel');
console.log(someIndent + 'thirdLevel');

//

// ES6 динамическая запись строки через `` - шаблонная строка template string

const name = null;

const myName = `Hello, ${name}`;

// можно писать в них тернарный оператор

const operator = `Hello, ${name ? name : 'Guest'}!`;
console.log(operator);

//

// символы, кот не входят в базовую языковую плоскость, длина строки у них - 2

const chinese = '𩷶';

// ES5
console.log(chinese.length); // 2

console.log(chinese.charAt(0)); // �
console.log(chinese.charAt(1)); // �


// ES6

console.log(chinese.charCodeAt(0)); // 55399
console.log(chinese.charCodeAt(1)); // 56822
// проверка является ли строка длиной в 1 символ

console.log(/^.$/.test(chinese)); // false

//

// normalize() используется в работе со спец символами, кот состоят из более чем одного

console.log('S\u0307\u0323');  // Ṩ
console.log('S\u0323\u0307');  // Ṩ

console.log('S\u0307\u0323' === 'S\u0323\u0307'); // false
console.log('S\u0307\u0323'.normalize() === 'S\u0323\u0307'.normalize()); // true

//

// match() ищет соответствие регулярному выражению и вовращает массив

const web = 'Good morning, Web-Developer!';

const regex = /[A-Z]/g; // g означает глобальный поиск, ищет все возможные совпадения, когда g нет - в результат выдаст только первое совпадение
const notGRegex = /[A-Z]/;
const smallRegex = /[a-z]g/;

const match = web.match(regex);
const smallMatch = web.match(smallRegex);
const notG = web.match(notGRegex);
const oneLetter = /o/g;

console.log(match); // [ 'G', 'W', 'D' ]
console.log(smallMatch);
console.log(notG);     // [ 'G', index: 0, input: 'Good morning, Web-Developer!', groups: undefined ]
console.log(web.match(oneLetter)); // [ 'o', 'o', 'o', 'o' ]

//

























