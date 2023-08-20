const array = [9, 17, 23, 5];
const newArr1 = array.filter((item) => item > 10);
console.log(newArr1);

const array2 = [1, 2, 3, 4];
const newArr2 = array2.filter((item) => item % 2 != 0);
console.log(newArr2);

const array03 = [1, "1", 2, {}];
// const newArr03 = (array03 = item.filter((item) => typeof(item)));
// console.log(newArr03);

const array4 = ["apple", "banana", "orange", "pineapple", "watermeon"];
const newArr4 = array4.filter((item) => item.length > 6);
console.log(newArr4);

const array5 = [1, -3, 2, 8, -4, 5];
const newArr5 = array5.filter((item) => item >= 0);
console.log(newArr5);

const array6 = [1, 3, 4, 5, 6, 7, 8];
const newArr6 = array6.filter((item) => item % 3 == 0);
console.log(newArr6);

const array7 = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
const newArr7 = array7.filter((item) => item.charAt() == "E");
// const newArr07= array7.filter((item) => item[0].toLowerCase() === "e");
console.log(newArr7);

const array8 = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
const newArr8 = array8.filter((item) => item == item.toUpperCase());
console.log(newArr8);

const array9 = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
const newArr9 = array9.filter((item) => item.toLowerCase().includes("buri"));
console.log(newArr9);

const array10 = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];
const newArr10 = array10.filter((item) => item.age >= 18);
console.log(newArr10);

const array11 = [
  { id: 1, name: "Pepsi" },
  { id: 2, name: "Mirinda" },
  { id: 3, name: "Coke" },
  { id: 4, name: "Fanta" },
  { id: 5, name: "Sprite" },
];
const newArr11 = array11.filter((item) => item.id != 4);
console.log(newArr11);

const array12 = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];

function filterFn(personObj, index, array) {
  const mount = +personObj.birth.slice(5, 7);
  if (mount === 6) return true;
  else return false;
}
const filterList = array12.filter(filterFn);
console.log(filterList);

// const newArr12 = array12.filter((item) => {
//   const month = item.birth.slice(5, 7);
//   if month === 6; 
// });
// console.log(newArr12);

// const newArr12 = array12.filter((item) => { item === item.stratWith('06')
// });
