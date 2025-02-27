async function myFunction() {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Done!");
    }, 1000);
  });

  let result = await promise; // Waits for the promise to resolve
  console.log(result); // Logs: "Done!" after 1 second
}

myFunction();
