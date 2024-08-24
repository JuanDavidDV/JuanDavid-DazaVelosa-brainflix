import "./CommentsCards.scss";
import { timeAgo } from "../HeroVideoDetails/HeroVideoDetails";

const CommentsCards = ({ name, timestamp, comment }) => {
    return (
        <article className="comments-cards__container">
            <div className="comments-cards__container__avatar"></div>   {/*Created to add gray default avatar*/}
            <div className="comments-cards__container__user-info">
                <div className="comments-cards__container__user-info__details">
                    <h3 className="comments-cards__container__user-info__details--name">{name}</h3>
                    <p className="comments-cards__container__user-info__details--timestamp">{timeAgo(timestamp)}</p>
                </div>
                <p className="comments-cards__container__user-info--comment">{comment}</p>
            </div>
        </article>
    );
};

export default CommentsCards;