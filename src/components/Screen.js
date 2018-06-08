import React, { Component } from 'react';
import { CalcScreen } from '../styled';
import { joinedValues } from '../helpers';

class Screen extends Component {
	render() {
		const { inputValues } = this.props;
		return (
			<CalcScreen>
				{inputValues.length ? joinedValues(inputValues) : 0}
			</CalcScreen>
		)
	}
}

export default Screen;
