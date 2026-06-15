//* Write a function that gives you a list of digits in a number
console.clear();

function getDigits(num) {
  let digitsList = [];
  let r;
  while (num > 0) {
    r = num % 10;
    num = Math.trunc(num / 10);
    digitsList.push(r);
  }
  return digitsList;
}

let result = getDigits(256);
console.log(result);
