const data = [
  { name: "sewar", age: 23, email: "SEWar@gmail.com" },
  { name: "sewar", age: 23, email: "SEWar@gmail.com" },
 
];

let userList = [];
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

function addUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  const user = new User(name, age, email);
  userList.push(user);

  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  userList.forEach((element) => {
    const row = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = element.name;

    const ageTd = document.createElement("td");
    ageTd.textContent = element.age;

    const emailTd = document.createElement("td");
    emailTd.textContent = element.email;

    row.appendChild(nameTd);
    row.appendChild(ageTd);
    row.appendChild(emailTd);

    table.appendChild(row);
  });
}

function addRow() {
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  data.forEach((element) => {
    const row = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = element.name;

    const ageTd = document.createElement("td");
    ageTd.textContent = element.age;

    const emailTd = document.createElement("td");
    emailTd.textContent = element.email;
    row.appendChild(nameTd);
    row.appendChild(ageTd);
    row.appendChild(emailTd);

    table.appendChild(row);
  });
}
