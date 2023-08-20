const array = [1, 2, 30, 400];
const newArr = array.map((item) => 2 * item);
console.log(newArr);

const array1 = [1, 2, 3, 4];
const newArr1 = array1.map((item) => `${item}`);
console.log(newArr1);

const array2 = [1, "1", 2, {}];
const newArr2 = array2.map((item) => typeof item);
console.log(newArr2);

const array3 = ["apple", "banana", "orange"];
const newArr3 = array3.map((item) => item.toUpperCase()); //ตัวใหญ่
console.log(newArr3);

const array4 = [1, 3, 4, 5, 6, 7, 8];
const newArr4 = array4.map((item) => (item % 2 === 0 ? "even" : "old"));
console.log(newArr4);

const array5 = [1, -3, 2, 8, -4, 5];
const newArr5 = array5.map((item) => (item < 0 ? -item : item));
console.log(newArr5);

const array6 = [100, 200.25, 300.84, 400.3];
const newArr6 = array6.map((item) => item.toFixed(2));
console.log(newArr6);

const array7 = [0, 5, 10, 7, 6, 5, 0];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const newArr7 = array7.map((item) => month[item]);
console.log(newArr7);

const array8 = [1, 16, 81, 256, 625, 1296];
const newArr8 = array8.map((item) => Math.sqrt(Math.sqrt(item)));
console.log(newArr8);

const array9 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArr9 = array9.map((item) => item.name);
console.log(newArr9);

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArr10 = array10.map((item) => item.age);
console.log(newArr10);
