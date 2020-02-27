import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import App from "./components/app";
import reducers from "./store/reducers";
import "./style/main.scss";
import history from './history';
import SignIn from './components/auth/signin';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <App>
          <Switch>
            <Route path='/' exact component={SignIn}/>
            {/* <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' exact component={Signup}/>

            <Route path='/account' exact component={Account}/>

            <Route path='/e-restaurant' exact component={eRestaurant}/>
            <Route path='/order/review' exact component={Review}/>

            <Route path='/information/email' exact component={Email}/>
            <Route path='/information/payment' exact component={Payment}/> */}
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
