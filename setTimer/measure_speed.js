'use ctrict';

//механизмы для измерения скорости работы

// 1 работает как в браузере, так и в Node.js

console.time('timer'); // console.time - starts the timer;   'timer' is label, optional, must be a string

setTimeout(function () {
  console.timeEnd('timer');  // ends a timer and displays the result in the console.view; 'timer' specifies which timer is needed to stop

}, 0);   // timer: 1.871ms


// 2 - less accurate method

const start = new Date();

setTimeout(function () {

  const end = new Date() - start;

  console.log('Execution time: %dms', end);

}, 0);  // Execution time: 5ms


// 3 - the most accurate way to measure working time of the function, but it works in Node.js (backend) only  - process.hrtime()

const hrStart = process.hrtime();

setTimeout(function () {

  const hrEnd = process.hrtime(hrStart);

  console.log(`Execution Time: ${hrStart[0]}s`);
  console.log(`Execution Time: ${hrEnd[1] / 1000000}ms`)

}, 0);

//


// example time for 'for loop'

console.time('loop');

setTimeout(function () {

  for (let i = 0; i < 1e6; i++){

    Math.random();
  }

},0);

console.timeEnd('loop');

//


