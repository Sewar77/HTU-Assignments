function myFunction(firstNumber, operation, secondNumber) {
  let result;
  switch (operation) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * +secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "%":
      result = firstNumber % secondNumber;
      break;
    default:
      result = "invalid inputs";
  }
  return result;

}
function calculator(){
    let num1 = document.getElementById("firstNumber").value;
    let op = document.getElementById("operation").value.trim();
    let num2 = document.getElementById("secondNumber").value;

    let result = myFunction(num1, op, num2);
      document.getElementById("calc").textContent = result;
}