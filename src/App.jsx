import { useState } from 'react';
import VideoData from './data/video-details.json';
import './App.css';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo'; 

function App() {
  return (
    <>
      <Header />
      <HeroVideo />
    </>
  )
}

export default App
