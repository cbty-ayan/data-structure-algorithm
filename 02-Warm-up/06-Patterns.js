console.clear();
/*
Star Pattern 1
* * * *
* * * *
* * * *
* * * *
*/

function Pattern1(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < n; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

Pattern1(4);

console.log("-------------------");

/*
Star Pattern 2
*
* *
* * *
* * * *
*/

function Pattern2(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

Pattern2(4);

console.log("-------------------");

/*
Star Pattern 3
1
1 2
1 2 3
1 2 3 4
*/

function Pattern3(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += j + 1 + " ";
    }
    console.log(pattern);
  }
}

Pattern3(4);

console.log("-------------------");

/*
Star Pattern 4
1
1 2
1 2 3
1 2 3 4
*/

function Pattern4(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += i + 1 + " ";
    }
    console.log(pattern);
  }
}

Pattern4(4);

console.log("-------------------");

/*
Star Pattern 5
1 2 3 4
1 2 3
1 2 
1
*/

function Pattern5(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < n - i; j++) {
      pattern += j + 1 + " ";
    }
    console.log(pattern);
  }
}

Pattern5(4);

console.log("-------------------");

/*
Star Pattern 6
1 2 3 4
1 2 3
1 2 
1
*/

function Pattern6(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < n; j++) {
      if (j >= n - 1 - i) pattern += "*";
      else pattern += " ";
    }
    console.log(pattern);
  }
}

Pattern6(5);

console.log("-------------------");

/*
Star Pattern 7
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
*/

function Pattern7(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += ((j + 1) % 2) + " ";
    }
    console.log(pattern);
  }
}

Pattern7(6);
