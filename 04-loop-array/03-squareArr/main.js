const arr = [2, 3, 5, 7, 11];
const squareArr = arr.map((element) => element ** 2);
console.log(squareArr); // [4, 9, 25, 49, 121]

//.map เพื่อสร้าง array ใหม่

// const arr = [2, 3, 5, 7, 11];

// function squareArr(arr) {
//   squareArr = [];
//   arr.forEach((element) => {
//     squareArr.push(element ** 2);
//   });
//   return squareArr;
// }

// const squaredResult = squareArr(arr);
// console.log(squaredResult);
// // [4, 9, 25, 49, 121]


// const newArr = [];
// for(let i = 0; i<arr; i++){
//     newArr.push(arr[i] ** 2);

// }
// console.log(newArr)
