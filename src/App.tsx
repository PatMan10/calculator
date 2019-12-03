import React from "react";
//////////////
import "./css/normalise.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/kickstart.css";
import "./css/animate.css";
import "./css/mobile.css";
import "./css/desktop.css";
/////////////
import C from "./utils/Constants";
import F from "./utils/Functions";
import Logger from "./utils/Logger";
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

  onclickNumber(charValue: string) {
    const { equation: curEq, input: curI } = this.state;
    let newEq = [...curEq],
      strNewI = curI;

    if (strNewI === C.charZero || F.isOperation(strNewI)) strNewI = charValue;
    else strNewI += charValue;

    if (newEq.length === 0) newEq.push(strNewI);
    else if (newEq.length >= 2) {
      const str0 = newEq[newEq.length - 2],
        str1 = newEq[newEq.length - 1];

      if (F.isOperation(str0) && str1 === C.charMinus)
        newEq[newEq.length - 1] += charValue;
      else if (F.isOperation(str1)) newEq.push(strNewI);
      else newEq[newEq.length - 1] += charValue;
    } else newEq[newEq.length - 1] += charValue;

    this.setState({ equation: newEq, input: strNewI });
  }

  onclickOperation(charValue: string) {
    const { equation: curEq, input: curI } = this.state;
    const { equation: prevResult } = this.continueSolvedEquation();
    let newEq = prevResult || [...curEq],
      strNewI = curI;

    switch (charValue) {
      case C.charMinus:
        const str0 = curEq[curEq.length - 2],
          str1 = curEq[curEq.length - 1];

        if (F.isSymbol(str0) && F.isSymbol(str1)) return;

        if (str1 === charValue) return;
        break;

      default:
        if (
          curEq.length === 0 ||
          F.isOperation(curI) ||
          F.isOperation(curEq[curEq.length - 1])
        )
          return;
        break;
    }

    newEq.push(charValue);
    strNewI = charValue;

    this.setState({
      equation: newEq,
      input: strNewI
    });
  }

  onclickRadix() {
    const { equation: curEq, input: curI } = this.state;

    if (F.isOperation(curI) || curI.includes(C.charRadix)) return;

    let newEq = [...curEq],
      strNewI = curI;

    newEq[newEq.length - 1] += C.charRadix;
    strNewI += C.charRadix;

    this.setState({
      equation: newEq,
      input: strNewI
    });
  }

  onclickEquals() {
    if (this.state.isSolved) return;

    let equation = [...this.state.equation],
      isSolved = true,
      input;

    const result = MyMath.solve(equation) + "";
    input = result;
    equation.push(C.charEquals, result);

    this.setState({ equation, isSolved, input });
  }

  render() {
    return (
      <main className="container flex-row-jcC-aiC h-100vh">
        <div id="calculator" className="black-bg p-05e">
          <div id="display" className="flex-col">
            <label id="equation">{this.state.equation.join(" ")}</label>
            <label id="current-input">{this.state.input}</label>
          </div>
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
      </main>
    );
  }
}

export default App;
