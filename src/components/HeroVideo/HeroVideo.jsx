import "./HeroVideo.scss";

const HeroVideo = ({ heroImage }) => {

    return (
        <section className="hero-video">
            <div className="hero-video__container">
                <video className="hero-video__container__display"
                    poster={heroImage}
                    controls>
    
                </video>
            </div>
        </section>
    );
};

export default HeroVideo;