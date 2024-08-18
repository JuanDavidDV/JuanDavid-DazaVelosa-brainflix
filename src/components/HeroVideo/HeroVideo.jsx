import "./HeroVideo.scss";

const HeroVideo = (props) => {
    return (
        <section className="hero-video">
            <div className="hero-video__container">
                <video className="hero-video__container__display"
                    poster={props.heroVideoData.image}
                    controls>
    
                </video>
            </div>
        </section>
    )
}

export default HeroVideo;