import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './UploadPageForm.scss';
import publishIcon from '../../assets/icons/publish.svg'
import VideoApi from "../../utilsJs/utilsApi";

//Creates an object containing constant values
const DEFAULT_FORM_STATE = {
    title: "",
    imageUrl: "",
    description: ""
}

const UploadPageForm = () => {
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState(DEFAULT_FORM_STATE); //Setup initial values to be empty strings

    const convertImage = e => {
        const file = e.target.files[0];
        if(file) {
            const url = URL.createObjectURL(file);  //Converts user image into URL 
            updateFormDetails('imageUrl', url);
        }
    };

    const updateFormDetails = (prop, value) => {    //Dynamic function to update title, imageUrl and description of new video
        setFormDetails(prevDetails => ({
            ...prevDetails,
            [prop]: value
        }));
    }

    const uploadVideo = async event => {
        event.preventDefault();
         
        if(formDetails.title && formDetails.description) {
            const newVideo = new VideoApi();    //Creates instance for VideoApi class
            await newVideo.postNewVideo(formDetails); 
            setFormDetails(DEFAULT_FORM_STATE); // reset form to default state
            alert("Video has been successfully uploaded!");
            navigate("/");
        }

        if(formDetails.title.length === 0) {
            event.target.videoUploadTitle.classList.add("upload-form__container__top__input-box__video-title__input--invalid");
        } 
        if  (formDetails.description.length === 0) {
            event.target.videoUploadDescription.classList.add("upload-form__container__top__input-box__video-description__input--invalid");
        }
    }

    return (
        <form className="upload-form" onSubmit={uploadVideo}>
            <div className="upload-form__container">
                <div className="upload-form__container__top">
                    <div className="upload-form__container__top__image-box">
                        <label className="upload-form__container__top__image-box__label" htmlFor="videoThumbnailUpload">VIDEO THUMBNAIL</label>
                        <div className="upload-form__container__top__image-box__sub-container">
                            <img className="upload-form__container__top__image-box__sub-container--video-thumbnail" src={formDetails.imageUrl || "https://brainflix-api12-20dc90ca1c11.herokuapp.com/images/Upload-video-preview.jpg"} alt="videoThumbnailUpload"/>
                        </div> 
                    </div>
                    <div className="upload-form__container__top__input-box">
                        <div className="upload-form__container__top__input-box__video-title">
                            <label className="upload-form__container__top__input-box__video-title__label" htmlFor="videoUploadTitle">TITLE YOUR VIDEO</label>
                            <input className="upload-form__container__top__input-box__video-title__input" name="videoUploadTitle" onChange={(e) => updateFormDetails('title', e.target.value) /*Updates title information when entered*/} value={formDetails.title /*value for new video title*/} type="text" placeholder="Add a title to your video" id="videoUploadTitle"/>
                        </div>
                        <div className="upload-form__container__top__input-box__video-description">
                            <label className="upload-form__container__top__input-box__video-description__label" htmlFor="videoUploadDescription">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload-form__container__top__input-box__video-description__input" name="videoUploadDescription" onChange={(e) => updateFormDetails('description', e.target.value) /*Updates description when entered*/} value={formDetails.description /*value for new video description*/} placeholder="Add a description to your video" type="text" id="videoUploadDescription"/>
                        </div>
                        <div className="upload-form__container__top__input-box__video-image">
                            <label className="upload-form__container__top__input-box__video-image__label" htmlFor="videoUploadChannel">VIDEO IMAGE (optional)</label>
                            <input className="upload-form__container__top__input-box__video-image--file" type="file" onChange={convertImage} id="videoUploadImage" name="videoUploadImage"/>                 
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