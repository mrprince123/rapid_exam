import React from 'react';
import './courses.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../../components/Card/Card';
import { courseData,responsive } from '../../data';

const Courses = () => {

  const course = courseData.map((item) => (
    <Card
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
    <h1>Courses</h1>
    <Carousel showDots={true} responsive={responsive}>
      {course}
    </Carousel>
  </div>
  )}

export default Courses