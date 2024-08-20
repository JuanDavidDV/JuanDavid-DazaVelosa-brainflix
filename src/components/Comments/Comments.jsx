import CommentsCards from "../CommentsCards/CommentsCards"
import './Comments.scss';
import { timeAgo } from "../HeroVideoDetails/HeroVideoDetails";

const Comments = (props) => {

    return (
        <section className="comments">
            <div className="comments__container">
                <ul className="comments__container__content">
                    {props.heroVideoData.map((comment) => (
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
    )
}

export default Comments;