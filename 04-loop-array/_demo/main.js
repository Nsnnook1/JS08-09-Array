// for loop

const animals = ["spider", "cat", "dog"];

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
function addAndShow(x, y, showFn) {
  let result = x + y;
  //call showFn
  showFn();
  return result;
}

function show() {
  console.log("Magic word");
}

addAndShow(5, 10, show);
