import React from 'react';
import { Route } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllProjects();
  }

  render() {
    return (
      <section className="splash_content">
        <Carousel className="splash_img">
          <img src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?dpr=2&auto=compress,format&fit=crop&w=376&h=227&q=80&cs=tinysrgb&crop=&bg=" alt="Website" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg/1280px-Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg" alt="Yakety-slack" />
          <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?dpr=2&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1079&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=" alt="Pantry" />
          <img src="https://cdn.shutterstock.com/shutterstock/videos/9861461/thumb/1.jpg?i10c=img.resize(height:72)" alt="OpenGym" />
          <img src="https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg" alt="Prana" />
        </Carousel>
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
