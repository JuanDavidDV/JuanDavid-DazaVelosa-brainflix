import { useState } from 'react';
import VideoData from './data/video-details.json';
import './App.css';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo'; 
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails';
import CommentsSectionForm from './components/CommentsSectionForm/CommentsSectionForm';
import Comments from './components/Comments/Comments';

function App() {
  const [heroVideoData, setHeroVideoData] = useState(VideoData[0]);
  
  return (
    <>
      <Header />
      <HeroVideo heroVideoData = {heroVideoData}/>
      <HeroVideoDetails heroVideoData = {heroVideoData}/> 
      <CommentsSectionForm heroVideoData = {heroVideoData}/>
      <Comments heroVideoData = {heroVideoData.comments} />
    </>
  )
}

export default App
