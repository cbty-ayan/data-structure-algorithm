//* Write a function that returns the reverse of an integer

console.clear();

function reverseInt(num) {
    let isNeg = num < 0 ? true : false, rev = 0, r;
    num = Math.abs(num);
    while (num > 0) {
        r = num % 10;
        rev = (10 * rev) + r;
        num = Math.trunc(num / 10);
    }
    let limit = Math.pow(2, 31);
    if (rev < -limit || rev >= limit ) return 0;
    return isNeg ? -rev : rev;
}

console.log(reverseInt(-561));