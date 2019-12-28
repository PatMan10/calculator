class Constants {
  static readonly regexSymbols = /\+|-|x|\/|\./;
  static readonly regexNumbers = /^-?\d+(\.\d+)?$/;
  static readonly regexOperations = /\+|-|x|\//;
  static readonly regexDM = /\/|x/;
  static readonly regexMP = /-|\+/;

  static readonly charDivide = "/";
  static readonly charEquals = "=";
  static readonly charMultiply = "x";
  static readonly charMinus = "-";
  static readonly charPlus = "+";
  static readonly charRadix = ".";

  static readonly charZero = "0";
  static readonly charOne = "1";
  static readonly charTwo = "2";
  static readonly charThree = "3";
  static readonly charFour = "4";
  static readonly charFive = "5";
  static readonly charSix = "6";
  static readonly charSeven = "7";
  static readonly charEight = "8";
  static readonly charNine = "9";

  static readonly str_ = "";
  static readonly strLblEquationId = "equation";
  static readonly strLblCurrentInputId = "current-input";

  static readonly strBtnClearId = "clear";

  static readonly strBtnEqualsId = "equals";
  static readonly strBtnMultiplyId = "multiply";
  static readonly strBtnDivideId = "divide";
  static readonly strBtnPlusId = "plus";
  static readonly strBtnMinusId = "minus";

  static readonly strBtnRadixId = "radix";
  static readonly strBtnZeroId = "zero";
  static readonly strBtnOneId = "one";
  static readonly strBtnTwoId = "two";
  static readonly strBtnThreeId = "three";
  static readonly strBtnFourId = "four";
  static readonly strBtnFiveId = "five";
  static readonly strBtnSixId = "six";
  static readonly strBtnSevenId = "seven";
  static readonly strBtnEightId = "eight";
  static readonly strBtnNineId = "nine";
}

export default Constants;
