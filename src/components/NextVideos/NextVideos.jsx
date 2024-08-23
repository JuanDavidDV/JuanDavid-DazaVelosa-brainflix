import NextVideosCards from "../NextVideosCards/NextVideosCards";
import "./NextVideos.scss"

const NextVideos = ({ videos, selectedVideo }) => {

    return (
        <section className="next-videos">
            <div className="next-videos__container">
                <p className="next-videos__container__section-title">NEXT VIDEOS</p>
                <ul className="next-videos__container__content">
                    {videos.map((video) => (
                        <li className="next-videos__container__content__list" key={video.id}>
                            <NextVideosCards 
                                nextVideoImage = {video.image}
                                nextVideoTitle = {video.title}
                                nextVideoChannel = {video.channel}
                                onClick = {() => selectedVideo(video.id)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default NextVideos;