//------------CSS-------------
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@patman10/kickstart.css/dist/kickstart.min.css";
import "./app.css";
//------------LIBS-------------
import React from "react";
//------------UTILS-------------
import C from "./utils/classes/Constants";
import F from "./utils/classes/Functions";
import MyMath from "./utils/classes/MyMath";

interface Props {}

interface State {
  equation: Array<string>;
  isSolved: boolean;
  input: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      equation: [],
      isSolved: false,
      input: C.zero
    };
  }

  onclickClear() {
    this.setState({
      equation: [],
      isSolved: false,
      input: C.zero
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

    if (value === C.zero)
      if (
        // trying to divide by +0
        equation[equation.length - 1] === C.divide ||
        // trying to divide by -0
        (equation[equation.length - 2] === C.divide &&
          equation[equation.length - 1] === C.minus)
      ) {
        alert("Division by 0 not allowed.");
        return;
      }

    if (input.length === 21) {
      alert("Number limit reached.");
      return;
    }

    if (input === C.zero || F.isOperation(input)) newI = value;
    else newI += value;

    if (newEq.length === 0) newEq.push(newI);
    else if (newEq.length === 1) {
      if (newEq[0] === C.minus) {
        newEq[newEq.length - 1] += value;
        newI = newEq[newEq.length - 1];
      } else {
        newEq[newEq.length - 1] += value;
        newI = newEq[newEq.length - 1];
      }
    } else if (newEq.length >= 2) {
      const str0 = newEq[newEq.length - 2],
        str1 = newEq[newEq.length - 1];

      if (F.isOperation(str0) && str1 === C.minus) {
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
      case C.minus:
        if (equation.length === 1) if (equation[0] === C.minus) return;

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

    if (isSolved || F.isOperation(input) || input.includes(C.radix)) return;

    let newEq = [...equation],
      newI = input;

    newEq[newEq.length - 1] += C.radix;
    newI += C.radix;

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
      equation.push(C.equals, result);
      this.setState({ equation, isSolved, input });
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    const { equation, input } = this.state;
    return (
      <main className="white-bg flex-row-aiC-jcC">
        <div id="calculator" className="black-bg flex-col-aiC p-05e">
          <div id="display" className="flex-col w-100p">
            <label id="equation">{equation.join(" ")}</label>
            <label id="current-input">{input}</label>
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
              onClick={() => this.onclickOperation(C.divide)}
              type="button"
              value="/"
            />
            <input
              id="multiply"
              className="btn btn-secondary"
              onClick={() => this.onclickOperation(C.multiply)}
              type="button"
              value="x"
            />
            <input
              id="seven"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.seven)}
              type="button"
              value="7"
            />
            <input
              id="eight"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.eight)}
              type="button"
              value="8"
            />
            <input
              id="nine"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.nine)}
              type="button"
              value="9"
            />
            <input
              id="minus"
              className="btn btn-secondary"
              onClick={() => this.onclickOperation(C.minus)}
              type="button"
              value="-"
            />
            <input
              id="four"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.four)}
              type="button"
              value="4"
            />
            <input
              id="five"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.five)}
              type="button"
              value="5"
            />
            <input
              id="six"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.six)}
              type="button"
              value="6"
            />
            <input
              id="plus"
              className="btn btn-secondary"
              onClick={() => this.onclickOperation(C.plus)}
              type="button"
              value="+"
            />
            <input
              id="one"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.one)}
              type="button"
              value="1"
            />
            <input
              id="two"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.two)}
              type="button"
              value="2"
            />
            <input
              id="three"
              className="btn btn-dark"
              onClick={() => this.onclickNumber(C.three)}
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
              onClick={() => this.onclickNumber(C.zero)}
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
