'use strict';

// синхронный код

// пример использования try/catch и func()

const func = () => {
//  code
  throw new Error('invalid function');
}

// в try/catch оборачивается вызов функции

try{
 func();
} catch (e) {
  console.log(e);  // Error: invalid function
}


// обработка ошибок, допущенных в самом блока catch при помощи обертки try/catch  в еще один try/catch

const sum = (a, b) => {
  // вернуть сумму;
  throw new Error('sum problem');
};

const errorHandle = error => {
  // записать ошибку в лог
  throw new Error('handle error')
}
    try {

      try {
        sum();
      } catch (e) {
        // console.log(e);
        errorHandle();
      }

    } catch (error) {
        console.log(error);
    }



//

try{
  const error = new Error('Some problem')

  // default name - Error
  error.name = 'ValidationError';    //  в имени обязательно дописывать Error

  throw error;
} catch (e) {

  console.log(e.name);  // ValidationError
}

// варианты записи

try{

  // вариант 1
  // throw new Error('We have some issues.')

  //  вариант 2 не рекомендуется

  // const err = new Error();
  // err.message = 'We have some issues.'

  // throw err;

//  вариант 3 'на лету'

  const userName = 'Ella';
  throw new Error(`User ${userName} is not found.`)


} catch (e) {
  console.log(e.message);
}