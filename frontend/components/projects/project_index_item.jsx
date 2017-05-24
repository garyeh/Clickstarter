import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

const ProjectIndexItem = ({ project }) => {
  const percentRaised = project.raised / project.funding_goal * 100;
  return (
    <li className="indexItem">
      <p>
        <Link to={`/projects/${project.id}`}>
          <img src={project.main_image_url} />
        </Link>
      </p>
      <div className="indexDetail">
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
      </div>
      <div className="indexStats">
        <Line percent={percentRaised}
          strokeWidth="1" strokeColor="#2BDE73"
          trailColor="#e6e6e6" trailWidth="1" />
      </div>
    </li>
  );
};

export default ProjectIndexItem;
