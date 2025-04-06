function Calc() {
  let display = document.getElementById("display");
  let operation = "";
  let number1 = "";
  let number2 = "";
  let state = true;
  document.querySelectorAll(".digits").forEach(function (btn) {
    btn.addEventListener("click", function () {
      let btnValue = btn.innerHTML;
      if (btnValue === "C") {
        number1 = "";
        number2 = "";
        operation = "";
        state = true;
        display.value = "";
      } else if (!isNaN(btnValue)) {
        if (state) {
          number1 += btn.innerHTML;
          display.value = number1;
        } else {
          number2 += btn.innerHTML;
          display.value = number2;
        }
      } else {
        if (state === true) {
          operation = btnValue;
          state = false;
          display.value = btnValue;
        }
      }
    });
  });

  document.getElementById("calc").addEventListener("click", function () {
    if (number1 !== "" && number2 !== "" && operation) {
      switch (operation) {
        case "+":
          display.value = parseFloat(number1) + parseFloat(number2);
          break;
        case "-":
          display.value = parseFloat(number1) - parseFloat(number2);
          break;
        case "*":
          display.value = parseFloat(number1) * parseFloat(number2);
          break;
        case "/":
          display.value = parseFloat(number1) / parseFloat(number2);
          break;
      }
      number1 = display.value;
      number2 = "";
      operation = "";
      state = true;
    }
  });
}
