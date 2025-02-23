let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

var number = [1, 2, 3, 4, 5, 6];
for (let ite of number) {
  console.log(`Hello World ${ite}`);
}

///////////////////////////////////////////////////////////////////////

// for in vs for of

let numberss = [10, 20, 30];

for (let i in numberss) {
  console.log(i); // logs the index
}

for (let num of numberss) {
  console.log(num); // logs the value
}
