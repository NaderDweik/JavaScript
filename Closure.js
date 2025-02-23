function outerFunction() {
  let message = "Hello from the outer function!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

let myClosure = outerFunction();
myClosure(); // Output: "Hello from the outer function!"

function Nader() {
  let msgs = "Hi Ayah";

  function Ayah() {
    console.log(msgs);
  }
  return Ayah;
}
let Jafar = Nader();
Jafar();

function OutSiderFunction() {
  let mess = "Hi Folks";

  function insiderFunction() {
    console.log(mess);
  }
  return insiderFunction;
}
let newClosure = OutSiderFunction();
newClosure();

function Test1() {
  messi = "The Goat";

  function Test2() {
    console.log(messi);
  }
  return Test2;
}

let goating = Test1();
goating();
