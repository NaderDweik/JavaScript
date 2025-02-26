class gender {
  constructor(genderType, frt) {
    this.genderType = genderType;
    this.frt = frt;
  }

  getGender() {
    console.log(`the gender type is ${this.genderType}`);
  }

  getFrt() {
    console.log(`the fruit name is ${this.frt}`);
  }
}

let gndr = new gender("Famale", "Mango");
gndr.getGender();
gndr.getFrt();
