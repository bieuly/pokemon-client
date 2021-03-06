import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory()

ReactDOM.render(
  <Router history={browserHistory}>
    <App/>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
