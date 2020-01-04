import C from "../../../utils/classes/Constants";
import MyMath, {
  checkForErrors,
  findOperationIndex,
  executeOperation
} from "../../../utils/classes/MyMath";

describe("Testing MyMath", () => {
  describe("checkForErrors", () => {
    it("if something is wrong with equation, throw error with appropriate message", () => {
      expect(() => checkForErrors([])).toThrowError(
        new Error(C.errMsgEquationEmpty)
      );
      expect(() => checkForErrors(["-"])).toThrowError(
        new Error(C.errMsgEquationStartWithSymbol)
      );
      expect(() => checkForErrors(["-", "2"])).toThrowError(
        new Error(C.errMsgEquationStartWithSymbol)
      );
      expect(() => checkForErrors(["2", "2"])).toThrowError(
        new Error(C.errMsgEquationStructureInvalid)
      );
      expect(() => checkForErrors(["1", "/", "0"])).toThrowError(
        new Error(C.errMsgDivisionByZero)
      );
      expect(() => checkForErrors(["1", "/", "-0"])).toThrowError(
        new Error(C.errMsgDivisionByZero)
      );
      expect(() => checkForErrors(["2", "x"])).toThrowError(
        new Error(C.errMsgEquationEndsWithSymbol)
      );
      expect(() => checkForErrors(["2", "x", "-"])).toThrowError(
        new Error(C.errMsgEquationEndsWithSymbol)
      );
      expect(() => checkForErrors(["2", "x", "-", "3"])).toThrowError(
        new Error(C.errMsgEquationStructureInvalid)
      );
      expect(() => checkForErrors(["2", "2", "x", "-", "3"])).toThrowError(
        new Error(C.errMsgEquationStructureInvalid)
      );
      expect(() =>
        checkForErrors(["1", "+", "4", "-", "1", "/", "/", "4"])
      ).toThrowError(new Error(C.errMsgEquationStructureInvalid));
    });
  });

  describe("findOperationIndex", () => {
    it("return the appropriate operation index", () => {
      expect(findOperationIndex(["4", "/", "2"])).toBe(1);
      expect(findOperationIndex(["10", "-", "-10"])).toBe(1);
      expect(findOperationIndex(["1", "+", "4", "-", "1", "/", "4"])).toBe(5);
      expect(findOperationIndex(["-11", "/", "2", "+", "-9"])).toBe(1);
      expect(findOperationIndex(["0", "+", "2", "/", "1000", "x", "10"])).toBe(
        3
      );
    });
  });

  describe("executeOperation", () => {
    it("return the result of the operation", () => {
      expect(executeOperation(["4", "/", "2"], 1)).toBe(2);
      expect(executeOperation(["-100", "/", "2"], 1)).toBe(-50);
      expect(executeOperation(["1.1", "x", "4"], 1)).toBe(4.4);
      expect(executeOperation(["0", "x", "1000"], 1)).toBe(0);
      expect(executeOperation(["1.1", "-", "4"], 1)).toBe(-2.9);
      expect(executeOperation(["-11", "-", "-10"], 1)).toBe(-1);
      expect(executeOperation(["1", "+", "2"], 1)).toBe(3);
      expect(executeOperation(["10", "+", "100"], 1)).toBe(110);
    });
  });

  describe("MyMath.solve", () => {
    it("return the results of simple equations", () => {
      expect(MyMath.solve(["4", "/", "2"])).toBe(2);
      expect(MyMath.solve(["10", "/", "10"])).toBe(1);

      expect(MyMath.solve(["1", "x", "4"])).toBe(4);
      expect(MyMath.solve(["-11", "x", "2"])).toBe(-22);

      expect(MyMath.solve(["0", "-", "1000"])).toBe(-1000);
      expect(MyMath.solve(["-100", "-", "2"])).toBe(-102);

      expect(MyMath.solve(["1", "+", "4"])).toBe(5);
      expect(MyMath.solve(["-11", "+", "2"])).toBe(-9);
    });

    it("return the results of complex equations", () => {
      expect(
        MyMath.solve(["4", "/", "2", "+", "1", "+", "-1000", "x", "10"])
      ).toBe(-9997);

      expect(
        MyMath.solve(["10", "-", "20", "x", "-99", "/", "-1000", "x", "10"])
      ).toBe(-9.8);

      expect(
        MyMath.solve([
          "10",
          "/",
          "20",
          "x",
          "-99",
          "/",
          "-1000",
          "x",
          "10",
          "-",
          "2",
          "+",
          "1"
        ])
      ).toBe(-0.5049999999999999);
    });
  });
});
