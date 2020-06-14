import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

  return (
    <div className="col-md-12 col-sm-12">
      <Hero 
      title={props.title} 
      subTitle={props.subTitle} 
      label={props.label} />
      <Carousel />
    </div>
  );

}



export default HomePage;