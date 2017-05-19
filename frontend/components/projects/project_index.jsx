import React from 'react';
import { Route } from 'react-router-dom';
import ProjectCarousel from './project_carousel';
import ProjectIndexItem from './project_index_item';
import ProjectDetailContainer from './project_detail_container';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllProjects();
  }

  render() {
    return (
      <section className="splash_content">
        <ProjectCarousel />

        <h2>Featured projects</h2>
        <ul className="featured">
          {this.props.projects.map((project, idx) => (
            <ProjectIndexItem key={idx} project={project} />
          ))}
        </ul>

        <Route path="/projects/:projectId" component={ProjectDetailContainer} />
      </section>
    );
  }
}

export default ProjectIndex;
