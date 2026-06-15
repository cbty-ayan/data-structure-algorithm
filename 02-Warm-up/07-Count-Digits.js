//* Write a function to return the number of digits of a numbers

console.clear();

function countDigits(num) {
  if (num == 0) return 1;
  let n = 0;
  while (num > 0) {
    n++;
    num = Math.trunc(num / 10);
  }
  return n;
}

let result = countDigits(0);
console.log("Number of digits in : " + result);
