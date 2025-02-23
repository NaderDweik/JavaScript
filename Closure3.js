function createCounter() {
  let count = 0; // count is a private variable

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // Outputs: 1
counter.increment(); // Outputs: 2
counter.decrement(); // Outputs: 1
console.log(counter.getCount()); // Outputs: 1

///////////////////////////////////////////////////////////////////////////

function counterstrike() {
  let count = 0;

  return {
    increse() {
      count++;
      console.log(count);
    },

    decrease() {
      count--;
      console.log(count);
    },

    jynx() {
      console.log(count);
    },
  };
}

const counting = counterstrike();
counting.increse();
counting.increse();
counting.increse();
counting.increse();
counting.increse();
counting.increse();
counting.increse();
counting.decrease();
counting.jynx();

///////////////////////////////////////////////////////////////////////////

function names() {
  let count = 0;

  return {
    nameplus() {
      count++;
      console.log(`number has been increased  ${count}`);
    },
    nameminus() {
      count--;
      console.log(`number has been decreased  ${count}`);
    },
    name7af() {
      console.log(`number is ${count}`);
    },
  };
}

const calc = names();
calc.nameplus();
calc.name7af();
calc.nameminus();
