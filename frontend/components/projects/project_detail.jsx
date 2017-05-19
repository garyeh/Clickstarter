import React from 'react';
import { Route, Link } from 'react-router-dom';

class ProjectDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProjectDetail(this.props.match.params.projectId);
  }

  render() {
    return (
      <Link to="/">Show page temp</Link>
    );
  }
}

export default ProjectDetail;
