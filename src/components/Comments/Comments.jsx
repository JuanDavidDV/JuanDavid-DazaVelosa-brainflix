import CommentsCards from "../CommentsCards/CommentsCards";
import './Comments.scss';

const Comments = ({ heroComments, currentVideoId, currentComments }) => {
const sortComments = [...heroComments].sort((a ,b) => b.timestamp - a.timestamp);   //Sort comments chronologically from newest to oldest 
    return (
        <section className="comments">
            <div className="comments__container">
                <ul className="comments__container__content">
                    {sortComments.map((comment) => (    //Returns an array of the current comments from the Hero Video selected sorted from newest to oldest
                        <li className="comments__container__content__list" key={comment.id}>
                            <CommentsCards 
                                name={comment.name}
                                timestamp={comment.timestamp}
                                comment={comment.comment}
                                commentId={comment.id}
                                videoId={currentVideoId}
                                currentHeroComments={currentComments}
                            />
                        </li>
                    ))}
                </ul>
                <div className="comments__divider__bottom--tablet"></div>
            </div>
        </section>
    );
};

export default Comments;