async function myFunction() {
  return 1;
}

console.log(myFunction());

//////////////////

// async function myFunction() {
//   return Promise.resolve(1);
// }
// myFunction().then(console.log); // Logs: 1
