const log = console.log;
log("learn array");

//Array literal
//element สมาชิก
const friend = ["Money", "Non", "Miya", "Fon"];
log(friend);

//Array Constructor
const height = new Array(150, 160, 175);
console.log(height);

// ## Access,Modify,Add,Delete
//Bracket Notation with Index
//Access
log(friend[0]); //Money
log(friend[2]); //Miya
log(friend[-1]); //undefined
log(friend[10]); //undefined

//Update
friend[0] = "Gold";
log(friend);

friend[1] = "Somchai";
log(friend);

//ถ้า Update Index ที่ไม่มี === add ข้อมูลเพิ่ม
// friend[6] = "Book";
// log(friend);

//Add
log(friend[3]);
friend[4] = "Git";
log(friend);

//Delete
delete friend[2];
log(friend);
log(friend[2]);

// ## 3. basic Property and Method of Array
//<arr>.length
log(friend.length); //5

friend[friend.length] = "Mix";
log(friend);
log(friend.length); //6

// for (let i = 0; i <= friend.length - 1; i++) {
//   //0,1,2,3,4,5(lenght = 6)
//   console.log(friend[i]);
// }

for (let i = 0; i < friend.length - 1; i++) {
  console.log(friend[i]);
}

//Method CRUD element
const animals = ["spider", "cat", "dog"];

//Immutable : ไม่เปลี่ยนแปลงค่า(ถ้าจะเปลี่ยนต้องเขียนทับ)
//Muttable : เปลี่ยนแปลงค่าได้

//Push ทำให้ arr เปลี่ยนค่า (ยาวขึ้น)
let r = animals.push("Elephant");
log(r);
log(animals);

//unshift ทำงานช้ากว่า Push
const s = animals.unshift("snake", "bird");
log(animals);
log(s); //6

let t = animals.pop();
log(animals);
log(t); //Elephant

// for loop

//Imperative กำหนด i เอง
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// for...in (มงอ arr เป็น obj ประเภทหนึ่งได้)
/**
  const arr = {
  0 : "Bird",
  1 : "Cat",
  2 : "Dog"
 }
 */

//ไม่ต้องกำหนด i เอง
// for (let index in animals) {
//   console.log(index, animals[index]);
// }

//for...of
for (let element of animals) {
  //1st : spider
  //2nd : cat
  //3rd : dog
  console.log(element);
}

//Aside Topic : Higher Order Function
function add(x, y) {
  return x + y;
}
console.log(add(5, 6));
//Funcrtion Express : Fn as a value
// const a = console.log;
// const b = alert;
// a("hi");
// b("Hello");

//สร้าง Function ที่รับ parameter เป็น functions
//Main Fn
//addAndShow คือ Higer Order Function (Fn ที่รับ Fn เป็น parameter)

function addAndShow(x, y, showFn) {
  let result = x + y;
  //call showFn
  //   showFn();
  showFn(`result is : ${result}`);
  return result;
}

function show(result) {
  console.log("Magic word");
  console.log(result);
}

addAndShow(5, 10, show);

const item = ["Football", "bag", "Dish"];

// #### forEach : ในแต่ละ item !!!!
//Syntax : <array>.forEach(FN)
// array == caller
//Higher order fn == forEach (รับ parameter เป็น Fn)

// item.forEach(function () {});
//callback ถูก run ตามจน.สมาชิก
// item.forEach(function () {
//   console.log("Hi"); //run 3 รอบ  Hi Hi Hi
// });

// function iterateFn(a) {
//   console.log(a);
// }

// const item = ["Football", "bag", "Dish"];
// const iterateFn = (item) => {
//   console.log(item); //ตั้งชื่อเป็น item or element ก็ได้
// };
// const iterateFn = (a, b, c) => {
//   console.log(a, b, c);
// };
const iterateFn = (index, item, array) => {
  console.log(index, item);
};
item.forEach(iterateFn);
//1st Loop : ("Football",0,item) => console.log("Football")
//1st Loop : ("bag",1,item) => console.log("bag")
//1st Loop : ("Dish",2,item) => console.log("Dish")

item.forEach((a, b, c) => {
  console.log(a);
  console.log(`At index ${b}, element = ${a}`);
});

function myForEach(fn) {
  for (let i = 0; i < 5; i++) {
    fn(`index = ${i}`);
  }
  // code...
}

myForEach(() => console.log("Hi"));
