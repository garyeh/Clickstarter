import React from 'react';
import { Route, Link } from 'react-router-dom';

const userButtons = (detail, currentUser, deleteProject, history) => {
  let detailId = detail.creator ? detail.creator.id : 0;
  if (currentUser && detailId === currentUser.id) {
    const destroyProject = () => {
      deleteProject(detail);
    };
    return(
      <span className="userButtons">
        <Link to={`/projects/${detail.id}/edit`}><button>Edit this project</button></Link> &nbsp;
        <Link to="/"><button onClick={ destroyProject }>Delete this project</button></Link>
      </span>
    );
  } else {
    return "";
  }
};

const StatsBox = ({ detail, currentUser, deleteProject, history }) => {
  let goal = (detail.funding_goal) ? numberWithCommas(detail.funding_goal) : 0;
  let endDate = (detail.end_date) ? new Date(detail.end_date) : new Date();
  let currentDate = new Date();
  const remaining = Math.floor((endDate - currentDate) / 86400000);

  return (<div className="statbox">
      <div>
        <img src={detail.main_image_url} alt={detail.title} />
      </div>
      <div>
        <span>
          $0
        </span>
        <span>
          {`pledged of $${goal} goal`}
        </span>
        <span>
          0
        </span>
        <span>
          backers
        </span>
        <span>
          {remaining}
        </span>
        <span>
          days to go
        </span>
        <span>
          <button>Back this project</button>
        </span>
        {userButtons(detail, currentUser, deleteProject, history)}
      </div>
    </div>
  );
};

const numberWithCommas = (x) => (
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

export default StatsBox;
