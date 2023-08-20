let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

// function getAverageAge(arr) {
//   let ages = arr.map((e) => e.age);
//   let totleAges = ages.reduce((acc, item) => acc + item, 0);
//   let result = totleAges / arr.length;
//   return result;
// }

function getAverageAge(arr) {
  const sumAge = arr.reduce((a, c) => a + c.age, 0);
  return sumAge / arr.length;
}

const result = getAverageAge(arr);
console.log(result);
