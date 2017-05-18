import React from 'react';

const ProjectIndexItem = ({ project }) => (
  <li>
    <p>Image placeholder</p>
    <p>{project.category_id}</p>
    <p>{`${project.title}: ${project.description}`}</p>
    <p>{project.creator_id}</p>
  </li>
);

export default ProjectIndexItem;
