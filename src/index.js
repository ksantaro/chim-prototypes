import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Filters from './Filters/Filters';
import Alert from './Alert/Alert';
import Main from './Main/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
