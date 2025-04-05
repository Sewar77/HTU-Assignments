let user = {
  //properiteis
  firstName: "sewar",
  lastName: "shorman",
  age: 25,
  addresses: {
    jo: "Irbid",
    usa: "california",
    eg: "cairo",

    getMainAddress: function () {
      return `Main Address is in Jordan in ${user.addresses.jo}`;
    },
  },

  //methods
  getFullName: function () {
    return `Full Name: ${this.firstName} ${user.lastName}`;
  },

  getAgeByDays: function () {
    return (user.age - user.age / 4) * 365 + (user.age / 4) * 366; //for age and leap year and so on.
  },
  getAgeByDays: () => (user.age - user.age / 4) * 365 + (user.age / 4) * 366, //for age and leap year and so on.,
};
//accessing the objects
console.log(typeof user.firstName);
console.log(user.firstName);
console.log("==========================");
console.log(user["firstName"]);
console.log("==========================");
console.log(typeof user.getFullName());
console.log(user.getFullName());
console.log("==========================");
console.log(user.getAgeByDays());
console.log("==========================");
console.log(user.addresses.jo);
console.log(user["addresses"]["jo"]);
console.log("==========================");
console.log(user.addresses.getMainAddress());

let myonj = {
  1: "one",
  2: "two",
};
//can not use this
//consol.log(myonj.1); //not allowed 
console.log(myonj["1"]);
console.log(myonj["2"]);//this allowed 


