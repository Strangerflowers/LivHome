import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import Footer from './components/Footer.js';
import * as serviceWorker from './serviceWorker';

// 引入axios
import axios from 'axios';
React.axios = axios;

ReactDOM.render(
    <HashRouter>
        <App />
        {/* <Footer/> */}
    </HashRouter>
,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
