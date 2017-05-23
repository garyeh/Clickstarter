import React from 'react';
import { Route, Link } from 'react-router-dom';
import RewardDetail from './reward_detail';

class RewardsBox extends React.Component {


  render() {
    let rewards = this.props.detail.rewards ? this.props.detail.rewards : [];
    return (<div className="rewardsBox">
        <div>
          <h2>About this project</h2>
          <p>{this.props.detail.details}</p>
        </div>

        <div>
          <h2>Support this project</h2>
          <p>
            {rewards.map(reward => (
              <RewardDetail reward={reward} deleteReward={this.props.deleteReward} />
            ))}
          </p>
        </div>
      </div>
    );
  }
}

export default RewardsBox;
