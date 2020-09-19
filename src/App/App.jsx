import React from 'react';
import {
  Link, Route, Router, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { history, Role } from '@/_helpers';
import { userModel, userService } from '@/_services';
import { PrivateRoute } from '@/_components';

import { HomePage } from '@/HomePage';
import {ProductInfoPage} from "@/ProductInfoPage";
import {SigninPage} from "@/SigninPage";
import {SignupPage} from "@/SignupPage";
import {NutsPage} from "@/_fake/NutsPage";
import {RedBullPage} from "@/_fake/RedBullPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router history={history}>
        <div className="jumbotron">
            <div className="container">
              <Switch>
                <Route path="/signin" component={SigninPage} />
                <Route path="/signup" component={SignupPage} />
                  <PrivateRoute
                      path="/home"
                      roles={[Role.User, Role.Admin]} // has to be logged-in
                      component={HomePage}
                  />
                  <PrivateRoute
                      path="/product"
                      roles={[Role.User, Role.Admin]} // has to be logged-in
                      component={ProductInfoPage}
                  />
                  <PrivateRoute
                      path="/shopping"
                      roles={[Role.User, Role.Admin]} // has to be logged-in
                      component={HomePage}
                  />
                  <PrivateRoute
                      path="/shoppingHistory"
                      roles={[Role.User, Role.Admin]} // has to be logged-in
                      component={ProductInfoPage}
                  />
                  <PrivateRoute
                      path="/nuts"
                      component={NutsPage}
                  />
                  <PrivateRoute
                      path="/redbull"
                      component={RedBullPage}
                  />
              </Switch>
            </div>
        </div>
      </Router>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
