let attendanceBtn = document.getElementById("attendance-btn");
attendanceBtn.onclick = function () {
  let name = document.getElementById("stdName").value;
  let newName = document.createElement("li");
  newName.classList.add("border", "border-white", "p-3", "m-3");
  if (name.trim() !== "") {
    newName.innerText = "Name : " + name.charAt(0).toUpperCase() + name.slice(1) + " | Date : " + Date();
    document.getElementById("attendance-names").appendChild(newName);
    document.getElementById("stdName").value = "";
  } else {
    alert("Please enter a task!");
  }
};