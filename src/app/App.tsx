//------------CSS-------------
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "pmt-kickstart.css/src/kickstart.min.css";
import "./css/mobile.css";
import "./css/desktop.css";
//------------LIBS-------------
import React from "react";
//------------UTILS-------------
import C from "./utils/Constants";
import F from "./utils/Functions";
import L from "./utils/Logger";
import MyMath from "./utils/MyMath";

interface AppState {
  equation: Array<string>;
  isSolved: boolean;
  input: string;
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      equation: [],
      isSolved: false,
      input: C.charZero
    };
  }

  onclickClear() {
    this.setState({
      equation: [],
      isSolved: false,
      input: C.charZero
    });
  }

  continueSolvedEquation() {
    const { isSolved: boolS, input: strI } = this.state;

    if (!boolS) return {};

    this.setState({ isSolved: false });
    return {
      equation: [strI]
    };
  }

  onclickNumber(value: string) {
    const { equation, input, isSolved } = this.state;
    if (isSolved) return;

    let newEq = [...equation],
      newI = input;

    if (input.length === 21) {
      alert("number limit reached");
      return;
    }

    if (input === C.charZero || F.isOperation(input)) newI = value;
    else newI += value;

    if (newEq.length === 0) newEq.push(newI);
    else if (newEq.length === 1) {
      if (newEq[0] === C.charMinus) {
        newEq[newEq.length - 1] += value;
        newI = newEq[newEq.length - 1];
      } else {
        newEq[newEq.length - 1] += value;
        newI = newEq[newEq.length - 1];
      }
    } else if (newEq.length >= 2) {
      const str0 = newEq[newEq.length - 2],
        str1 = newEq[newEq.length - 1];

      if (F.isOperation(str0) && str1 === C.charMinus) {
        newEq[newEq.length - 1] += value;
        newI = newEq[newEq.length - 1];
      } else if (F.isOperation(str1)) newEq.push(newI);
      else newEq[newEq.length - 1] += value;
    } else newEq[newEq.length - 1] += value;

    this.setState({ equation: newEq, input: newI });
  }

  onclickOperation(value: string) {
    const { equation, input } = this.state;
    const { equation: prevResult } = this.continueSolvedEquation();
    let newEq = prevResult || [...equation],
      newI = input;

    switch (value) {
      case C.charMinus:
        if (equation.length === 1) if (equation[0] === C.charMinus) return;

        const str0 = equation[equation.length - 2],
          str1 = equation[equation.length - 1];

        if (F.isSymbol(str0) && F.isSymbol(str1)) return;
        break;

      default:
        if (
          equation.length === 0 ||
          F.isOperation(input) ||
          F.isOperation(equation[equation.length - 1])
        )
          return;
        break;
    }

    newEq.push(value);
    newI = value;

    this.setState({
      equation: newEq,
      input: newI
    });
  }

  onclickRadix() {
    const { equation, input, isSolved } = this.state;

    if (isSolved || F.isOperation(input) || input.includes(C.charRadix)) return;

    let newEq = [...equation],
      newI = input;

    newEq[newEq.length - 1] += C.charRadix;
    newI += C.charRadix;

    this.setState({
      equation: newEq,
      input: newI
    });
  }

  onclickEquals() {
    const { equation: curEq, isSolved: curIsSol, input: curI } = this.state;
    if (curIsSol) return;

    let equation = [...curEq],
      isSolved = true,
      input = curI;

    try {
      const result = MyMath.solve(equation).toString();
      input = result;
      equation.push(C.charEquals, result);
      this.setState({ equation, isSolved, input });
    } catch (e) {
      alert("Invalid equation.");
    }
  }

  render() {
    const { equation, input } = this.state;
    return (
      <main className="white-bg container flex-row-aiC-jcC h-100vh">
        <div id="calculator" className="black-bg p-05e">
          <div id="display" className="flex-col">
            <label id="equation">{equation.join(" ")}</label>
            <label id="current-input">{input}</label>
          </div>
          <div className="flex-row-jcC">
            <div id="buttons">
              <input
                id="clear"
                className="btn btn-danger"
                onClick={() => this.onclickClear()}
                type="button"
                value="AC"
              />
              <input
                id="divide"
                className="btn btn-secondary"
                onClick={() => this.onclickOperation(C.charDivide)}
                type="button"
                value="/"
              />
              <input
                id="multiply"
                className="btn btn-secondary"
                onClick={() => this.onclickOperation(C.charMultiply)}
                type="button"
                value="x"
              />
              <input
                id="seven"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charSeven)}
                type="button"
                value="7"
              />
              <input
                id="eight"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charEight)}
                type="button"
                value="8"
              />
              <input
                id="nine"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charNine)}
                type="button"
                value="9"
              />
              <input
                id="minus"
                className="btn btn-secondary"
                onClick={() => this.onclickOperation(C.charMinus)}
                type="button"
                value="-"
              />
              <input
                id="four"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charFour)}
                type="button"
                value="4"
              />
              <input
                id="five"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charFive)}
                type="button"
                value="5"
              />
              <input
                id="six"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charSix)}
                type="button"
                value="6"
              />
              <input
                id="plus"
                className="btn btn-secondary"
                onClick={() => this.onclickOperation(C.charPlus)}
                type="button"
                value="+"
              />
              <input
                id="one"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charOne)}
                type="button"
                value="1"
              />
              <input
                id="two"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charTwo)}
                type="button"
                value="2"
              />
              <input
                id="three"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charThree)}
                type="button"
                value="3"
              />
              <input
                id="equals"
                className="btn btn-primary"
                onClick={() => this.onclickEquals()}
                type="button"
                value="="
              />
              <input
                id="zero"
                className="btn btn-dark"
                onClick={() => this.onclickNumber(C.charZero)}
                type="button"
                value="0"
              />
              <input
                id="radix"
                className="btn btn-dark"
                onClick={() => this.onclickRadix()}
                type="button"
                value="."
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
