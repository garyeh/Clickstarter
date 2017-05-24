import React from 'react';
import { Route, Link } from 'react-router-dom';
import TitleBox from './title_box';
import StatsBox from './stats_box';
import RewardsBox from './rewards_box';

class ProjectDetail extends React.Component {
  componentDidMount() {
    scroll(0,0);
    this.props.fetchProjectDetail(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
      this.props.requestSingleProject(nextProps.match.params.projectId);
    }
  }

  componentWillUnmount() {
    this.props.clearPledgeErrors();
  }

  render() {
    const detail = this.props.projectDetail;
    const currentUser = this.props.currentUser;
    return (
      <div>
        <TitleBox detail={detail} />

        <StatsBox detail={detail} currentUser={currentUser}
          deleteProject={this.props.deleteProject}
          history={this.props.history}
          errors={this.props.errors} />

        <RewardsBox detail={detail} currentUser={currentUser}
          createReward={this.props.createReward}
          deleteReward={this.props.deleteReward}
          fetchProjectDetail={this.props.fetchProjectDetail}
          createPledge={this.props.createPledge}
          clearPledgeErrors={this.props.clearPledgeErrors}
          errors={this.props.errors}
          history={this.props.history}
          clearRewardErrors={this.props.clearRewardErrors} />
      </div>
    );
  }
}

export default ProjectDetail;
