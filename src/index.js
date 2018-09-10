import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Route from './pages/route/router'
import { Provider } from 'react-redux'
// import store from './pages/redux/index'
import axios from 'axios'
import "./pages/source/css/comm.css"
import configStore from './pages/stores/store/configureStore'
import DevTool from './pages/stores/utils/DevTool'
import Reducers from './pages/stores/reducers'
// React.prototype.axios = axios
window.http = axios
const store = configStore(Reducers)

ReactDOM.render(
    <Provider store={store}>
        <App><Route /><DevTool/></App>
    </Provider>,
    document.getElementById('root')
);
