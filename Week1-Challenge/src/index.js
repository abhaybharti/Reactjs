import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './counterApp/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './app/store';

console.log("Global Index.js : " +JSON.stringify(store.getState()));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();