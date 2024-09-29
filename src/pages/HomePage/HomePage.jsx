import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import VideoApi from '../../utilsJs/utilsApi';  //Imports API js class for calls using Axios
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

    const fetchVideoDetails = async (heroVideoId) => {  //Function created to get HeroVideo details
        const defaultVideosDetails = new VideoApi(heroVideoId); //Creates instance for VideoApi class
        const videoDetailsData = await defaultVideosDetails.getVideoDetails();  //Returns video details after API "get" call
        setHeroVideoData(videoDetailsData);
    };

    useEffect(() => {
        if(!videoId) {
            fetchVideoDetails(defaultVideoId);
        } else {
            fetchVideoDetails(videoId);
        }
    }, [videoId, defaultVideoId]);  //useEffect occurs when either defaultVideoId and/or videoId re-renders

    const fetchNextVideoList = async() => { //Function created to get array of videos to be used under the "Next Videos section"
        const defaultNextVideoList = new VideoApi();    //Creates instance for VideoApi class
        const nextVideoListData = await defaultNextVideoList.getNextVideoList();    //Returns next videos
        setNextVideoList(nextVideoListData);

    };

    useEffect(() => {
        fetchNextVideoList();
    }, []);

    return (
        <main className="home-page">
            {heroVideoData ? <HeroVideo 
                heroImage = {heroVideoData.image}
                heroVideo = {heroVideoData.video} /> : "loading..." /*Includes a small skeleton holder showing it is loading*/} 
            <section className="home-page__lower-section">
                <div className="home-page__lower-section--video-details">
                    {heroVideoData && <HeroVideoDetails 
                        heroTitle = {heroVideoData.title}
                        heroChannel = {heroVideoData.channel}
                        heroTimestamp = {heroVideoData.timestamp}
                        heroViews = {heroVideoData.views}
                        heroLikes = {heroVideoData.likes}
                        heroDescription = {heroVideoData.description}
                        heroVideoId = {heroVideoData.id}
                        />
                    }
                    {heroVideoData && <CommentsSectionForm
                        heroCommentsNumber = {heroVideoData.comments}
                        currentVideoId = {heroVideoData.id}
                        heroComments = {fetchVideoDetails}
                        />
                    }
                    {heroVideoData && <Comments 
                        heroComments = {heroVideoData.comments}
                        currentVideoId = {heroVideoData.id}
                        currentComments = {fetchVideoDetails}
                        />
                    }
                </div>
                 <div className="home-page__lower-section--next-videos">
                    {nextVideoList && heroVideoData && <NextVideos 
                        videosList = {nextVideoList}
                        currentVideoId = {heroVideoData.id}
                    />}
                </div>  
             </section> 
        </main>
    )
}

export default HomePage;