const names = ["Mike", "Sid", "Jack", "Bill"];
console.log(names);

//Callback : Literal, On the fly
names.forEach((order, element) => console.log(order + 1, element));



// function logeElement(element,order){
//     console.log(order + 1, element);
// }

//Callback : Named,Reference
// names.forEach(logElement)