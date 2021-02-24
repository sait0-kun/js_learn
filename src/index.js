// const data = ["a", "b", "c", "d", "e"];
// const [value1, value2, value3, value4, value5] = data;
// const [val1, val2, ...other] = data;

// console.log(value1);  // a
// console.log(value2);  // b
// console.log(value3);  // c
// console.log(val1);  // a
// console.log(val2);  // b
// console.log(other);  // [c, d, e]

// const data = { name: "tanaka", age: 50, sex: "男" };

// console.log(data.name); // a
// console.log(data.age); // b
// console.log(data.sex); // c

const data = { name: "tanaka", age: 50, sex: "男" };
const { name, age, birthday } = data;

console.log(name); // a
console.log(age); // b
console.log(birthday); // c
