import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

const ProjectIndexItem = ({ project }) => {
  const percentRaised = Math.floor(project.raised / project.funding_goal * 100);
  const raised = numberWithCommas(project.raised);
  const endDate = new Date(project.end_date);
  const currentDate = new Date();
  const remaining = numberWithCommas(Math.floor((endDate - currentDate) / 86400000));
  const percentWithCap = Math.min(percentRaised, 100);

  return (
    <li className="indexItem">
      <p>
        <Link to={`/projects/${project.id}`}>
          <img src={project.main_image_url} />
        </Link>
      </p>
      <div className="indexDetail">
        <p>
          {project.category}
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
        <Line percent={percentWithCap}
          strokeWidth="2" strokeColor="#2BDE73"
          trailColor="#e6e6e6" trailWidth="2" />
        <p><span>{`$${raised} `}</span><span>pledged</span></p>
        <p><span>{`${percentRaised}% `}</span><span>funded</span></p>
        <p><span>{`${remaining} `}</span><span>days to go</span></p>
      </div>
    </li>
  );
};

const numberWithCommas = (x) => (
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

export default ProjectIndexItem;
