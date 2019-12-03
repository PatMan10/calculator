class Constants {
  readonly regexSymbols = /\+|-|x|\/|\./;
  readonly regexNumbers = /[0-9]/;
  readonly regexOperations = /\+|-|x|\//;
  readonly regexDM = /\/|x/;
  readonly regexMP = /-|\+/;

  readonly charDivide = "/";
  readonly charEquals = "=";
  readonly charMultiply = "x";
  readonly charMinus = "-";
  readonly charPlus = "+";
  readonly charRadix = ".";

  readonly charZero = "0";
  readonly charOne = "1";
  readonly charTwo = "2";
  readonly charThree = "3";
  readonly charFour = "4";
  readonly charFive = "5";
  readonly charSix = "6";
  readonly charSeven = "7";
  readonly charEight = "8";
  readonly charNine = "9";

  readonly str_ = "";
  readonly strLblEquationId = "equation";
  readonly strLblCurrentInputId = "current-input";

  readonly strBtnClearId = "clear";

  readonly strBtnEqualsId = "equals";
  readonly strBtnMultiplyId = "multiply";
  readonly strBtnDivideId = "divide";
  readonly strBtnPlusId = "plus";
  readonly strBtnMinusId = "minus";

  readonly strBtnRadixId = "radix";
  readonly strBtnZeroId = "zero";
  readonly strBtnOneId = "one";
  readonly strBtnTwoId = "two";
  readonly strBtnThreeId = "three";
  readonly strBtnFourId = "four";
  readonly strBtnFiveId = "five";
  readonly strBtnSixId = "six";
  readonly strBtnSevenId = "seven";
  readonly strBtnEightId = "eight";
  readonly strBtnNineId = "nine";
}

export default new Constants();
