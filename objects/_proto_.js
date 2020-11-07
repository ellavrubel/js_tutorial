'use strict';


// __proto__ содержит ссылку на родителя

  const user = {
    name: 'Ella',
    age: 38,
    sayName(){
      console.log(`My name is ${this.name}`);
    }
  };

  const person = {

    name: 'Violetta',
    __proto__: user
  }

  person.sayName(); //  My name is Violetta
  user.sayName(); //    My name is Ella


// прародительство  при __proto__ внук идет к родителю и если у того тоже есть __proto__ идет уже к его родителю

 const parent = {

   string: "I am a parent's method",
   parentMethod(){

     console.log(this.string);
   }
 };

 parent.parentMethod(); // I am a parent's method


const child = {
   name: 'Child',
   age: 23,
   __proto__: parent
 };

 child.parentMethod(); // I am a parent's method


const grandChild = {
   string: "I am a grand child",
   __proto__: child
 };

 grandChild.parentMethod(); // I am a grand child

// если метод вообще отсутствует у родителей - TypeError: parent.parentMethod is not a function



