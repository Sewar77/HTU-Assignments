// [1,1] [1,2] [1,3]
// [2,1] [2,2] [2,3]
// [3,1] [3,2] [3,3]

for (let number1 = 1; number1 <= 3; number1++) {
  for (let number2 = 1; number2 <= 3; number2++) {
    //   console.log("[" + number1 + "," + number2 + "]");
    console.log(`[${number1},${number1}]`);
  }
}

let arr = [
  1,
  2,
  {
    name: "sewar",
    age: 23,
  },
  ["texst", { phone: 87654321, salary: 22222 }, 10],
];
console.log(arr);
console.log(arr[2]);
console.log(arr[2].age);

console.log(arr[3][0].slice(-1));
console.log(arr[3][1].salary / 2);
console.log(arr[3][2] * 10);

let arr1 = [
  { id: 1, value: "exam" },
  { id: 3, value: "test" },
  { id: 2, value: "assignment" },
];

function returnExamObj() {
  let i = 0;
  while (i <= arr1.length) {
    if (arr1[i].value === "exam") {
      return arr1;
    }
    i++;
  }
}

arr.push(223);
console.log(arr);
arr.unshift(44);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

//let result = arr.concat(arr1);
//console.log(result);

let result1 = arr.join("-");
console.log(result1);

let newarr = [
  1, 2, 3, 3, 45, 3, 66, 4, 6, 2323, 23, 2, 32, 32, 32, 32, 32, 3, 2, 32, 3, 43,
  645, 76, 5, 75, 6, 33,
];
console.log(newarr);

newarr.splice(2, 7);
console.log(newarr);

newarr.reverse();
console.log(newarr);

newarr.sort();
console.log(newarr);

let double = newarr.map((x) => x * 2);
console.log(double);
