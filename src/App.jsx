import { useState } from 'react';
import VideoData from './data/video-details.json';
import './App.css';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo'; 

function App() {
  const [heroVideoData, displayVideoData] = useState(VideoData[0]);
  
  return (
    <>
      <Header />
      <HeroVideo heroVideoData = {heroVideoData}/>
    </>
  )
}

export default App
