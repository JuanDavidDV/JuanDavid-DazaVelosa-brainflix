import VideoData from '../../data/video-details.json';

const HeroVideo = (VideoData) => {
    return (
        <section className="hero-video">
            <div className="hero-video__container">
                <h1>Hello {VideoData.title}</h1>
            </div>
        </section>
    )
}

export default HeroVideo;