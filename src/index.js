import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* The root element is coming from the index.html
*/
ReactDOM.render(<App txt="this is a prop"/>, document.getElementById('root'));
registerServiceWorker();