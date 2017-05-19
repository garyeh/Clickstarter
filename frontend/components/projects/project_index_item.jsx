import React from 'react';

const ProjectIndexItem = ({ project }) => {
  console.log(project);
  return (
    <li className="index_item">
      <p>
        <img src={project.main_image_url} />
      </p>
      <p>{project.category_id}</p>
      <p>{`${project.title}: ${project.description}`}</p>
      <p>{`by ${project.creator}`}</p>
    </li>
  );
};

export default ProjectIndexItem;
