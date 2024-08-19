import "./CommentsSectionForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

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
                    <input className="comments__container__form__wrapper__input-comment" />
                </div>
            </form>
            </div>
        </section>
    )
}

export default CommentsSectionForm;