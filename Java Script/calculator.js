let firstNumber = 3;
let secondNumber = 3;
let operation = "+";
let result;
switch (op) {
case "*":
    result = n1 * n1;
    console.log(
      "result of multiply " + firstNumber +" number by" +
        n2 +
        " is " +
        result
    );
break;
  case "/":
    result = n1 / n2;
    console.log(
      "result of devide " +
        n1 +
        " number by" +
        n2 +
        " is " +
        result
    );
    break;
  case "+":
    result = n1 + n2;
    console.log(
      "result of add " +
        n1 +
        " number to" +
        n2 +
        " is " +
        result
    );
    break;
  case "-":
    result = n1 - n2;
    console.log(
      "result of minus " +
        n1 +
        " number from" +
        n2 +
        " is " +
        result
    );
    break;
  case "%":
    result = n1 * n2;
    console.log(
      "result of mod " +
        n1 +
        " number by " +
        n2 +
        " is " +
        result
    );
    break;
}
function myFunction(n1, n2, op) { 
    document.getElementById("calc").innerHTML = result;
}
