import React from 'react'
import Header from "./Header";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Footer from './Footer';
import GameBar from './GameBar';



function Home() {
  return (
    <div className='backgroundheh'>
      <Header />
      <ImageSlider slides={SliderData} />
      <GameBar />
      <Footer />
    </div>
  )
}

export default Home
