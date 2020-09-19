import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { userModel } from '@/_services';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = userModel.currentUserValue;
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        );
      }

      // check if route is restricted by role
      if (roles && roles.indexOf(currentUser.role) === -1) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: '/home' }} />;
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);