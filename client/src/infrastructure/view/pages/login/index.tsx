import { userServices } from 'application';
import React, { useState } from 'react';
import { notifyError } from 'utils/toastify';

const Login = () => {
  const [user, setUser] = useState<any>();
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const res = await userServices.login(user);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = e => {
    e.preventDefault();
    alert('Goes to registration page');
  };

  console.log(user);

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
