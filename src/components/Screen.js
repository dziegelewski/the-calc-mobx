import React, { Component } from 'react';
import { CalcScreen } from '../styled';

class Screen extends Component {
	render() {
		const { text } = this.props;
		return (
			<CalcScreen>
				{text || 0}
			</CalcScreen>
		)
	}
}

export default Screen;
