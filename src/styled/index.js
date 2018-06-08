import styled from 'styled-components';
import { flexCenter  } from './cssUtils';

const background = '#CCC';
const border = '#BBB';
const light = '#FFF';
const dark = '#000';

export const global = `
	body {
		background ${background};
	  margin: 0;
	  padding: 0;
	  font-family: sans-serif;
	}

	* {
		box-sizing: border-box;
	}
`;

export const CalcBox = styled.div`
	width: 300px;
	margin: 10px auto;
	font-size: 30px;
	background: ${light};
	border: 1px solid ${border};
`;

export const CalcScreen = styled.div`
	width: 100%;
	height: 60px;
	background: ${dark};
	color: ${light};
	text-align: right;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	border: 5px solid ${dark};
	padding: 10px;
	white-space: nowrap;
	overflow: hidden;

`;

export const CalcKeyboard = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-auto-flow: row dense;
	
`

export const CalcKey = styled.button`
	border: 2px solid ${border};
	${flexCenter};
	font-size: 30px;
	cursor: pointer;

	transition: background .1s, color .1s;

	&:hover {
		background: white;
	}

	${props => props.important ? importantKey() : ''}
	${props => props.keyName === 'Enter' ? enterKey() : ''}
`

function importantKey() {
	return `
		background: ${dark};
		color: ${light};

		&:hover {
			color: ${dark};
		}
	`
}

function enterKey() {
	return `
		grid-column-start: 1;
		grid-column-end: 5;
	`
}