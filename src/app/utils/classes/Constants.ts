class Constants {
  static readonly symbols = /\+|-|x|\/|\./;
  static readonly numbers = /^-?\d+(\.\d+)?$/;
  static readonly operations = /\+|-|x|\//;
  static readonly DM = /\/|x/;
  static readonly MP = /-|\+/;

  static readonly divide = "/";
  static readonly equals = "=";
  static readonly multiply = "x";
  static readonly minus = "-";
  static readonly plus = "+";
  static readonly radix = ".";

  static readonly zero = "0";
  static readonly one = "1";
  static readonly two = "2";
  static readonly three = "3";
  static readonly four = "4";
  static readonly five = "5";
  static readonly six = "6";
  static readonly seven = "7";
  static readonly eight = "8";
  static readonly nine = "9";

  static readonly _ = "";
  static readonly lblEquationId = "equation";
  static readonly lblCurrentInputId = "current-input";

  static readonly btnClearId = "clear";

  static readonly btnEqualsId = "equals";
  static readonly btnMultiplyId = "multiply";
  static readonly btnDivideId = "divide";
  static readonly btnPlusId = "plus";
  static readonly btnMinusId = "minus";

  static readonly btnRadixId = "radix";
  static readonly btnZeroId = "zero";
  static readonly btnOneId = "one";
  static readonly btnTwoId = "two";
  static readonly btnThreeId = "three";
  static readonly btnFourId = "four";
  static readonly btnFiveId = "five";
  static readonly btnSixId = "six";
  static readonly btnSevenId = "seven";
  static readonly btnEightId = "eight";
  static readonly btnNineId = "nine";

  static readonly errMsgEquationEmpty = "Equation is empty.";
  static readonly errMsgEquationStartWithSymbol =
    "Equation can't start with a symbol.";
  static readonly errMsgEquationEndsWithSymbol =
    "Equation can't end with a symbol.";
  static readonly errMsgDivisionByZero = "Division by 0 not allowed.";
  static readonly errMsgEquationStructureInvalid =
    "Equation structure is invalid .";
}

export default Constants;
