import axios from 'axios';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { notifyError } from 'utils/toastify';

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem('token') ===
    axios.defaults.headers.common['Authorization']
      .toString()
      .split('Bearer ')[1]
      ? (flag = true)
      : (flag = false);
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
