import React from 'react';
import { Link } from 'react-router-dom';
import SearchModal from './search/search_modal';

const sessionLinks = (clearErrors) => (
  <nav className="login-signup">
    <p onClick={clearErrors}>
      <SearchModal />
    </p>
    <span onClick={clearErrors}><Link to="/login">Log in</Link></span>
    &nbsp;
    <span onClick={clearErrors}><Link to="/signup">Sign up</Link></span>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <SearchModal />
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
