//* Write a function that checks a number for palindrome or not

console.clear();

function isPalindromeStringWay(num) {
    if (num < 0) return false;
    let n = num,
        rev = "",
        r;
    while (n > 0) {
        r = n % 10;
        rev += r;
        n = Math.trunc(n / 10);
    }
    return num == rev;
}

function isPalindromeStringInt(num) {
    if (num < 0) return false;
    let rev = 0,
        n = num,
        r;
    while (n > 0) {
        r = n % 10;
        rev = (10 * rev) + r;
        n = Math.trunc(n / 10);
    }
    return num == rev
}

console.log(isPalindromeStringWay(141));
console.log(isPalindromeStringWay(1431));
console.log(isPalindromeStringWay(14341));
console.log("----------------------------")
console.log(isPalindromeStringInt(141));
console.log(isPalindromeStringInt(1431));
console.log(isPalindromeStringInt(14341));
