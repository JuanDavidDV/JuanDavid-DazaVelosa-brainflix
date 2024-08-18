import "./HeroVideoDetails.scss"

const HeroVideoDetails = (props) => {
    return (
        <section className="hero-video-details">
            <div className="hero-video-details__container">
                <h1 className="hero-video-details__container">{props.heroVideoData.title}</h1>
            </div>
        </section>
    )
}

export default HeroVideoDetails;