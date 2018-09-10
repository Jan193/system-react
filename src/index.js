import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Route from './pages/route/router'
import { Provider } from 'react-redux'
import axios from 'axios'
import "./pages/source/css/comm.css"
import {createStore} from 'redux'
import rootReducer from './stores/reducers'

const store = createStore(rootReducer)

window.http = axios

ReactDOM.render(
    <Provider store={store}>
        <App><Route /></App>
    </Provider>,
    document.getElementById('root')
);
