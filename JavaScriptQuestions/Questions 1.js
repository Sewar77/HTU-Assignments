// [1,1] [1,2] [1,3]
// [2,1] [2,2] [2,3]
// [3,1] [3,2] [3,3]
/*
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


console.log(newarr.filter((x) => x >= 55));
console.log(newarr.reduce((pre, curr) => pre * curr));
console.log(newarr.reduce((pre, curr) => pre + curr));
console.log(newarr.reduce((pre, curr) => pre - curr));
console.log(newarr.reduce((pre, curr) => pre / curr));
console.log(newarr.reduce((pre, curr) => pre ** curr));


newarr.forEach((x,y) => {
  if (x > 22){
    console.log(`the number ${x} with index ${y}`)
  }
})

let found = newarr.find(x => x > 23);
console.log(found);


let foundIndex = newarr.findIndex(x => x > 23);
console.log(foundIndex);

let everyElement = newarr.every(x => x > 22);
console.log(everyElement);


let someElement = newarr.some(x => x > 22);
console.log(someElement);

let flatarr = [1,2,[2,3,4,5], [2,[3,4,3, [3,4,5]]]]
console.log(flatarr.flat(2));
*/

console.log("question-1: using map, multiply the elements with 3: ");
let mapExample = [1, 2, 3, 4, 5, 6];
console.log(mapExample.map((x) => x * 3));

console.log("question-2: using filter and index of, return a unique array:  ");
let filterExample = [1, 2, 2, 3, 3, 4, 5, 6];
console.log(
  filterExample.filter((value, index, array) => array.indexOf(value) === index)
);

console.log("question-3: sort by age  ");
let sortObj = [
  { name: "sewar", age: 222 },
  { name: "hala", age: 23 },
  { name: "raghad", age: 924 },
];
sortObj.sort((p1, p2) => p1.age - p2.age);
console.log(sortObj);
