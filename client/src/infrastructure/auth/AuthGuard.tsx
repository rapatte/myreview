import { UseUser } from 'infrastructure/view/hooks/UseUsers';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { notifyError } from 'utils/toastify';

const RouteGuard = ({ component: Component, ...rest }) => {
  const userContext = UseUser();
  const isLogged = () => {
    const user = userContext.state.user;
    if (user) {
      return true;
    } else {
      notifyError('You must be logged in.');
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={props =>
        isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export default RouteGuard;
