import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import './UploadPageForm.scss';
import uploadVideoPreview from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg'
import VideoApi from "../../utilsJs/utilsApi";


const UploadPageForm = () => {

    const formRef = useRef();
    const navigate = useNavigate();

    const uploadSubmit = async event => {
        event.preventDefault();

        //Add new video details from front-end user input to the back-end server and then updates the state with the response
        const title = formRef.current.videoUploadTitle.value;
        const image = formRef.current.videoUploadImage.value;
        const description = formRef.current.videoUploadDescription.value;    
        
        const newUploadVideo = {
            title: title,
            image: image, 
            description: description
        }
         
        if(title && description) {
            const newVideo = new VideoApi();
            const newVideoPost = await newVideo.postNewVideo(newUploadVideo);
            event.target.reset();   //Clears input fields after submitting a new comment
            alert("Video has been successfully uploaded!");
            navigate("/");
        }

        if(title.length === 0) {
            formRef.current.videoUploadTitle.classList.add("upload-form__container__top__input-box__video-title__input--invalid");
        } 
        if  (description.length === 0) {
            formRef.current.videoUploadDescription.classList.add("upload-form__container__top__input-box__video-description__input--invalid");
        }
    }

    return (
        <form className="upload-form" onSubmit={uploadSubmit} ref={formRef}>
            <div className="upload-form__container">
                <div className="upload-form__container__top">
                    <div className="upload-form__container__top__image-box">
                        <label className="upload-form__container__top__image-box__label" htmlFor="videoThumbnailUpload">VIDEO THUMBNAIL</label>
                        <div className="upload-form__container__top__image-box__sub-container">
                            <img className="upload-form__container__top__image-box__sub-container--video-thumbnail" src={uploadVideoPreview} alt="videoThumbnailUpload"/>
                        </div> 
                    </div>
                    <div className="upload-form__container__top__input-box">
                        <div className="upload-form__container__top__input-box__video-title">
                            <label className="upload-form__container__top__input-box__video-title__label" htmlFor="videoUploadTitle">TITLE YOUR VIDEO</label>
                            <input className="upload-form__container__top__input-box__video-title__input" name="videoUploadTitle" type="text" placeholder="Add a title to your video" id="videoUploadTitle"/>
                        </div>
                        <div className="upload-form__container__top__input-box__video-description">
                            <label className="upload-form__container__top__input-box__video-description__label" htmlFor="videoUploadDescription">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload-form__container__top__input-box__video-description__input" name="videoUploadDescription" placeholder="Add a description to your video" type="text" id="videoUploadDescription"/>
                        </div>
                        <div className="upload-form__container__top__input-box__video-image">
                            <label className="upload-form__container__top__input-box__video-image__label" htmlFor="videoUploadChannel">VIDEO IMAGE (optional)</label>
                            <input type="file" className="upload-form__container__top__input-box__video-image--file" id="videoUploadImage" name="videoUploadImage"></input>                 
                        </div>
                    </div>
                </div>   
                <div  className="upload-form__container__options-box">
                    <button className="upload-form__container__options-box--publish-button">
                        <img className="upload-form__container__options-box--publish-button--icon" src={publishIcon}/>
                        PUBLISH
                    </button>
                    <Link to ="/"className="upload-form__container__options-box--cancel">CANCEL</Link>
                </div>
            </div>
        </form>
    )
}

export default UploadPageForm;