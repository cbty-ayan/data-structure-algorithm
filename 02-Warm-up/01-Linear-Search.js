//* Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

console.clear();

function linearSearch(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

//* The driving array
let arr = [22, 43, 10, 20, -3, 5];

let result = linearSearch(arr, -33);
console.log("The index of the target : " + result);
