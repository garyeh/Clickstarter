import React from 'react';
import ProjectCarousel from './project_carousel';
import ProjectIndexItem from './project_index_item';

const isSingleCategory = (arr) => {
  let result = [];
  arr.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result.length === 1 ? true : false;
};

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllProjects();
  }

  render() {
    const projects = this.props.projects;

    return (
      <section className="backdrop">
        {
          isSingleCategory(projects.map(project => project.category)) ? "" :
          <ProjectCarousel projects={projects} />
        }
        <div className="featured">
          {
            isSingleCategory(projects.map(project => project.category)) ?
            <h2 id="categoryTitle">Projects in <span>{projects[0].category}</span></h2>
            :
            <h2>Featured projects</h2>
          }
          <ul>
            {this.props.projects.map((project, idx) => (
              <ProjectIndexItem key={idx} project={project} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProjectIndex;
