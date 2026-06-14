//* Write a function that returns the smallest number in an array

console.clear();

function smallestNum(arr) {
  let n = arr.length,
    x = arr[0];
  for (let i = 1; i < n; i++) {
    if (x > arr[i]) {
      x = arr[i];
    }
  }
  return x;
}

//* Main array
let arr = [23, -56, 33, 41, 5, 99, 2, -7, 200, -99];

console.log("Samllest number in the array : " + smallestNum(arr));
