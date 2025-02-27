let [first, second, ...rest] = ["a", "b", "c", "d"];
console.log(rest); // ["c", "d"]

let array = [1, 2, 3, 4, 5];
let [firstt, secondd, ...restt] = array;
console.log(Number(firstt)); // 1

console.log(restt); // [2, 3, 4, 5]
