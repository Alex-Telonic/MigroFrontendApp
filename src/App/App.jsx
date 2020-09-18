import React from 'react';
import {
  Link, Route, Router, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { history, Role } from '@/_helpers';
import { userModel, userService } from '@/_services';

import { HomePage } from '@/HomePage';

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
                <Route path="/" component={HomePage} />
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
