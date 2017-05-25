import React from 'react';
import { Link } from 'react-router-dom';
import CategoryModalContainer from '../categories/category_modal_container';

const ExploreCreate = ({ currentUser, clearErrors }) => {
  return (<div className="leftnav">
    <span onClick={clearErrors}>
      <CategoryModalContainer />
    </span>
    <span onClick={clearErrors}>
      <Link to="/projects/new">Start a project</Link>
    </span>
  </div>);
};

export default ExploreCreate;
