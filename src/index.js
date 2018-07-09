import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './utils/fontawesome/fontawesome-all.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
