import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesSplit2 from '../components/sections/FeaturesSplit2';
import FeaturesSplit3 from '../components/sections/FeaturesSplit3';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <FeaturesSplit2 invertMobile topDivider imageFill className="illustration-section-02" /> */}
      <FeaturesTiles />
      {/* <FeaturesSplit3 invertMobile topDivider imageFill className="illustration-section-02" /> */}
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
}

export default Home;