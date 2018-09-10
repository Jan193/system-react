import React from 'react'
import { HashRouter, Route, Switch, Redirect, } from 'react-router-dom'

import Login from '../login/login'
import Index from '../index/index'

export default class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/index/:type" component={Index}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}