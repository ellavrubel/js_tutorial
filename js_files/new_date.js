const date = new Date(86400000);
console.log(date);

const f = new Date();
document.getElementById('text').innerHTML = f.toUTCString();

console.log(f);

const w = new Date();
document.getElementById('text2').innerHTML = w.toDateString();

console.log(w);


const d = new Date();
document.getElementById('text3').innerHTML = d.toISOString();

console.log(d);


const y = new Date();
year = y.getFullYear();

document.getElementById('text4').innerHTML = year;


const a = new Date();
console.log(a);