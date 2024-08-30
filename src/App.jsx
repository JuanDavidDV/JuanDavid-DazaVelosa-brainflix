import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoData from './data/video-details.json';
import './App.scss';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo'; 
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails';
import CommentsSectionForm from './components/CommentsSectionForm/CommentsSectionForm';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';

function App() { 
  const [heroVideoData, setHeroVideoData] = useState(VideoData[0]); //Creates state for Hero Video content

  const otherVideos = VideoData.filter((video) => video.id !== heroVideoData.id)  //Excludes current video being display in the Hero section from being display in the Next Video list

  const updateHeroVideoData = (videoId) => {  //Function sets value to "setHeroVideData" for the useState, which will be in charge to update the Hero Video content and details
    const selectVideo = VideoData.find((video) => video.id === videoId);  
    setHeroVideoData(selectVideo);  //Assigns value to setHeroVideoData
  }

return (
    <main className="app">
      <Header />  {/*REMEMBER TO CHANGE CODE STRUCUTURE, USING <HEADER> FIRST AND THEN <MAIN>*/}
      <HeroVideo heroImage = {heroVideoData.image} />
      <section className="app__lower-section">
        <div className="app__lower-section--video-details">
          <HeroVideoDetails 
              heroTitle = {heroVideoData.title}
              heroChannel = {heroVideoData.channel}
              heroTimestamp = {heroVideoData.timestamp}
              heroViews = {heroVideoData.views}
              heroLikes = {heroVideoData.likes}
              heroDescription = {heroVideoData.description}
          />
          <CommentsSectionForm heroCommentsNumber = {heroVideoData.comments} /> {/*CHECK FOR LABEL SIZE IN ALL DISPLAYS!!! */}
          <Comments heroComments = {heroVideoData.comments} />
        </div>
        <div className="app__lower-section--next-videos">
          <NextVideos 
            videosList={otherVideos}
            selectedVideo={updateHeroVideoData}
          />
        </div>
      </section>
    </main>
  );
};

export default App