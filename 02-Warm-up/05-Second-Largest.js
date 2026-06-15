//* Find Second Largest number in an array

console.clear();

function secondLargest(arr) {
  let n = arr.length;
  if (n < 2) {
    return -1;
  }
  let firstLargest = -Infinity,
    secondLargest = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [4, 9, 0, 2, 8, 7, 1, 9];

let result = secondLargest(arr);

console.log("Second Largest number of the array : " + result);
