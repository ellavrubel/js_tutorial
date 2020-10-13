let username;
username = 'freelance';
console.log(typeof username);

// операто сложения,  если хоть один операнд строка, результат - строка

let resultsOne = 1 + '1';
console.log(resultsOne);
console.log(typeof resultsOne);


let resultsTwo = 40 - 20 + 'Ella';
console.log(resultsTwo);
console.log(typeof resultsTwo);
//

// + может использоваться с одинарным операндом, выполняет роль преобразователя в число

let a = +"3";
console.log(a);
console.log(typeof a);

let d = + 23;
console.log(d);
console.log(typeof d);

let test = '34';
let test2 = '45';
console.log(test + test2);

console.log(+test + +test2);

// длинная запись преобразования в числло
console.log(Number(test) + Number(test2));
//

//

// остальные математические операторы - результат всегда число

let divide = "35" - 10;
console.log(divide);
console.log(typeof divide);

let der = "600" - 20;
console.log(der);
console.log(typeof der);

let ella = "six hundred" - 100;
console.log(ella);
console.log(typeof ella);


//        присвоение

let summ = summ2 = summ3 = 1 + 2;
console.log(summ, summ2, summ3);

// сокращенная запись прибавления и присвоения

let users = 8;
users = users + 4;

console.log(users);

users = users * 8;
console.log(users);

// сокращенно

let users2 = 8;
console.log( users2);

users2 += 4;
console.log(users2);

users2 *= 8;
console.log(users2);


// инкремент ++ - увеличивает на 1

let h = 6;
h++;
console.log(h);


// декремент -- - уменьшает на 1

let g = 100;
g --;
console.log(g);

// располагаются как до так и после переменной

++g;     // префиксная форма

let rew = 0;
let newRew  = rew++;
console.log(newRew);



h--;    // постфиксная форма

let ytr = 0;
let newYtr = ++ytr;
console.log(newYtr);


// Оператор запятая. Предоставляет возможность вычислять несколько выражений, разделяя их запятой. Каждое выражение выполняется, но результат возвращается только последнего.

let dsw = (34 + 4, 56 + 4);
console.log(dsw);

// операторы сравнения  возвращают булевый значения - true/false

console.log(2 < 5);
console.log( 2 > 6);
console.log(45 === 23);
console.log(9 !==4);

let res = 4 ===5;
console.log(res);

// сравнение строк

// алфавитный порядок, больше тот, кто дальше

console.log('A' > 'B');
console.log('Скрипт' > 'Скрипка');

// регистр нижний > верхнего

let tre = 'Ella' < 'ella';
console.log(tre);

// сравнение разных типов данных

// преобразование в числа

let num = '34' > 10;
console.log(num);
console.log(typeof num);

console.log("007" == 7); // == - приводит строку к числу, а === - проверяет равенство без приведения типов.


console.log(null === undefined);

console.log(null == undefined); // равны только друг другу и больше ничему - спец правило языка



// оператор ИЛИ || 1. вычисляет операнды слева направо, 2. Каждый операнд конвертирует в логическое значение. Если true, останавливается и возвращает исходное значение этого операнда. 3. Если все операнды false, возвращает значение последнего из них.

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// пример

let userName2 = '';
let userNickName = 'freelancer';

let user3 = userName2 || userNickName || 'no name at all';
console.log(user3);

//

let admins = 0;
let fox = 5;

admins > fox || fox++;
console.log(fox);

// или

let admins2 = 10;
let fox2 = 5;

admins2 > fox2 || fox2++;
console.log(fox2);


//

// оператор и && - возвращает true только если оба операнда истинны. Если доходит до операнда (false) процесс останавливается и возвращается первоначальное значение операнда -false. Приоритет И больше ИЛИ!

console.log(1 && 0 || 3 && 7);


console.log('Freelancer' && 0 && 2 && 4);
console.log(1 && 2 && null && 3);
console.log( '13' && '3');

let us = 1;

(us > 0) && console.log(`Number of users ${us}`);


// оператор НЕ ! Имеет наивысший приоритет, выполняется первым. Два !! преобразуют данные в Boolean тип

console.log(!true && 58 || 15 && !1);

console.log(!!'Freelancer');


// оператор сравнения с null - ?? Возвращает первый операнд, если он не null и не undefined, иначе - второй

let name = 0;

console.log(name ?? 'no name');