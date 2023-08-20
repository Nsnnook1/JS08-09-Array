const alphabets = ["a", "b", "a", "c", "a", "d"];

const resultArr = [];
for (let index in alphabets) {
  if (alphabets[index] === "a") resultArr.push(+index);
}

console.log(resultArr);

// const foundIndex = alphabets.findIndex((item, index) => {
//   if (item === "a") {
//     resultArr.push(index);
//     return true;
//   }
// });
// console.log(foundIndex);


// const x = alphabets.filter((item) => item.indexOf("a"));
// console.log(x);

//--------------------------------------------

//Note
//functions (item,index,array)

// console.log(alphabets.indexOf("a"));
