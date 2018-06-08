import React, { Component } from 'react';
import { CalcBox } from '../styled';

import Screen from './Screen';
import Keyboard from './Keyboard';
import { observer } from 'mobx-react'

@observer
class Calculator extends Component {

  input = (value) => this.props.store.input(value);

  render() {
    return (
      <CalcBox>

        <Screen text={this.props.store.inputString} />
        <Keyboard onInput={this.input} />

      </CalcBox>
    );
  }
}

export default Calculator;
