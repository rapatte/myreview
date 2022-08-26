import { UseUser } from 'infrastructure/view/hooks/UseUsers';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { notifyError } from 'utils/toastify';

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    let flag = false;
    const userContext = UseUser();
    const isLogged = userContext.state.isLogged;
    isLogged ? (flag = true) : (flag = false);
    if (flag === false) notifyError('You must be logged in');
    return flag;
  }
  return (
    <Route
      {...rest}
      render={props =>
        hasJWT() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export default RouteGuard;
