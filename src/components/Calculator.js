import React, { Component } from 'react';
import { CalcBox, CalcKey } from '../styled';

import Screen from './Screen';
import Keyboard from './Keyboard';

import { lastItem, joinedValues, isNumber, isMathSymbol, concatNumbers, modifiedLastItem, trimmedLastCharFromArray } from '../helpers';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: [],
    }
  }

  computeResult() {
    return eval(
      joinedValues(this.state.inputValues)
    )
  }

  clearInput() {
    this.setState({
      inputValues: [],
    })
  }

  undoInput() {
    console.log('undoInput')
    const { inputValues } = this.state;

    this.setState({
      inputValues: trimmedLastCharFromArray(inputValues),
    })
  }

  getLastInputValue() {
    return lastItem(this.state.inputValues);
  }

  isLastInputValueANumber() {
    return isNumber(this.getLastInputValue());
  }

  addDigitToLastInputValue(digit) {
    const { inputValues } = this.state;

    this.setState({
      inputValues: modifiedLastItem(
        inputValues,
        item => concatNumbers(item, digit)
      )
    });
    
  }

  calculate = () => {
    if (!this.isLastInputValueANumber() || !this.state.inputValues.length) return;

    this.setState({
      inputValues: [
        this.computeResult()      
      ]
    })
  };

  input = (value) => {

    if (isNumber(value)) {
      this.inputDigit(value)
    }
    else if (isMathSymbol(value)) {
      this.inputMathSymbol(value)
    }
    else if (value === '=') {
      this.calculate();
    }
    else if (value === 'C') {
      this.clearInput()
    }
    else if (value === 'Backspace') {
      this.undoInput();
    }
  };

  inputDigit(value) {
    const { inputValues } = this.state;

    if (this.isLastInputValueANumber()) {
      this.addDigitToLastInputValue(value);
      return;
    }

    this.setState({
      inputValues: [...inputValues, value],
    })
  }

  inputMathSymbol(value) {
    const { inputValues } = this.state;

    if (!inputValues.length) return;

    if (this.isLastInputValueANumber()) {
      this.setState({
        inputValues: [...inputValues, value],
      })
    }
  }



  render() {
    return (
      <CalcBox>

        <Screen inputValues={this.state.inputValues} />
        <Keyboard onInput={this.input} />

      </CalcBox>
    );
  }
}

export default Calculator;
