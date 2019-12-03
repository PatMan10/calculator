import MyMath from "../utils/MyMath";

describe("Testing MyMath", () => {
  describe("testing MyMath.solve()", () => {
    it("divide", () => {
      expect(MyMath.solve(["4", "/", "2"])).toBe(2);
      expect(MyMath.solve(["10", "/", "10"])).toBe(1);
      expect(MyMath.solve(["1", "/", "4"])).toBe(0.25);
      expect(MyMath.solve(["-11", "/", "2"])).toBe(-5.5);
      expect(MyMath.solve(["0", "/", "1000"])).toBe(0);
      expect(MyMath.solve(["-100", "/", "2"])).toBe(-50);
    });
    it("multiply", () => {
      expect(MyMath.solve(["1", "x", "2"])).toBe(2);
      expect(MyMath.solve(["10", "x", "100"])).toBe(1000);
      expect(MyMath.solve(["1.1", "x", "4"])).toBe(4.4);
      expect(MyMath.solve(["-11", "x", "10"])).toBe(-110);
      expect(MyMath.solve(["0", "x", "1000"])).toBe(0);
      expect(MyMath.solve(["-100", "x", "2"])).toBe(-200);
    });
    it("minus", () => {
      expect(MyMath.solve(["1", "-", "2"])).toBe(-1);
      expect(MyMath.solve(["10", "-", "100"])).toBe(-90);
      expect(MyMath.solve(["1.1", "-", "4"])).toBe(-2.9);
      expect(MyMath.solve(["-11", "-", "-10"])).toBe(-1);
      expect(MyMath.solve(["0", "-", "-1000"])).toBe(1000);
      expect(MyMath.solve(["-100", "-", "2"])).toBe(-102);
    });
    it("plus", () => {
      expect(MyMath.solve(["1", "+", "2"])).toBe(3);
      expect(MyMath.solve(["10", "+", "100"])).toBe(110);
      expect(MyMath.solve(["1.1", "+", "4"])).toBe(5.1);
      expect(MyMath.solve(["-11", "+", "10"])).toBe(-1);
      expect(MyMath.solve(["0", "+", "1000"])).toBe(1000);
      expect(MyMath.solve(["-100", "+", "2"])).toBe(-98);
    });
  });
});
