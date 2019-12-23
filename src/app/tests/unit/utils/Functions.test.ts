import F from "../../../utils/Functions";

describe("Functions", () => {
  it("F.isDivideOrMultiply", () => {
    expect(F.isDivideOrMultiply("x")).toBe(true);
    expect(F.isDivideOrMultiply("/")).toBe(true);
    expect(F.isDivideOrMultiply("t")).toBe(false);
    expect(F.isDivideOrMultiply("12312")).toBe(false);
  });

  it("F.isMinusOrPlus", () => {
    expect(F.isMinusOrPlus("-")).toBe(true);
    expect(F.isMinusOrPlus("+")).toBe(true);
    expect(F.isMinusOrPlus("9")).toBe(false);
    expect(F.isMinusOrPlus("sadasd213")).toBe(false);
  });

  it("F.isOperation", () => {
    expect(F.isOperation("/")).toBe(true);
    expect(F.isOperation("x")).toBe(true);
    expect(F.isOperation("-")).toBe(true);
    expect(F.isOperation("+")).toBe(true);
    expect(F.isOperation("R")).toBe(false);
    expect(F.isOperation("R123as...d")).toBe(false);
  });

  it("F.isSymbol", () => {
    expect(F.isSymbol("+")).toBe(true);
    expect(F.isSymbol(".")).toBe(true);
    expect(F.isSymbol("u")).toBe(false);
    expect(F.isSymbol("uasda...")).toBe(false);
  });

  it("F.isNumber", () => {
    expect(F.isNumber("9009")).toBe(true);
    expect(F.isNumber("-9009")).toBe(true);
    expect(F.isNumber("9.0098091283912803981")).toBe(true);
    expect(F.isNumber("-------9009")).toBe(false);
    expect(F.isNumber("123asdasda")).toBe(false);
    expect(F.isNumber("123..")).toBe(false);
  });
});
