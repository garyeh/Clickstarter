import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (clearErrors) => (
  <nav className="login-signup">
    <p onClick={clearErrors}>
      <img id="searchIcon" src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_64/v1495735849/Stock/search_jsyw2o.png" />
    </p>
    <span onClick={clearErrors}><Link to="/login">Log in</Link></span>
    &nbsp;
    <span onClick={clearErrors}><Link to="/signup">Sign up</Link></span>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <img id="searchIcon" src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_64/v1495735849/Stock/search_jsyw2o.png" />
    <div className="dropdown">
      <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495160455/Stock/nav_dropdown_ren7yn.png"
      alt="User icon" height="40" width="40" className="dropbtn" />
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

const Greeting = ({ currentUser, logout, clearErrors }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(clearErrors)
);

export default Greeting;
