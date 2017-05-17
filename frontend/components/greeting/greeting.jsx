import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <span><Link to="/login">Log in</Link></span>
    &nbsp;
    <span><Link to="/signup">Sign up</Link></span>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <img src="http://findicons.com/files/icons/104/orb/128/6.png"
      alt="User icon" height="42" width="42" />
    <h2 className="header-name">Hi, {currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
