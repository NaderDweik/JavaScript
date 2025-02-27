new Promise(function (resolve, reject) {
  throw new Error("Whoops!"); // this error is automatically caught
}).catch(function (error) {
  console.log(error); // shows: "Error: Whoops!"
});

new Promis(function (resolve, reject) {
  console.log("Hello wor");
});

document.getElementById("id");
