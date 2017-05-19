import React from "react";
import { Link } from "react-router";
import Carousel from "nuka-carousel";

const ProjectCarousel = () => (
  <Carousel className="splash_img" wrapAround={true} autoplay={true} autoplayInterval={5000}>
    <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161948/Splash_ebort9.jpg" alt="Website" />
    <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161000/Yakety-slack_iajgln.jpg" alt="Yakety-slack" />
    <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161001/Pantry_adfpkv.jpg" alt="Pantry" />
    <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495161000/OpenGym_miycjc.jpg" alt="OpenGym" />
    <img src="https://res.cloudinary.com/dbxwu45pr/image/upload/v1495046731/hero-2_hiyzq5.jpg" alt="Prana" />
  </Carousel>
);

export default ProjectCarousel;
