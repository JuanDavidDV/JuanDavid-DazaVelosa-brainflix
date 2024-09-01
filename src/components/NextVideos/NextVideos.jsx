import { Link } from "react-router-dom";
import NextVideosCards from "../NextVideosCards/NextVideosCards";
import "./NextVideos.scss";

const NextVideos = ({ videosList, selectedVideo }) => {

    return (
        <section className="next-videos">
            <div className="next-videos__container">
                <p className="next-videos__container__section-title">NEXT VIDEOS</p>
                <div className="next-videos__container__content">
                    {videosList.map((video) => (
                        <Link className="next-videos__container__content__list" key={video.id} to={`/videos/${video.id}`}>
                                <NextVideosCards 
                                    nextVideoImage = {video.image}
                                    nextVideoTitle = {video.title}
                                    nextVideoChannel = {video.channel}
                                />                   
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NextVideos;