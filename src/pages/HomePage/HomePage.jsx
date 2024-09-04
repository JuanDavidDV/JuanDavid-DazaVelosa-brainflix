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
    const [heroVideoData, setHeroVideoData] = useState(null);   //Creates state for Hero Video content
    const [nextVideoList, setNextVideoList] = useState(null);   //Creates state for next video list 

    const fetchVideoDetails = async (heroVideoId) => {
        const defaultVideosDetails = new VideoApi(heroVideoId);
        const videoDetails = await defaultVideosDetails.getVideoDetails();
        console.log(videoDetails.image);
        setHeroVideoData(videoDetails);
    };

    useEffect(() => {
        if(!videoId) {
            fetchVideoDetails(defaultVideoId);
        } else {
            fetchVideoDetails(videoId)
        }
    }, [videoId, defaultVideoId]);

    const fetchNextVideoList = async() => {
        const defaultNextVideoList = new VideoApi();
        const nextVideoList = await defaultNextVideoList.getNextVideoList();
        console.log(nextVideoList);
        setNextVideoList(nextVideoList);
    };

    useEffect(() => {
        fetchNextVideoList();
    }, [])




   //const otherVideos = VideoData.filter((video) => video.id !== heroVideoData.id)  //Excludes current video being display in the Hero section from being display in the Next Video list
  
    const updateHeroVideoData = (videoId) => {  //Function sets value to "setHeroVideData" for the useState, which will be in charge to update the Hero Video content and details
      const selectVideo = VideoData.find((video) => video.id === videoId);  
      setHeroVideoData(selectVideo);  //Assigns value to setHeroVideoData
    }

    return (
        <main className="home-page">
            {heroVideoData ? <HeroVideo heroImage = {heroVideoData.image} /> : "loading..." /*Includes a small skeleton holder showing it is loading*/} 
            <section className="home-page__lower-section">
                <div className="home-page__lower-section--video-details">
                    {heroVideoData && <HeroVideoDetails 
                        heroTitle = {heroVideoData.title}
                        heroChannel = {heroVideoData.channel}
                        heroTimestamp = {heroVideoData.timestamp}
                        heroViews = {heroVideoData.views}
                        heroLikes = {heroVideoData.likes}
                        heroDescription = {heroVideoData.description}
                        />
                    }
                    {heroVideoData && <CommentsSectionForm
                        heroCommentsNumber = {heroVideoData.comments}
                        />
                    }
                    {heroVideoData && <Comments 
                        heroComments = {heroVideoData.comments}
                        />
                    }
                </div>
                 <div className="home-page__lower-section--next-videos">
                    { nextVideoList && <NextVideos 
                        videosList = {nextVideoList}
                        //selectedVideo = {updateHeroVideoData}
                    />}
                </div>  
             </section> 
        </main>
    )
}

export default HomePage;