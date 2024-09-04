import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import VideoApi from '../../data/utils';
import './HomePage.scss';
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import HeroVideoDetails from "../../components/HeroVideoDetails/HeroVideoDetails";
import CommentsSectionForm from "../../components/CommentsSectionForm/CommentsSectionForm";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

const HomePage = () => {
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
    const { videoId } = useParams();

    const [heroVideoData, setHeroVideoData] = useState(null); //Creates state for Hero Video content

    const fetchVideoDetails = async (heroVideoId) => {
        const defaultVideosDetails = new VideoApi(heroVideoId);
        const details = await defaultVideosDetails.getVideoDetails();
        console.log(details.image);
        setHeroVideoData(details);
    }

    useEffect(() => {
        if(!videoId) {
            fetchVideoDetails(defaultVideoId);
        } else {
            fetchVideoDetails(videoId)
        }
    }, [])

    useEffect(() => {
        console.log(heroVideoData, "test");
    }, [heroVideoData]);


console.log(heroVideoData)


       
   //const otherVideos = VideoData.filter((video) => video.id !== heroVideoData.id)  //Excludes current video being display in the Hero section from being display in the Next Video list
  
    const updateHeroVideoData = (videoId) => {  //Function sets value to "setHeroVideData" for the useState, which will be in charge to update the Hero Video content and details
      const selectVideo = VideoData.find((video) => video.id === videoId);  
      setHeroVideoData(selectVideo);  //Assigns value to setHeroVideoData
    }



    return (
        <main className="home-page">
            
            {heroVideoData ? <HeroVideo heroImage = {heroVideoData.image} /> : ""}

            {/* <section className="home-page__lower-section">
                <div className="home-page__lower-section--video-details">
                    <HeroVideoDetails 
                        heroTitle = {heroVideoData.title}
                        heroChannel = {heroVideoData.channel}
                        //heroTimestamp = {heroVideoData.timestamp}
                        //heroViews = {heroVideoData.views}
                        //heroLikes = {heroVideoData.likes}
                        //heroDescription = {heroVideoData.description}
                    />
                    <CommentsSectionForm
                        //heroCommentsNumber = {heroVideoData.comments}
                    />
                    <Comments 
                        //heroComments = {heroVideoData.comments}
                    />
                </div>
                 <div className="home-page__lower-section--next-videos">
                    <NextVideos 
                        //videosList = {otherVideos}
                        //selectedVideo = {updateHeroVideoData}
                    />
                </div>  
             </section>  */}
        </main>
    )
}

export default HomePage;