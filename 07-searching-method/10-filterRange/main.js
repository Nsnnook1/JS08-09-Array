const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filter(arr, lower, upper) {
  return arr.filter((n, idx) => n >= lower && n <= upper);
}
console.log(filter(num, 4, 8));
