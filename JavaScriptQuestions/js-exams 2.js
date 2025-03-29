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
  let maxLength = 0;
  for (let word = 0; word < inputSentence.length;) {
    //["Hello", "world", "this", "is", "JavaScript"]
    maxLength = inputSentence[word].length; //hello
    if (inputSentence[word].length > maxLength){
      maxLength = inputSentence[word].length ;
      word++;
    }
    else{
      return inputSentence[word];
    }
  }
}
