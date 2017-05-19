import React from 'react';
import { Route } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import ProjectIndexItem from './project_index_item';
import ProjectDetailContainer from './project_detail_container';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllProjects();
  }

  render() {
    return (
      <section className="splash_content">
        <Carousel className="splash_img">
          <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161948/Splash_ebort9.jpg" alt="Website" />
          <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161000/Yakety-slack_iajgln.jpg" alt="Yakety-slack" />
          <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161001/Pantry_adfpkv.jpg" alt="Pantry" />
          <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161000/OpenGym_miycjc.jpg" alt="OpenGym" />
          <img src="https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg" alt="Prana" />
        </Carousel>

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
