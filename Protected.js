class CoffeeMachine {
  _waterAmount = 0; // protected property

  constructor(power) {
    this._power = power; // protected
  }

  set waterAmount(value) {
    if (value < 0) {
      value = 0; // Prevent negative values
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }
}

let machine = new CoffeeMachine(100);

// Using getter/setter
machine.waterAmount = -10; // Sets _waterAmount to 0 (not -10)
console.log(machine.waterAmount); // ✅ Allowed: 0
