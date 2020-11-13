'use strict';


//  замена каждой первой буквы на заглавную

const paragraph = `hello, ella, how are you?`;
let capitalized = '';

const splitted = paragraph.split(' '); // ["hello,", "ella,", "how", "are", "you?"]

const transform2 = str => str.replace(/^\w/, chr => chr.toUpperCase());

for (let i = 0; i < splitted.length; i++) {
  const str = splitted[i];

  if (capitalized) {
    capitalized += ' ';
    capitalized += transform2(str);
  } else {
    capitalized += transform2(str);
  }
}
 
console.log(capitalized);  // Hello, Ella, How Are You?





// замена первой буквы на заглавную
const sentence = `let's go dancing!`

// ES6
const transform = str => str.replace(/^\w/, chr => chr.toUpperCase()); // replace() может принимать вторым параметром функцию
console.log(transform(sentence)); // Let's go dancing!

// ES5

function change (str) {
  function upper (chr) {

    return chr.toUpperCase();
  }

  return str.replace(/^\w/, upper);
}
console.log(change(sentence)); // Let's go dancing!




