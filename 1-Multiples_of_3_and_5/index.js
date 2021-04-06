"use strict";

let arr = [];

for (let i = 1; i < 1000; i++) {
  arr.push(i);
}

console.log(
  arr.filter((num) => !(num % 5 && num % 3)).reduce((acc, value) => acc + value)
);
