import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import reducers from "./store/reducers";
import "./style/main.scss";
import history from './history';
import Layout from './components/layout';
import SignIn from './components/auth/signin';
import HomePage from './components/pages/home';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/signin' exact component={SignIn}/>
            {/*<Route path='/signup' exact component={Signup}/>

            <Route path='/account' exact component={Account}/>

            <Route path='/e-restaurant' exact component={eRestaurant}/>
            <Route path='/order/review' exact component={Review}/>

            <Route path='/information/email' exact component={Email}/>
            <Route path='/information/payment' exact component={Payment}/> */}
          </Switch>
        </Layout>
      </Router>
    </Provider>
    , document.querySelector(".app-wrapper"));
}

document.addEventListener("DOMContentLoaded", main);
