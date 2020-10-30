
// ES5 дефолтные аргументы записываются через валидатор иначе везде подставляется дефолтное значение

 function f(n) {

    n = typeof n !== 'undefined' ? n : 10;

    console.log(n);
 }

 f(0);  // 0
 f();   // 10
 f(null); // null


// ES6 дефолтные аргументы записываются через =

    function f1(n=10) {

        console.log(n)
    }

    f1(1);  // 1
    f1(0);  // 0
    f1(null);  // null
    f1('');  //
    f1();    // 10
    f1(undefined); // 10
    f1(void 0);    // 10

// дефолтные аргументы не попадают в arguments

    function f2(a, b = 10) {

        console.log(arguments)
    }

    f2(4, 7); // {0: 4, 1: 7}
    f2 (2);   // {0: 2}

// вычисление дефолтного значения на основании других параметров

    function f3(a, b = a * 2) {

        console.log(`${a}, ${b}`);
    }

    f3(3, 5); // 3, 5
    f3(3);    // 3, 6

// ошибочное определение параметров

    function f4( a = b, b = 1) {

        console.log(`${a}, ${b}`);
    }

    f4(); // ReferenceError: b is not defined


// правильное определение параметров

    function f5( b = 1, a = b, ) {

        console.log(`${a}, ${b}`);
    }

    f5(); // 1, 1

// в ES6 при вычислении параметров можно также использовать внешние переменные и функции

       const getMultiplier = n => {
           return n * 2;
       };

       function f6(a, b = a * getMultiplier(4)) {

           console.log(`${a},${b}`);
       }

       f6(5); // 5, 40






















