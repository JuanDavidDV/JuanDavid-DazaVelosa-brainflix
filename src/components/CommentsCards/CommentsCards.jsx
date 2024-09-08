import "./CommentsCards.scss";
import VideoApi from "../../utilsJs/utilsApi";
import { timeAgo } from "../../utilsJs/utilsFunctions";
import iconDelete from "../../assets/icons/icon-delete.svg";

const CommentsCards = ({ name, timestamp, comment, commentId, videoId, currentHeroComments }) => {

    const deleteComment = async (commentId) => {
        const selectedDeleteComment = new VideoApi(videoId);    //Creates instance for VideoApi class
        const deleteCommentById = await selectedDeleteComment.deleteComment(commentId); //deletes comment from API
        const comment = document.getElementById(commentId);  //selects comment by ID to be deleted in the UI
        currentHeroComments(videoId);   //Re-renders all comments to the page
        return comment.remove();    //Removes comment
    }

    return (
        <article className="comments-cards__container">
            <div className="comments-cards__container__avatar"></div>   {/*Created to add gray default avatar*/}
            <div className="comments-cards__container__user-info">
                <div className="comments-cards__container__user-info__details">
                    <h3 className="comments-cards__container__user-info__details--name">{name}</h3>
                    <div className="comments-cards__container__user-info__details__box">
                        <img className="comments-cards__container__user-info__details__box--delete-icon" src={iconDelete} onClick={() => deleteComment(commentId)}/>
                        <p className="comments-cards__container__user-info__details__box--timestamp">{timeAgo(timestamp)}</p>
                    </div>
                    
                </div>
                <p className="comments-cards__container__user-info--comment">{comment}</p>
            </div>
        </article>
    );
};

export default CommentsCards;