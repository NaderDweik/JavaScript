function multiplyBy(factor) {
  return function (number) {
    return number * factor; // The returned function remembers the 'factor' from the outer scope
  };
}

const multiplyByTwo = multiplyBy(2); // 'factor' is 2 here
console.log(multiplyByTwo(5)); // Outputs: 10

const multiplyByThree = multiplyBy(3); // 'factor' is 3 here
console.log(multiplyByThree(5)); // Outputs: 15

///////////////////////////////////////////////////////////////////////

function multiplication(factors) {
  return function (number) {
    return factors * number;
  };
}
const multiplyByNine = multiplication(9);
console.log(multiplyByNine(9));

////////////////////////////////////////////////////////////////////////////

function substraction(number1) {
  return function minus(number2) {
    return number1 - number2;
  };
}

const substractionOf3 = substraction(3);
console.log(substractionOf3(3));

////////////////////////////////////////////////////////////////////

function sumofNummbers(number11) {
  return function sumOFtwoNumbers(number22) {
    return number11 + number22;
  };
}

const summaryOf3 = sumofNummbers(9);
console.log(summaryOf3(9));

/////////////////////////////////////////////////////////////////////

function calculater(number1, number2) {
  return function Calculating(number3) {
    return number1 + number2 * number3;
  };
}

const calculatingNumbers = calculater(1, 4);
console.log(calculatingNumbers(5));
