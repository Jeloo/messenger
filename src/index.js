import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoaderInline from '@jetbrains/ring-ui/components/loader-inline/loader-inline';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
