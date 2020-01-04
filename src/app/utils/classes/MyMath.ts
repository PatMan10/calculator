import C from "./Constants";
import F from "./Functions";

function solve(equation: Array<string>): number {
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

  if (F.isSymbol(equation[equation.length - 1]))
    throw Error(C.errMsgEquationEndsWithSymbol);

  let num1, num2, operation;
  for (let i = 1; i < equation.length; i += 2) {
    operation = equation[i];
    num1 = equation[i - 1];
    num2 = equation[i + 1];

    if (operation === C.charDivide && (num2 === "0" || num2 === "-0"))
      throw Error(C.errMsgDivisionByZero);
    else if (F.isNumber(num1) && F.isOperation(operation) && F.isNumber(num2))
      continue;
    else throw Error(C.errMsgEquationStructureInvalid);
  }
}

export function findOperationIndex(curEquation: Array<string>): number {
  let index = -1;
  for (let i = 0; i < curEquation.length; i++) {
    const strCurValue = curEquation[i];
    if (F.isDivideOrMultiply(strCurValue)) return i;

    if (index === -1) if (F.isMinusOrPlus(strCurValue)) index = i;
  }
  return index;
}

export function executeOperation(
  curEquation: Array<string>,
  operationIndex: number
): number {
  const num1 = Number(curEquation[operationIndex - 1]),
    num2 = Number(curEquation[operationIndex + 1]);
  const operation = curEquation[operationIndex];

  if (operation === C.charDivide) return num1 / num2;

  if (operation === C.charMultiply) return num1 * num2;

  if (operation === C.charMinus) return num1 - num2;

  if (operation === C.charPlus) return num1 + num2;

  return -1;
}

export default {
  solve
};
