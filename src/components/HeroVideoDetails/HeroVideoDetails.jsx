import "./HeroVideoDetails.scss";
import { timeAgo } from "../../utilsJs/utilsFunctions";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const HeroVideoDetails = ({ heroTitle, heroChannel, heroTimestamp, heroViews, heroLikes, heroDescription }) => {

    return (
        <section className="hero-video-details">
            <div className="hero-video-details__container">
                <h1 className="hero-video-details__container--title">{heroTitle}</h1> 
                <div className="hero-video-details__container__box">
                    <div className="hero-video-details__container__box--one">
                        <h3 className="hero-video-details__container__box--one--author">By {heroChannel}</h3>
                        <p className="hero-video-details__container__box--one--date">{timeAgo(heroTimestamp)}</p>
                    </div>
                    <div className="hero-video-details__container__box--two">
                        <div className="hero-video-details__container__box--two__views-info">
                            <img className="hero-video-details__container__box--two__views-info--icon" src={viewsIcon} alt="views-icon"/>
                            <p className="hero-video-details__container__box--two__views-info--numbers">{heroViews}</p>
                        </div>
                        <div className="hero-video-details__container__box--two__likes-info">
                            <img className="hero-video-details__container__box--two__likes-info--icon" src={likesIcon} alt="likes-icon"/>
                            <p className="hero-video-details__container__box--two__likes-info--numbers">{heroLikes}</p>
                        </div>
                    </div>
                </div>
                <p className="hero-video-details__container--video-description">{heroDescription}</p>
            </div>
        </section>
    );
};

export default HeroVideoDetails;