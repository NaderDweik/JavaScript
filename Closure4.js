array = [2, 3, 4];
for (let i in array) {
  setTimeout(function () {
    console.log(i); // Outputs: 0, 1, 2
  }, 5000);
}
