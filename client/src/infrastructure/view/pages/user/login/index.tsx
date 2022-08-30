import { userServices } from 'application';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { notifyError, notifySuccess } from 'utils/toastify';
import { UseUser } from 'infrastructure/view/hooks/UseUsers';
import { login } from 'infrastructure/view/store/user/user.actions';
import { setAuthToken } from 'infrastructure/util/httpAxios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Login = () => {
  const history = useHistory();
  const userContext = UseUser();
  const [user, setUser] = useState<any>();
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (userContext.state.user) {
        notifyError('You are already logged in.');
        return;
      }
      const res = await userServices.login(user);
      userContext.dispatch(login(res));
      history.push('reviews');
      notifySuccess('You have been logged in');
    } catch (e: any) {
      if (e.response.data.error) notifyError(e.response.data.error);
      if (e.response.data.message) notifyError(e.response.data.message);
    }
  };

  setAuthToken(document.cookie);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    history.push('/register');
  };
  return (
    <div className="Login">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Username</label>
          <input
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <button className="primary">Login</button>
      </form>
      <button className="secondary" onClick={handleClick}>
        Register
      </button>
    </div>
  );
};

export default Login;
