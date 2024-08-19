import "./CommentsSectionForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";

const CommentsSectionForm = (props) => {
    return (
        <section className="comment">
            <div className="comment__container">
                <h3 className="comment__container--total-comments">{props.heroVideoData.comments.length} Comments</h3>
            <form className="comment__container__form">
                <div className="comment__container__form__box-left">
                    <img className="comment__container__form__box-left__avatar" src={avatar}/>
                </div>
                <div className="comment__container__form__wrapper">
                    <label className="comment__container__form__wrapper__label-comment" htmlFor="inputUserComment">
                        JOIN THE CONVERSATION
                    </label>
                    <textarea className="comment__container__form__wrapper__input-comment" name="inputUserComment" placeholder="Add a new comment"/>
                    <button className="comment__container__form__wrapper__button">
                        <img className="comment__container__form__wrapper__button--icon" src={addCommentIcon} alt="comment-icon"/>
                        COMMENT
                    </button>
                </div>
            </form>
            </div>
        </section>
    )
}

export default CommentsSectionForm;