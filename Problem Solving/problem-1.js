// Problem:  Bit++

let numberLines = prompt("Enter # of Lines: ");
let result = 0;
for (let i = 0; i <= numberLines; i++) {
  let bit = prompt("Enter the operation x++/++x/--x/x--: ");
  if (bit.includes("++")) {
    result++;
  } else {
    result--;
  }
}

console.log(result);
