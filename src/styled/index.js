import styled from 'styled-components';
import { flexCenter  } from './cssUtils';

const background = '#CCC';
const color1 = '#000';
const color2 = '#FFF';



export const global = `
	body {
		background ${background}; 
	}

	* {
		box-sizing: border-box;
	}
`;

export const CalcBox = styled.div`
	width: 300px;
	margin: 10px auto;
	font-size: 30px;
	background: ${color2}
`;

export const CalcScreen = styled.div`
	width: 100%;
	height: 60px;
	background: ${color1};
	color: ${color2};
	text-align: right;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	border: 5px solid ${color1};
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
	border: 2px solid ${color1};
	${flexCenter};
	font-size: 30px;
	cursor: pointer;
	${props => props.important ? importantKey() : ''}
	${props => props.keyName === 'Enter' ? enterKey() : ''}
`

function importantKey() {
	return `
		background: ${color1};
		color: ${color2};
		border-color: ${color2};

		&:hover {
			background: ${color2};
			color: ${color1};
			border-color: ${color1};

		}
	`
}

function enterKey() {
	return `
		grid-column-start: 1;
		grid-column-end: 5;
	`
}