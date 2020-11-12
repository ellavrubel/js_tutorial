'use strict'

// свойство у строки одно - length

const text = 'I am Ella!'
const x = text.length
console.log(x) // 10

// charAt() - получение символов по индексу

const name = 'Rick'
console.log(name.charAt(0)) // R
console.log(name.charAt(3))   // k
console.log(name.charAt(10))  // несуществующий символ, выдает пустую строку
console.log(name[2]) // можно использовать также квадратные скобки и обращаться к строке как к массиву

// toLowerCase()

const t = 'GbhjYkbds';
console.log(t.toLowerCase()); // gbhjykbds

//  toUpperCase()

const dasa = 'bGkjhYuuEE';
console.log(dasa.toUpperCase()); // BGKJHYUUEE

// toLocalLowerCase()/ toLocalUpperCase() - в качестве аргумента передается локаль - местный язык, учитывается особенность переданного языка


//

//  indexOf() - поиск индекса по букве, выдаст первое совпадение

const fir = 'Hey Mary, I am here!';
console.log(fir.indexOf('m')); // чуствительность к регистру  // 13

// также, дает позицию начала ,с кот надо искать строку, вторым параметром может выступать место, с кот начинается искомая строка
console.log(fir.indexOf('I am')); // 10
console.log(fir.indexOf('I am', 4) !== -1);  // Отдаёт -1, если поисковая строка не найдена.  true - т.к с 4 символа можно найти искомую строку

// lastIndexOf() - индекс когда последний раз встречается буква/строка

const youTT = 'Are you going to?';
console.log(youTT.lastIndexOf('g')); // 12
console.log(youTT.lastIndexOf('Nina')); // -1      //Отдаёт -1, если поисковая строка не найдена

//

// search() отличается от IndexOf(): search() не принимает второй аргумент (позиция начала отсчета); IndexOf() - не принимает регулярные выражения


// substring() вырезает кусок строки в зависимости от позиций (переданных аргументов), саму строку не меняет - создает новую

const str = 'The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.';
const res = str.substring(4, 30);
console.log(res); //  substring() method extract // первый индекс включен, последний - нет

// если стартовый индекс больше второго, индексы меняются местами
console.log(str.substring(30, 4)); // substring() method extract

//если нет второго индекса, отрезается вся строка от первого аргумента и до конца
console.log(str.substring(30));  // s the characters from a string, between two specified indices, and returns the new sub string.

// если значения аргументов отрицательные - считается, что они равны 0

console.log(str.substring(-5)); // The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

//

// slice()  отрицательные аргументы - будет искать место старта с конца строки

const sliceStr = 'То начальный индекс будет считаться с конца и второй параметр тоже должен быть отрицательным, всегда ведя отсчет с конца.';
const d = sliceStr.slice(-40, -4); // если первый аргумент будет меньше второго - замена не произойдет - выдаст пустую строку
console.log(d); // рицательным, всегда ведя отсчет с ко

//

// substr() - отличие от slice()  второй аргумент размер длины, на кот надо отрезать, принимает отрицательные аргументы, отсчитывает с конца

const sub = 'Submissive';
console.log(sub.substr(3, 4)); // miss
console.log(sub.substr(-6, sub.length -1)); // issive

//

// charCodeAt() отдает код символа под индексом, если символа под индексом нет или индекс отрицательный - NaN

const anonim = 'Decentralizing.';
const code = anonim.charCodeAt(5);
console.log(code); // t - 116
// получить символ с конца можно при комбинировании charCodeAt() c length
console.log(anonim.charCodeAt(anonim.length-4)); // i - 105

// часто используется при написании кроссбраузерного js, например при проверке что было нажАто кнопкой Esc - нужно взять код кнопки Esc и сравнить с тем, что было вызвано

//

// обратный метод fromCharCodeAt() по юникод-номеру выдает букву

const uni = String.fromCharCode(40); // синтаксис всегда такой, метод статический
console.log(uni); // (
const uni2 = String.fromCharCode(110);
console.log(uni2); // n

//













