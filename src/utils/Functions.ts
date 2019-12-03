import C from "./Constants";

class Functions {
  static isDivideOrMultiply(c: string): boolean {
    return c === C.charDivide || c === C.charMultiply;
  }

  static isMinusOrPlus(c: string): boolean {
    return c === C.charMinus || c === C.charPlus;
  }

  static isOperation(c: string): boolean {
    return this.isDivideOrMultiply(c) || this.isMinusOrPlus(c);
  }

  static isSymbol(c: string): boolean {
    return c === C.charRadix || this.isOperation(c);
  }

  static isNumber(c: string): boolean {
    return C.regexNumbers.test(c);
  }
}

export default Functions;
