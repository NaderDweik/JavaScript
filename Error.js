new Promise(function (resolve, reject) {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    console.log("Can't handle such error");
    throw error; // re-throw the error to the next .catch
  })
  .catch(function (error) {
    console.log("The unknown error has occurred: " + error);
  });

////////////////////////////////////////////////////////////////////////

new Promise(function (resolve, reject) {
  reject(new Error("Whoops!"));
}).catch(function (error) {
  console.log(error); // shows: "Error: Whoops!"
});

/////////////////////////////////////////////////////////////////////////

new Promise(function (resolve, reject) {
  throw new Error("Whoops!"); // this error is automatically caught
}).catch(function (error) {
  console.log(error); // shows: "Error: Whoops!"
});
