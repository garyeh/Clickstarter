import React from 'react';
import { Route } from 'react-router-dom';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllProjects();
  }

  render() {
    return (
      <div className="splash">
        <p>{this.props.projects.map(project => project.title)}</p>
        <img src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?dpr=2&auto=compress,format&fit=crop&w=376&h=227&q=80&cs=tinysrgb&crop=&bg=" alt="Website" />
      </div>
    );
  }
}

export default ProjectIndex;
