import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

const ProjectCarousel = () => (
  <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} decorators={Decorators}>
    <div className="project-carousel-slide">
      <h1>Build a website. Get funded.</h1>
      <h2>Clickstarter creators pursue bold ideas online — showcase your project and get funded today!</h2>
      <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_720/v1495216601/Stock/Splash_emwijn.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>Yakety-slack</h1>
      <h2>Whatever work means for you, Yak brings all the pieces and people you need together so you can actually get things done.</h2>
      <a href="#/projects/3"><button>View project</button></a>
      <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161000/Stock/Yakety-slack_iajgln.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>Prana</h1>
      <h2>Prana is the easiest way for teams to track their work — and get results.</h2>
      <a href="#/projects/2"><button>View project</button></a>
      <img src="https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>MyPantry</h1>
      <h2>For cooking enthusiasts - a website that keeps track of your pantry so you don't have to!</h2>
      <a href="#/projects/4"><button>View project</button></a>
      <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_720/v1495161001/Stock/Pantry_adfpkv.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>Linterest</h1>
      <h2>Your catalog of ideas</h2>
      <a href="#/projects/1"><button>View project</button></a>
      <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/c_scale,w_720/v1495418437/Stock/linterest.png" />
    </div>
  </Carousel>
);

export default ProjectCarousel;
