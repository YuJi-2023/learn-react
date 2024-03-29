import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../../assests/HomePageSlides/slide_1.jpg";
import slide_2 from "../../assests/HomePageSlides/slide_2.jpg";
import slide_3 from "../../assests/HomePageSlides/slide_3.jpg";
import { Container } from "react-bootstrap";
const AboutUs = () => {
  return (
    <>
      <Container className="bg-primary px-5 d-block w-50" fluid>
        <Carousel className="py-5">
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={slide_1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Self-guided Learning</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={slide_2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>A Good Learner</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src={slide_3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3> Be Responsible</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default AboutUs;
