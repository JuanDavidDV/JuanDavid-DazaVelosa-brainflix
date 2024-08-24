import "./HeroVideoDetails.scss";
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

//Function creates a dynamic timestamp
export const timeAgo = (timeStampAgo) => {
    let actualDate = new Date();
    let secondsAgo = (actualDate.getTime() - timeStampAgo) / 1000;
        if (secondsAgo < 30) {
            return "Just now";
        } else if(secondsAgo < 60) {
            return parseInt(secondsAgo) + " sec ago";
        } else if (secondsAgo < 3600) {
            return parseInt(secondsAgo / 60) + " min ago";
        } else if (secondsAgo <= 86400) {
            return parseInt(secondsAgo / 3600) + " hours ago";
        } else if (secondsAgo <= 2628000) {
            return parseInt(secondsAgo / 86400) + " days ago";
        } else if (secondsAgo <= 31536000) {
            return parseInt(secondsAgo / 2628000) + " months ago";
        } else if (secondsAgo > 31536000) {
            return parseInt(secondsAgo / 31536000) + " year ago";
        }
};