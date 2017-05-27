import React from 'react';
import { Route, Link } from 'react-router-dom';
import PledgeModal from './pledge_modal';

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

const StatsBox = ({ detail, currentUser, deleteProject, history, errors }) => {
  let goal = (detail.funding_goal) ? numberWithCommas(detail.funding_goal) : 0;
  let raised = (detail.raised) ? numberWithCommas(detail.raised) : 0;
  let endDate = (detail.end_date) ? new Date(detail.end_date) : new Date();
  let currentDate = new Date();
  const remaining = Math.ceil((endDate - currentDate) / 86400000);

  return (<div className="statbox">
      <div>
        <img src={detail.main_image_url} alt={detail.title} />
      </div>
      <div>
        <span>
          {`$${raised}`}
        </span>
        <span>
          {`pledged of $${goal} goal`}
        </span>
        <span>
          {detail.num_backers}
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
          <PledgeModal detail={detail} currentUser={currentUser}
            errors={errors} history={history} />
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
