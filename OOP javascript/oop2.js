// /*
// let user = new Object();
// user.firstname = "sewar";
// user.lastName = "jihad";
// user.age = 23;

// user.getFullName = function () {
//   return `full name: ${user.firstname} ${user.lastName}`;
// };
// // two ways to declare function
// user.getFullName = () => `full name: ${user.firstname} ${user.lastName}`;

// console.log(user);
// console.log(user.getFullName());

// let mainObj = {
//   hasDiscount: false,
//   showmessage: function () {
//     return `you ${this.hasDiscount ? "" : "Dont"} have discount`;
//   },
// };
// console.log(mainObj.hasDiscount);
// console.log(mainObj.showmessage());

// let otherObj = Object.create(mainObj);
// otherObj.hasDiscount = true;
// console.log(otherObj.hasDiscount);
// console.log(otherObj.showmessage());

// let lastObj = Object.create(mainObj);
// console.log(lastObj.hasDiscount);
// console.log(lastObj.showmessage());
// // */

// // let car = new Object();
// // car.model = "Mercedes";
// // console.log(car)
// // console.log(car.model)

// let person = {
//   name: "seawr",
//   age: 23,
//   address: {
//     street: "amman-jordan",
//     buildingNO: 22,
//   },

//   print: function () {
//     return `${this.name} ${this.age} ${this.address.street}`;
//   },
// };

// console.log(person.print());
// //console.log(person.__proto__);

// let student = Object.create(person);
// console.log(student.print());

// // let person = {
// //   sayHi: function () {
// //     return "Hi!";
// //   },
// // };

// // let student = {
// //   name: "Sewar",
// // };

// // student.__proto__ = person;

// // console.log(student.sayHi()); // 👉 "Hi!" (found in prototype)

// let person = new Object();

// person.name = "raghad";
// person.age = "24";

// person.printInfo = function (name = "hala", age = 22) {
//   return `name: ${name} age ${age}`;
// };

// person.print = function () {
//   return `name: ${this.name} age ${this.age}`;
// };

// console.log(person.printInfo("mariam", 21));
// console.log(person.printInfo());
// console.log(person.print());

// let student ={...person};
// console.log(student.print());
// student.name = "fatima";
// console.log(student.print());

// console.log(person.printInfo("sewar", 21));
// console.log(person.printInfo());
// console.log(person.print());

// let student2 = new Object;
// student2.__proto__ = person;
// console.log(student2.print());

let person = {
  name: "sewar",
  age: 23,
  address: {
    street: "irbid",
    buildingNO: 2,
    country: "jordan",
  },
};

let htuStudent = {
  major: "web development",
  inst: "hussam bawwab",
  progLang: "javascript",
};

person.print = function () {
  return `name: ${this.name} age: ${this.age} country: ${this.address.country} `;
};

let student = { ...person, ...htuStudent };
student.printInfo = function () {
  return `name: ${this.name} age: ${this.age} country: ${this.address.country} inst: ${this.inst} major: ${this.major} language: ${this.progLang}`;
};
console.log(student.printInfo());
console.log(person.print());

student.address.country = "cairo";

console.log(student.printInfo());
console.log(person.print());
console.log("==========================");

let student2 = JSON.parse(JSON.stringify(person));
let student4 = JSON.parse(JSON.stringify(person.address));
let student3 = JSON.stringify(person);
console.log(student2);
console.log(student3);
console.log(student4);
console.log("==========================");

for (let key in person) {
  console.log(key + " " + person[key]);
}
console.log("==========================");

Object.keys(person).forEach((key) => console.log(key));
