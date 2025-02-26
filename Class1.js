class User {
  constructor(name) {
    // The constructor runs when we create a new object
    this.name = name;
  }

  sayHi() {
    // A method inside the class
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Creating an object from the class
let user = new User("John");

// Calling the method
user.sayHi(); // Output: Hello, my name is John

//////////////////////////////////////////
class Human {
  constructor(age) {
    this.age = age;
  }

  sayAge() {
    console.log(`my age is ${this.age}`);
  }
}

let human = new Human(34);
human.sayAge();
//////////////////////////////////////////

class Employee {
  constructor(EmpID) {
    this.EmpID = EmpID;
  }

  sayEmpId() {
    console.log(`the employee id is ${this.EmpID}`);
  }
}

let emp = new Employee(123444);
emp.sayEmpId();

/////////////////////////////////////////////////

class Company {
  constructor(street) {
    this.street = street;
  }

  getStreet() {
    console.log(`the company street is ${this.street}`);
  }
}

let compnayid = new Company("Abdallah Gousheh");
compnayid.getStreet();

//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////
