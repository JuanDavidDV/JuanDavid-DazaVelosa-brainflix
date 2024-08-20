import CommentsCards from "../CommentsCards/CommentsCards"
import './Comments.scss';

const Comments = ({ heroComments }) => {

    return (
        <section className="comments">
            <div className="comments__container">
                <ul className="comments__container__content">
                    {heroComments.map((comment) => (
                        <li className="comments__container__content__list" key={comment.id}>
                            <CommentsCards 
                                name={comment.name}
                                timestamp={comment.timestamp}
                                comment={comment.comment}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Comments;