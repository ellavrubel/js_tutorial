// операторы if/else

let message = 'Hello, World!';

if (5 > 35) {

    //код выполеяется только если выражение в круг скобках вернет true

    console.log(message);

}


//    в качетве операндов могут быть переменные


let message2 = 'Hello, World!';

let first = 30;
let second = 50;

if (first < second) {

    //код выполеяется только если выражение в круг скобках вернет true

    console.log(message2);
}

//    выражение в круг скобках преобразовывает данные в булевые

let media = 'New var';

if (''){  // возвращает false
    console.log(media);
}

if (' '){
    console.log(media);
}

//    когда нужно выполнить только одну инструкцию, можно писать сокращенно:

if (2 > 1) console.log(media);


// необязательный блоки(используются при необходимости)- else/ else-if

let masha = 'This is it.';
let num = 30;

if (num < 10){

    console.log(masha);

} else if (num < 20){

    console.log('no, it is grater');

} else if (num < 24){

    console.log('no');

} else if (num < 50){

    console.log('it is less than 50');

} else {
    console.log('conditions do not fit');

}

//    условный оператор ?

//    классическое if ветвление

let option = 'Good day,';



// let optionAdd;
//
// if (4 > 8) {
//
//     optionAdd = ' Vasya!';
//
// } else {
//
//     optionAdd = ' Olga!';
// }

//    перезаписываем кратко, при помощи ? :

let optionAdd = (4 > 6) ? ' Olga!' : ' Nata!';




option += optionAdd;
console.log(option);

//  ? - тернарный оператор, с его помошью можно записывать и более сложные условные записи

let mos = "Hello,";

let mosAdd;

if (3 < 9){
    mosAdd = ' Olga';

} else if (85 < 48){
    mosAdd = ' Ella';

} else if (67 < 5){
    mosAdd = ' Jade';

} else {
    mosAdd = 'Jane';
}


mosAdd = 3 > 1 ? ' Jade' :
    7 > 20 ? ' Jane' :
        3 === 0 ? ' Olga' :
            6 > 7 ? ' Jytr' : ' Nata';



mos += mosAdd;
console.log(mos);


let nytr = (92 > '11' && 58 < 100) ? 'True' : 'False';
console.log(nytr);

if (0) {
    console.log('false');
} else if (' '){
    console.log('true');
}
