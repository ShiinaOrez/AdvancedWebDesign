import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/index.css';
import App from './js/App';
import Login from './js/Login'
import Homepage from './js/Homepage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path="/login" component={Login} />
            <Route path="/homepage" component={Homepage} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

serviceWorker.register();
