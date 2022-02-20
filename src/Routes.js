import React, { Component } from "react";
import { Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./App";
import StudentLoginPage from "./components/StudentSignIn";
import TeacherLoginPage from './components/TeacherLoginPage';
import history from './history';
import StuDashboard from './components/StuDashboard'
import TeacherDashboard from './components/TeacherDashboard'
export default class Routing extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />studentdashboard
                    <Route path="/TeacherLogin" component={TeacherLoginPage} />
                    <Route path="/StudentLogin" component={StudentLoginPage} />
                    <Route path="/studentdashboard" component={StuDashboard} />
                    <Route path="/teacherdashboard" component={TeacherDashboard} />
                </Switch>
            </Router>
        )
    }
}