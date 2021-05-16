import C from "./Constants";
import F from "./Functions";

export function solve(equation: Array<string>): number {
  try {
    checkForErrors(equation);
  } catch (error) {
    throw error;
  }

  let curEquation: Array<string> = equation;

  while (curEquation.length > 1) {
    const operationIndex = findOperationIndex(curEquation);
    const result = executeOperation(curEquation, operationIndex);
    const newEquation = [];

    for (let i = 0; i < curEquation.length; i++) {
      if (i === operationIndex) newEquation.push(result + "");
      else if (i === operationIndex - 1 || i === operationIndex + 1) continue;
      else newEquation.push(curEquation[i]);
    }
    curEquation = newEquation;
  }
  return Number(curEquation[0]);
}

export function checkForErrors(equation: Array<string>) {
  if (equation.length === 0) throw new Error(C.errMsgEquationEmpty);

  if (F.isSymbol(equation[0])) throw Error(C.errMsgEquationStartWithSymbol);

  if (F.isSymbol(equation[equation.length - 1])) {
    throw Error(C.errMsgEquationEndsWithSymbol);
  }

  let num1, num2, operation;
  for (let i = 1; i < equation.length; i += 2) {
    operation = equation[i];
    num1 = equation[i - 1];
    num2 = equation[i + 1];

    if (operation === C.divide && (num2 === "0" || num2 === "-0")) {
      throw Error(C.errMsgDivisionByZero);
    } else if (
      F.isNumber(num1) && F.isOperation(operation) && F.isNumber(num2)
    ) {
      continue;
    } else throw Error(C.errMsgEquationStructureInvalid);
  }
}

export function findOperationIndex(equation: Array<string>): number {
  let index = -1;
  for (let i = 0; i < equation.length; i++) {
    const strCurValue = equation[i];
    if (F.isDivideOrMultiply(strCurValue)) return i;

    if (index === -1) if (F.isMinusOrPlus(strCurValue)) index = i;
  }
  return index;
}

export function executeOperation(
  equation: Array<string>,
  operationIndex: number,
): number {
  const num1 = Number(equation[operationIndex - 1]),
    num2 = Number(equation[operationIndex + 1]);
  const operation = equation[operationIndex];

  if (operation === C.divide) return num1 / num2;

  if (operation === C.multiply) return num1 * num2;

  if (operation === C.minus) return num1 - num2;

  if (operation === C.plus) return num1 + num2;

  return -1;
}
