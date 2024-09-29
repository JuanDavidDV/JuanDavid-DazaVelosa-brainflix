import "./HeroVideo.scss";

const HeroVideo = ({ heroImage, heroVideo }) => {
    
    return (
        <section className="hero-video">
            <div className="hero-video__container">
                <video className="hero-video__container__display" 
                    src={heroVideo}
                    type="video/mp4" 
                    poster={heroImage} controls>
                </video>
            </div>
        </section>
    );
};

export default HeroVideo;