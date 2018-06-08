import { observable, computed } from 'mobx';
import { lastItem, joinedValues, isNumber, isMathSymbol, concatNumbers, modifiedLastItem, trimmedLastCharFromArray } from './helpers';

export default class CalculatorStore {

	@observable inputValues = [];

	@computed get inputString() {
		return joinedValues(this.inputValues);
	}

	@computed get lastInputValue() {
		return lastItem(this.inputValues);
	}

	@computed get isLastInputValueANumber() {
    return isNumber(this.lastInputValue);
  }

  @computed get inputValuesEmpty() {
  	return !this.inputValues.length;
  }

  @computed get incorrectOperation() {
  	return !this.isLastInputValueANumber || this.inputValuesEmpty;
  }

	computeResult() {
		if (this.incorrectOperation) return;

		this.inputValues = [
			// eslint-disable-next-line
			eval(this.inputString)
		];
	}

	clearInput() {
		this.inputValues = [];
	}

	undoInput() {
		this.inputValues = trimmedLastCharFromArray(this.inputValues);
	}

	addDigitToLastInputValue(digit) {
    this.inputValues = modifiedLastItem(
      this.inputValues,
      item => concatNumbers(item, digit)
    )
  }

  input(value) {

    if (isNumber(value)) {
      this.inputDigit(value)
    }
    else if (isMathSymbol(value)) {
      this.inputMathSymbol(value)
    }
    else if (value === '=') {
      this.computeResult();
    }
    else if (value === 'C') {
      this.clearInput()
    }
    else if (value === 'Backspace') {
      this.undoInput();
    }
  }

  inputDigit(value) {

    if (this.isLastInputValueANumber) {
      this.addDigitToLastInputValue(value);
      return;
    }

    this.inputValues.push(value);
  }

  inputMathSymbol(value) {

    if (!this.isLastInputValueANumber) return;

    this.inputValues.push(value);
  }
}