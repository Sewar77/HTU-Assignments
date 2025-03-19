const calc_button = document.querySelectorAll(".button");

function calculate(event) {
  let input_number = document.getElementById("user-input").value;
  let secon_input = document.getElementById("user-second-input").value;
  let devided_number;
  const clicked = event.target.id;
  switch (clicked) {
    case "factorials":
      let result = 1;
      for (let i = 1; i <= input_number; i++) {
        result *= i;
      }
      document.getElementById("user-output").innerHTML = result;
      break;

    case "devide":
      devided_number = input_number / secon_input;
      document.getElementById("user-output").innerHTML = devided_number;
      break;
    case "multiply":
      devided_number = input_number * secon_input;
      document.getElementById("user-output").innerHTML = devided_number;
      break;
    case "minus":
      devided_number = input_number - secon_input;
      document.getElementById("user-output").innerHTML = devided_number;
      break;
    case "add":
      devided_number = parseFloat(input_number) + parseFloat(secon_input);
      document.getElementById("user-output").innerHTML = devided_number;
      break;
    case "root":
      devided_number = Math.sqrt(input_number);
      document.getElementById("user-output").innerHTML = devided_number;
      break;
    case "Exponentiation":
      devided_number = Math.pow(input_number, secon_input); 
      document.getElementById("user-output").innerHTML = devided_number;
      break;
    default:
      console.log("Unknown button clicked!");
  }
}
