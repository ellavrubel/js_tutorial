'use strict';

                  // 1. Cоздать объект person.

                  //   Обратите внимание!

                  //   1. Объект person должен иметь свойство name.
                  // 2. Cвоство name должно быть не меньше 3 символов.

                  // 3. Свойство roles которое является массивом в котором перечислены роли сотрудника.
                  //   Например — Developer, Project Manager.
                  // 6. Если массив roles пустой, должна вернуться строка — Сотруднику John Doe не
                  // // назначены роли.

                  // 4. Объект person должен иметь метод toString кторый будет возвращать строку —
                  // Сотрудник John Doe занимает следующие позиции в компании: Developer, Project
                  // Manager.
                  // 5. Строка которая возвращается при вызове методы toString должна брать данные по
                  // имени и занимаемым позициям из полей person и roles.
                  //

                  // 7. Объект person должен быть родителем для объекта staff.


  const person = {


    set name (value){
      if(typeof value !== 'string' || value < 3) throw new Error(`Only strings >= 3 letters allowed!`);
      this._name = value;
    },
    get name(){
      return this._name;
    },

    roles: [],

    checkRoles(){

      if(this.roles.length === 0){

        return (`Сотрудник ${this.name} не назначен ни на какую должность в компании.`)
      } else {

        return `Сотрудник ${this.name} назначен на должность: ${this.roles}.`
      }
    },

    toString (){
      return `Сотрудник ${this.name} занимает следующую позицию в компании: ${this.roles}`;
    }
  };


  person.name = 'Ella Vrubel';
  person.roles = ['Web-Developer'];

  console.log(person.checkRoles());


