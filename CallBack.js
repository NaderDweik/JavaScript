function summary(callback, x, y) {
  let result = x + y;
  callback(result);
}

function display(result) {
  console.log(result);
}

summary(display, 10, 5);
