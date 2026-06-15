//* Write a function to return the number of digits of a numbers

console.clear();

function countDigits(num) {
  let n = 0,
  while (num > 0) {
    n++;
    num = Math.trunc(num / 10);
  }
  return n;
}

let result = countDigits(256);
console.log("Number of digits in : " + result);
