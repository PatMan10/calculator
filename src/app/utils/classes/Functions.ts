import C from "./Constants";

class Functions {
  static isDivideOrMultiply(c: string): boolean {
    return c === C.divide || c === C.multiply;
  }

  static isMinusOrPlus(c: string): boolean {
    return c === C.minus || c === C.plus;
  }

  static isOperation(c: string): boolean {
    return this.isDivideOrMultiply(c) || this.isMinusOrPlus(c);
  }

  static isSymbol(c: string): boolean {
    return c === C.radix || this.isOperation(c);
  }

  static isNumber(c: string): boolean {
    return C.numbers.test(c);
  }
}

export default Functions;
