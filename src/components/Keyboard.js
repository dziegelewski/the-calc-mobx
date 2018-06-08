import React, { Component } from 'react';
import { CalcKeyboard, CalcKey } from '../styled';
import { isNumber } from '../helpers';

const keys = [
	7,		8,		9,		'/',	
	4,		5,		6,		'-',	
	1,		2,		3,		'+',	
	0,		'Del',	'C',	'*',
	'Enter'
];

class Keyboard extends Component {

	onInput = this.props.onInput;

	render() {
		return (
			<CalcKeyboard>
				{keys.map(key => (

					<CalcKey
            onClick={() => this.onInput(translatdeKey(key))}
            type="button"
            key={key}
            keyName={key}
            important={!isNumber(key)}
            >
          {key}
          </CalcKey>

				))}
			</CalcKeyboard>
		)
	}

	translateToKey() {

	}

	componentDidMount() {
		window.addEventListener('keydown', e => {
			e.key === 'Backspace' && e.preventDefault();
			this.onInput(translatdeKey(e.key));
		})
	}
}

function translatdeKey(key) {
	switch(key) {
		case 'Enter':
			return '=';
		case 'Delete':
			return 'C';
		case 'Del':
			return 'Backspace';
		default:
			return key;
	}
}

export default Keyboard;

