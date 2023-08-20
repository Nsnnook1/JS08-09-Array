let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

const initObj = {};
function reduceerFn(acc, name, index, arr) {
  //acc ==={'jack}
  //ยังไม่เคยมีชื่อในobj => เพิ่มชื่อเป็ฯ key & value เป็น 1
  // มีชื่อใน obj อยู่แล้ว => update value เพิ่มขึ้น 1

  //acc['jack] === acc[name]
//   if (!acc[name]) {
//     acc[name] = 1;
//   } else {
//     acc[name]++;
//   }
  if (!acc[name]) acc[name] = 0; //ไม่มีชื่อจะถูกให้ค่าเป็น 0
  acc[name]++; //มีชื่อแน่นอน
  return acc;
}
const r = names.reduce(reduceerFn, initObj);
console.log(r);
