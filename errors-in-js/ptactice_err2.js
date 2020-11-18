'use strict';

// работа с message в catch блоке

// try{
//
//   throw new Error('Important!');
// } catch (err) {
//
//   // аргумент err - экземпляр Error
//
//   if(err.message === 'Important!'){
//
//     throw err; // проброска ошибки дальше для обработки далее в более глобальном try/catch
//   }
// }

// оборачивать код в try/catch  хорошая практика, дает стабильно работающий код

// function notifier (status, message) {
//   if(status === 'warning'){
//
//     throw new Error('warning');
//   } else if (status === 'inform'){
//
//     console.log(message);  // ok!
//   }
// }
//
// try{
//   // notifier('warning', 'smth went wrong');
//   notifier('inform', 'ok!');
// } catch (e) {
//   console.log(`Attention: ${e.message}!`);  // Attention: warning!
//
//   if (e.message === 'inform'){
//
//     throw e;   // ошибка идет дальше
//   }
// }

// отработка кода 62 стр

// function notifier (status, message) {
//   if(status === 'warning'){
//
//     throw new Error('inform');
//   } else if (status === 'inform'){
//
//     console.log(message);  // ok!
//   }
// }
//
// try{
//   notifier('warning', 'error goes further');
// } catch (e) {
//   console.log(`Attention: ${e.message}!`);  // Attention: warning!
//
//   if (e.message === 'inform'){
//
//     throw e;   // ошибка идет дальше
//   }
// }

//

// try/catch/finally

console.log('before try');

try{
  console.log('try begins');

  throw new Error('warning!')  // если ошибка сгенерирована не будет - catch block  пропускается
                                            // before try
                                            // try begins
                                            // we are in finally
                                            // try.catch.finally finished

} catch (e) {

  console.log('we are now in the catch block');
  
  console.log(e.message);
} finally {

  // опциональный блок, можно пропустить написание finally и под try/catch  писать код, но указание этого слова семантически его относит к блоку try/catch

  console.log('we are in finally');
}

console.log('try.catch.finally finished');

// before try
// try begins
// we are now in the catch block
// warning!
//  we are in finally
// try.catch.finally finished


//
// пример использования try/catch/finally  как единый блок

try{
//  включить спиннер
//  выполнить запрос на сервер
} catch(e){
//  отловили и обработали ошибку
} finally{
//  отключение спиннера
}

//