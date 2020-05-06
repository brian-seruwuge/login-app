import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//import Signin from './signin';
//import Login from './login';
//import { Container } from 'semantic-ui-react';
import LoginSem from './login_sem_ui';
import MenuBar from './menu';
import 'semantic-ui-less/semantic.less'

ReactDOM.render( <
    Fragment >
    <
    MenuBar / >
    <
    React.StrictMode >
    <
    LoginSem / >
    <
    /React.StrictMode> <
    /Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();