import "./CommentsCards.scss";
import { timeAgo } from "../HeroVideoDetails/HeroVideoDetails";
import iconDelete from "../../assets/icons/icon-delete.svg"

const CommentsCards = ({ name, timestamp, comment, commentId }) => {

    return (
        <article className="comments-cards__container">
            <div className="comments-cards__container__avatar"></div>   {/*Created to add gray default avatar*/}
            <div className="comments-cards__container__user-info">
                <div className="comments-cards__container__user-info__details">
                    <h3 className="comments-cards__container__user-info__details--name">{name}</h3>
                    <div className="comments-cards__container__user-info__details__box">
                        <img className="comments-cards__container__user-info__details__box--delete-icon" src={iconDelete}/>
                        <p className="comments-cards__container__user-info__details__box--timestamp">{timeAgo(timestamp)}</p>
                    </div>
                    
                </div>
                <p className="comments-cards__container__user-info--comment">{comment}</p>
            </div>
        </article>
    );
};

export default CommentsCards;