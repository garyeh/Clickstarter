import React from 'react';
import { Route, Link } from 'react-router-dom';
import TitleBox from './title_box';
import StatsBox from './stats_box';
import RewardsBox from './rewards_box';

class ProjectDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProjectDetail(this.props.match.params.projectId);
  }

  render() {
    const detail = this.props.projectDetail;
    return (
      <div>
        <TitleBox detail={detail} />
        <StatsBox detail={detail} />
        <RewardsBox detail={detail} />
      </div>
    );
  }
}

export default ProjectDetail;
