import React, { Component } from 'react';
import AppTab from './container/AppTab';
import Login from './container/Login';
import {HashRouter as Router,Route} from 'react-router-dom';
import Set from './container/Set';
import Msg from './container/Msg';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Login}/>
                <Route path='/home' component={AppTab}/>
                <Route path='/set' component={Set}/>
                <Route path='/msg' component={Msg}/>
            </Router>
        )
    }
}
