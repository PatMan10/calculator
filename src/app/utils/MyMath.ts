import C from "./Constants";
import F from "./Functions";
import L from "./Logger";

function solve(equation: Array<string>): number {
  if (!isValidEquation(equation)) throw new Error("Malformed equation.");

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

export function isValidEquation(equation: Array<string>): boolean {
  if (equation.length === 0) return false;

  if (equation.length === 1 && F.isNumber(equation[0])) return true;

  if (F.isSymbol(equation[0])) return false;

  if (F.isSymbol(equation[equation.length - 1])) return false;

  let num1, num2, operation;
  for (let i = 1; i < equation.length; i += 2) {
    operation = equation[i];
    num1 = equation[i - 1];
    num2 = equation[i + 1];
    if (F.isNumber(num1) && F.isOperation(operation) && F.isNumber(num2))
      continue;
    else return false;
  }
  return true;
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