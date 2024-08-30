import { useState } from 'react';
import VideoData from '../../data/video-details.json';
import './HomePage.scss';
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import HeroVideoDetails from "../../components/HeroVideoDetails/HeroVideoDetails";
import CommentsSectionForm from "../../components/CommentsSectionForm/CommentsSectionForm";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

const HomePage = () => {
    const [heroVideoData, setHeroVideoData] = useState(VideoData[0]); //Creates state for Hero Video content

    const otherVideos = VideoData.filter((video) => video.id !== heroVideoData.id)  //Excludes current video being display in the Hero section from being display in the Next Video list
  
    const updateHeroVideoData = (videoId) => {  //Function sets value to "setHeroVideData" for the useState, which will be in charge to update the Hero Video content and details
      const selectVideo = VideoData.find((video) => video.id === videoId);  
      setHeroVideoData(selectVideo);  //Assigns value to setHeroVideoData
    }

    return (
        <main className="home-page">
            <HeroVideo 
                heroImage = {heroVideoData.image}
            />
            <section className="home-page__lower-section">
                <div className="home-page__lower-section--video-details">
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
                </div>
                <div className="home-page__lower-section--next-videos">
                    <NextVideos 
                        videosList = {otherVideos}
                        selectedVideo = {updateHeroVideoData}
                    />
                </div>
            </section>
        </main>
    )
}

export default HomePage;