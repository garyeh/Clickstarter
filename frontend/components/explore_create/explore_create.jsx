import React from 'react';
import { Link } from 'react-router-dom';
import CategoryModal from '../categories/category_modal';

const ExploreCreate = ({ currentUser, clearErrors }) => {
  return (<div className="leftnav">
    <span onClick={clearErrors}>
      <CategoryModal />
    </span>
    <span onClick={clearErrors}>
      <Link to="/projects/new">Start a project</Link>
    </span>
  </div>);
};

export default ExploreCreate;
