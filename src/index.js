import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { global } from './styled';


injectGlobal`${global}`;

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
