let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const result = alphabets.reduce((acc, char) => {
  //ถ้า character ตัวนั้นอยู่ใน acc แล้ว ไม่ต้อง push
  //ถ้าไม่มี character นั้นยอู่ใน acc =>push

  let found = false;
  for (let c of acc) {
    if (c == char) found = true;
  }
  if (!found) acc.push(char);
  return acc;
}, []);
console.log(result);

const set = new Set(alphabets);
console.log(set);

const newArr = new Array(...set); //...เอาปีกกาออก
console.log(newArr);
