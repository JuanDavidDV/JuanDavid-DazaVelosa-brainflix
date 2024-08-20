import { useState } from 'react';
import VideoData from './data/video-details.json';
import './App.css';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo'; 
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails';
import CommentsSectionForm from './components/CommentsSectionForm/CommentsSectionForm';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';

function App() {
  const [heroVideoData, setHeroVideoData] = useState(VideoData[0]);

  const otherVideos = VideoData.filter((video) => video.id !== heroVideoData.id)

  console.log(otherVideos)
  
return (
    <>
      <Header />
      <HeroVideo 
          heroImage = {heroVideoData.image}
      />
      <HeroVideoDetails 
          heroTitle = {heroVideoData.title}
          heroChannel = {heroVideoData.channel}
          heroTimestamp = {heroVideoData.timestamp}
          heroViews = {heroVideoData.views}
          heroLikes = {heroVideoData.likes}
          heroDescription = {heroVideoData.description}
      />
      <CommentsSectionForm 
          heroCommentsNumber = {heroVideoData.comments}
      />
      <Comments 
          heroComments = {heroVideoData.comments} 
      />
      <NextVideos videos={otherVideos}/>
    </>
  );
};

export default App
