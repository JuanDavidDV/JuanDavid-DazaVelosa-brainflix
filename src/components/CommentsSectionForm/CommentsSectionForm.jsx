import VideoApi from "../../data/utilsApi";
import "./CommentsSectionForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg";

const CommentsSectionForm = ({ heroCommentsNumber, currentVideoId, heroComments }) => {
    const uploadComment = async event => {
        event.preventDefault(); //Prevents page to reload
        const newVideoComment = event.target.inputUserComment.value;
        console.log(newVideoComment)

        const newCommentObject = {
            name: "BrainFlix",
            comment: newVideoComment
            }

        if(newVideoComment !== "") {
            const newComment = new VideoApi(currentVideoId);
            const newCommentPost = await newComment.postComment(newCommentObject); //post new comment to API
            heroComments(currentVideoId);
            event.target.reset();
        } 
        if (newVideoComment.length === 0){
            event.target.inputUserComment.classList.add("comment-input__container__form__wrapper__ui__input-comment--invalid");
        } else {
            event.target.inputUserComment.classList.remove("comment-input__container__form__wrapper__ui__input-comment--invalid");
        }
    }

    return (
        <section className="comment-input">
            <div className="comment-input__container">
                <h3 className="comment-input__container--total-comments">{heroCommentsNumber.length} Comments</h3>
                <form className="comment-input__container__form" onSubmit={uploadComment}>
                    <img className="comment-input__container__form__avatar" src={avatar} alt="avatar"/>
                    <div className="comment-input__container__form__wrapper">
                        <div className="comment-input__container__form__wrapper__ui">
                            <label className="comment-input__container__form__wrapper__ui__label-comment" htmlFor="inputUserComment">
                                    JOIN THE CONVERSATION
                            </label>
                            <textarea className="comment-input__container__form__wrapper__ui__input-comment" name="inputUserComment" placeholder="Add a new comment" type="text" id="inputUserComment"/>
                        </div>  
                        <button className="comment-input__container__form__wrapper__button">
                            <img className="comment-input__container__form__wrapper__button--icon" src={addCommentIcon} alt="comment-icon"/>
                            COMMENT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CommentsSectionForm;