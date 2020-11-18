'use strict';

// порядок выполнения блоков finally-return

function func (a, b) {

  try {
    return a + b;
  } finally {
    console.log('Finally block goes before return!')
  }
}

console.log(func(3, 5));
console.log('Just text.');

// Finally block goes before return!
// 8
// Just text.

// примеры

function print (result) {
  if(result){
    console.log(result);
  } else {

    throw new Error('Give me the argument!');
  }
}

function func2 (a, b) {  // 9

  if (typeof a !== 'number'){

    throw new Error(`'a' should be a number!`);
  }
  if (typeof b !== 'number'){

    throw new Error(`'b' should be a number!`);
  }

  const sum = a + b;

  try{
    print(sum);   // 9
  } catch (e) {
    console.log(e.message);
  }
}

function multiply (a, b) {
  const result = a * b;

  try{
    print();  // ошибка, т.к. нужен один аргумент
  } catch (e) {
    console.log(e.message);
  }
}


func2(3, 6);

try{
  // func2(3, 6);  отрабатывет правильно
  // 9
  // 9
  // The End.

  multiply();  // генерирует ошибку
//  9
// Give me the argument!
// The End.



} catch (e){
  try{
    sendEmail('tutu@tutu.ru', e.message);
  } catch (err) {
    try{
      sendSms('+56', e.message);
    } catch (error){
      console.log('Try to order with some other option of delivery.')
    }
  }
}

console.log('The End.');

