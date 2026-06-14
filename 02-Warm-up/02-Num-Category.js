//* Write a function that returns the number of negative numbers in an array

console.clear();

function isNegative(arr) {
  let n = arr.length;
  let neg = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      neg++;
    }
  }
  return neg;
}

//* Main Array
let arr = [-4, 5, 88, -3, 9, 0, -1, -22];

console.log("Number of -ve numbers in the array : " + isNegative(arr));
