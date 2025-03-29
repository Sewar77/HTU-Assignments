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

function oddEvenNumbers() {
  let inputArray = document.getElementById("inputArray").value;
  let numArr = inputArray.split(",").map(Number);
  let result = "";
  for (let n = 0; n < numArr.length; n++) {
    if (numArr[n] % 2 == 0) {
      result += " Even ";
    } else {
      result += " Odd ";
    }
  }
  document.getElementById("Result").innerHTML = result;
}

/*
Find Longest Word in a String
Write a function that takes a sentence 
and returns the longest word in it.

Example:
Input: "I love JavaScript programming"
Output: "JavaScript"

*/

function lognestWord() {
  let inputSentence = document.getElementById("inputSentence").value.split(" ");
  let maxWord = "";
  for (let word of inputSentence) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  document.getElementById("resultWord").innerHTML = maxWord;
}

/*
FizzBuzz Problem
Print numbers from 1 to 50. For multiples of 3 print "Fizz", 
for multiples of 5, print "Buzz", 
and for multiples of both, print "FizzBuzz".
*/

function FizzBuzz() {
  for (let number = 1; number <= 50; number++) {
    if (number % 5 == 0 && number % 3 == 0) {
      document.getElementById("multiplesOf3").innerHTML += `<br>${number} Fizz`;
    } else if (number % 5 == 0) {
      document.getElementById("multiplesOf5").innerHTML += `<br>${number} Buzz`;
    } else if (number % 3 == 0) {
      document.getElementById(
        "multiplesOfBoth"
      ).innerHTML += `<br>${number} FizzBuzz `;
    } else {
      document.getElementById(
        "multiplesOfNone"
      ).innerHTML += `<br> ${number} None `;
    }
  }
}

/*
Find the Second Largest Number in an Array
Write a function to find the second largest number in a given numeric array.

Example:
Input: [10, 5, 20, 8, 12]
Output: 12
*/

function secondLargestNumbers() {
  let sortedArray = document
    .getElementById("theInputArray")
    .value.split(",")
    .map(Number);
  sortedArray.sort((a, b) => b - a);
  let result = sortedArray[1];
  document.getElementById("ResultSecondNumber").innerHTML = result;
}

/*
Flatten a Nested Array
Write a function that flattens 
an array with nested arrays into a single-level array.
Example:
Input: [1, [2, [3, 4], 5], 6]
Output: [1, 2, 3, 4, 5, 6]
*/
function flattenArray() {
  // Parse the input string to convert it into an actual array
  let userArray = JSON.parse(document.getElementById("userArray").value);
  let finalArray = [];

  // Recursive function to flatten the array
  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]); // Recurse if the element is an array
      } else {
        finalArray.push(arr[i]); // Add the element if it's not an array
      }
    }
  }

  flatten(userArray); // Start flattening the input array

  // Output the flattened array
  document.getElementById("flattenArrayResult").innerHTML = finalArray;
}
//this question solved with chatGPT, it should be review again and understand it again.