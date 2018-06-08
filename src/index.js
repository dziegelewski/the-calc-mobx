import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { global } from './styled';
import CalculatorStore from './CalculatorStore';

const store = new CalculatorStore();
injectGlobal`${global}`;

ReactDOM.render(<Calculator store={store} />, document.getElementById('root'));
registerServiceWorker();
