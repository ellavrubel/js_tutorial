'use strict';


let timerInterval = setInterval(() => {
  console.log(new Date());

}, 2000);


setTimeout(() => clearInterval(timerInterval), 5000);