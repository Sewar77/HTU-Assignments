/*
Count Vowels in a String
Write a function that counts how many vowels (a, e, i, o, u) are in a given string (case-insensitive).

Example:
Input: "JavaScript"
Output: 3
*/

function vowelsCounter() {
  let inputStr = document.getElementById("vowels-checker").value;
  let counter = 0;
  let lowerStr = inputStr.toLowerCase();
  for (let vowel = 0; vowel < lowerStr.length; vowel++) {
    if (
      lowerStr[vowel] === "a" ||
      lowerStr[vowel] === "e" ||
      lowerStr[vowel] === "i" ||
      lowerStr[vowel] === "o" ||
      lowerStr[vowel] === "u"
    ) {
      counter++;
    }
  }
  document.getElementById("output").innerHTML = counter;
}

/*
Check Even or Odd Numbers in an Array
Write a function that takes an array of numbers 
and prints "even" if the number is even, 
or "odd" if the number is odd.
Example:
Input: [1, 4, 7, 10]
Output:
odd
even
odd
even
*/
let arrnum = [];
function CheckOddEven() {
  let number = document.getElementById("inputArray").value;
  let outputarray = document.getElementById("outputArray").value;

  if (number !== 0) {
    arrnum.push(number);
    document.getElementById("inputArray").value = "";
    number = document.getElementById("inputArray").value;
  }
  outputarray;
}
