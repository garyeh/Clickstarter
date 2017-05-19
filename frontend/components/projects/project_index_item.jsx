import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => {
  return (
    <li className="index_item">
      <p>
        <Link to={`/projects/${project.id}`}>
          <img src={project.main_image_url} />
        </Link>
      </p>
      <p>
        {project.category_id}
      </p>
      <p>
        <Link to={`/projects/${project.id}`}>
          {`${project.title}:`}
        </Link>
        <span>
          {` ${project.description}`}
        </span>
      </p>
      <p>
        {`by ${project.creator}`}
      </p>
    </li>
  );
};

export default ProjectIndexItem;
