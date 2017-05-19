import React from 'react';
import { Route, Link } from 'react-router-dom';

const StatsBox = ({ detail }) => {
  console.log(detail);
  return (<div className="statbox">
      <div>
        <img src={detail.main_image_url} alt={detail.title} />
      </div>
      <div>
        hai
      </div>
    </div>
  );
};

export default StatsBox;
