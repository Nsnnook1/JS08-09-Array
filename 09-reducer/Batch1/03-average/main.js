const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

const totalSum = scores.reduce((a, c) => a + c.score * c.weight, 0);

// acc = {sum:..., total:...}
// cur = {scroe:..., subject:..., weight:...}
// const initial = { sum: 0, total: 0};

const summarizeObj = scores.reduce((acc,cur) => {
    acc.sum += cur.score * cur.weight;
    acc.total += cur.weight;
    return acc;
} , {sum: 0, total: 0})

console.log(summarizeObj);
console.log(summarizeObj.sum / summarizeObj.total);

// const totleSum = scores.reduce((a, c) => a + c.score * c.weight, 0);
// const initial = {
//   sum: 0,
//   totle: 0,
// };

// const summarizeObj = scores.reduce((acc, cur) => {
//   acc.sum += cur.score * cur.weight;
//   acc.totle += cur.weight;
// }, initial);

// console.log(summarizeObj);
// console.log(summarizeObj.sum / summarizeObj.totle);

// sum = (value * weight) / totleweight

// scores.weight

//AVG bt weight = sum (score * weight) / sum(weight)
