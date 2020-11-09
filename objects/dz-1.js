'use strict';


                      // Задача 1
                      // Создайте объект staff c трёмя свойствами свойствами:
                      //   1. payroll — зарплата сотрудника;
                      // 2. advance — аванс сотрудника;
                      // 3. salary — зарплата сотрудника;

                      // Обратите внимание!

                      //   1. При записи свойства payroll необходимо выполнить проверку что передаваемое
                      // значение является числом.
                      // 2. При записи свойства payroll необходимо выполнить проверку что передаваемое
                      // значение больше нуля.
                      // 3. Если проверка свойства payroll завершилась неудачей, в payroll устанавливается 0 и в
                      // коносль выводится сообщение о том что было передано не валидное значение
                      // payroll.


                      // 4. При чтении свойства advance должно возвращаться число со значение 30% от payroll.
                      // 5. При чтении свойства salary должно возвращаться число со значение 70% от payroll.

  const stuff = {

    get advanceSum (){

      return this._payroll / 100 * 30;
    },

    get salarySum (){

      return this._payroll / 100 * 70;
    },

    get payRoll(){
      return this._payroll;
    },

    set payroll(value){


        if(typeof value !== 'number' || value <= 0){

          this._payroll = 0;
          console.log(`Invalid value handed over! It should be a number, more than zero.`);
        }

          this._payroll = value;
      }
  };

  stuff.payroll = 100;

  console.log(stuff.salarySum);
  console.log(stuff.advanceSum);
  console.log(stuff.payRoll);





