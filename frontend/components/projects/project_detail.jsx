import React from 'react';
import { Route } from 'react-router-dom';

class ProjectDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProjectDetail(this.props.match.params.projectId);
  }

  render() {
    return (
      <div>Show page temp</div>
    );
  }
}

export default ProjectDetail;
