import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import BeforeAfter from '../components/BeforeAfter';

function Home() {
  return (
    <main>
      <Hero />
      <OurStory />
      <Gallery />
      <Testimonials />
      <BeforeAfter />
    </main>
  );
}

export default Home;
