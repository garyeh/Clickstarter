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
    <div className="dropdown">
      <img src="http://findicons.com/files/icons/104/orb/128/6.png"
      alt="User icon" height="42" width="42" className="dropbtn" />
      <div className="dropdown-content">
        <p>Your Profile</p>
        <p>You're logged in as <span>{currentUser.username}</span>
          <button className="header-button" onClick={logout}>
            Log Out</button>
        </p>
      </div>
    </div>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
