const array = [29, 17, 13, 47, 23, 31];
let sum = 0;
array.forEach((element) => {
  sum += element;
});
console.log(sum); //160

// x += y : x = x+y

//for loop
// for (let i = 0; i < array.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//for...in
// let sum = 0;
// for (let index in array) {
//   sum += arr[index];
// }
// console.log(sum);


//for..of
// let sum = 0;
// for (let element of array) {
//   sum += element];
// }
// console.log(sum);