import { userServices } from 'application';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { notifyError, notifySuccess } from 'utils/toastify';

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState<any>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const handleSubmit = async e => {
    if (password === cPassword) {
      try {
        e.preventDefault();
        const res = await userServices.addUser(user);
        console.log(res);
        notifySuccess('Account created');
      } catch (e: any) {
        notifyError(e.response.data.error || e.response.data.message);
      }
    } else {
      e.preventDefault();
      notifyError('Password did not match');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUser({ username: username, password: password });
  }, [password, username]);

  console.log(user);

  const handleCPassword = e => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };
  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass('form-control is-valid');
      } else {
        setShowErrorMessage(true);
        setCPasswordClass('form-control is-invalid');
      }
    }
  }, [cPassword]);

  const handleClick = e => {
    e.preventDefault();
    history.push('/login');
  };
  return (
    <div className="Login">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Username</label>
          <input
            name="username"
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={cPassword}
            name="password"
            placeholder="password"
            onChange={handleCPassword}
          />
        </div>
        {showErrorMessage && isCPasswordDirty ? (
          <div> Passwords do not match </div>
        ) : (
          ''
        )}
        <button className="primary">Create an account</button>
      </form>
      <button className="secondary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Register;
