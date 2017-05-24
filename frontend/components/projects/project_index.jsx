import React from 'react';
import ProjectCarousel from './project_carousel';
import ProjectIndexItem from './project_index_item';

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
      </section>
    );
  }
}

export default ProjectIndex;
