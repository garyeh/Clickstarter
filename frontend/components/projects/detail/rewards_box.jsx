import React from 'react';
import { Route, Link } from 'react-router-dom';

class RewardsBox extends React.Component {
  render() {
    console.log(this.props);
    return (<div className="rewardsBox">
        <div>
          <h2>About this project</h2>
          <p>{this.props.detail.details}</p>
        </div>
        <div>
          <h2>Support this project</h2>
          <p>Hai</p>
        </div>
      </div>
    );
  }
}

export default RewardsBox;
