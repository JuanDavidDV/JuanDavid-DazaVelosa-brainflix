

const HeroVideo = (props) => {

    const { heroVideoData } = props;
    console.log(heroVideoData.title);

    return (
        <section className="hero-video">
            <div className="hero-video__container">
                <h1>{heroVideoData.title}</h1>
            </div>
        </section>
    )
}

export default HeroVideo;