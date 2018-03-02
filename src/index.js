class SmartCalculator {
  constructor(initialValue) {

    this.initialValue = initialValue;
    this.s = '';
  }

  valueOf() {
    return this.result;
  }

  calculate() {
    this.result = eval(this.initialValue + this.s);
    return this.valueOf();
  }

  expression(string) {
    this.s = this.s + string;
    this.calculate();
    return this;
  }

  add(number) {
    var string = "+" + number;
    return this.expression(string);
  }

  subtract(number) {
    var string = "-" + number;
    return this.expression(string);
  }

  multiply(number) {
    var string = "*" + number;
    return this.expression(string);
  }

  devide(number) {
    var string = "/" + number;
    return this.expression(string);
  }

  pow(number) {
    var string = "**" + number;
    return this.expression(string);
  }
}

module.exports = SmartCalculator;
