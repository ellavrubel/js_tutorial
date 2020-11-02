

//  recursion - функция вызывает сама себя

    function factorial (x) {

  if (x < 0) {

    return;     //  TERMINATION
  }

  if (x === 0) {

    return 1;   // BASE
  }

  return x * factorial( x -1 );   // RECURSION

    }

    const result = factorial(3);
    console.log(result);     // 6

//