import React from 'react';
import { Link } from 'react-router-dom';

const ExploreCreate = ({ currentUser, clearErrors }) => {
  return (<div className="leftnav">
    <span onClick={clearErrors}>
      <Link to="/categories"><img src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_256/v1495236703/Stock/Compass_rywdvr.png" alt="Explore" />Explore</Link>
    </span>
    <span onClick={clearErrors}>
      <Link to="/projects/new">Start a project</Link>
    </span>
  </div>);
};

export default ExploreCreate;
