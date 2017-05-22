import React from 'react';
import { Route, Link } from 'react-router-dom';
import TitleBox from './title_box';
import StatsBox from './stats_box';
import RewardsBox from './rewards_box';

class ProjectDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProjectDetail(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
      this.props.requestSingleProject(nextProps.match.params.projectId);
    }
  }

  render() {
    scroll(0,0);
    const detail = this.props.projectDetail;
    const currentUser = this.props.currentUser;
    return (
      <div>
        <TitleBox detail={detail} />
        <StatsBox detail={detail} currentUser={currentUser} deleteProject={this.props.deleteProject} history={this.props.history} />
        <RewardsBox detail={detail} currentUser={currentUser} />
      </div>
    );
  }
}

export default ProjectDetail;
