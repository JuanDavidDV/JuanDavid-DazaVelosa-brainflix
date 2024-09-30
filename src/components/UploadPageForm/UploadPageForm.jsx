import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './UploadPageForm.scss';
import publishIcon from '../../assets/icons/publish.svg'
import VideoApi from "../../utilsJs/utilsApi";

const DEFAULT_FORM_STATE = {
    title: "",
    imageUrl: "",
    description: ""
}

const UploadPageForm = () => {
    const [formDetails, setFormDetails] = useState(DEFAULT_FORM_STATE);
    const navigate = useNavigate();

    const convertImage = e => {
        const file = e.target.files[0];
        if(file) {
            const url = URL.createObjectURL(file);
            updateFormDetails('imageUrl', url)
        }
    };

    const updateFormDetails = (prop, value) => {
        setFormDetails(prevDetails => ({
            ...prevDetails,
            [prop]: value
        }));
    }

    const uploadSubmit = async event => {
        event.preventDefault();
         
        if(formDetails.title && formDetails.description) {
            const newVideo = new VideoApi();
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
        <form className="upload-form" onSubmit={uploadSubmit}>
            <div className="upload-form__container">
                <div className="upload-form__container__top">
                    <div className="upload-form__container__top__image-box">
                        <label className="upload-form__container__top__image-box__label" htmlFor="videoThumbnailUpload">VIDEO THUMBNAIL</label>
                        <div className="upload-form__container__top__image-box__sub-container">
                            <img className="upload-form__container__top__image-box__sub-container--video-thumbnail" src={formDetails.imageUrl || "http://localhost:8080/images/Upload-video-preview.jpg"} alt="videoThumbnailUpload"/>
                        </div> 
                    </div>
                    <div className="upload-form__container__top__input-box">
                        <div className="upload-form__container__top__input-box__video-title">
                            <label className="upload-form__container__top__input-box__video-title__label" htmlFor="videoUploadTitle">TITLE YOUR VIDEO</label>
                            <input className="upload-form__container__top__input-box__video-title__input" name="videoUploadTitle" onChange={(e) => updateFormDetails('title', e.target.value)} value={formDetails.title} type="text" placeholder="Add a title to your video" id="videoUploadTitle"/>
                        </div>
                        <div className="upload-form__container__top__input-box__video-description">
                            <label className="upload-form__container__top__input-box__video-description__label" htmlFor="videoUploadDescription">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload-form__container__top__input-box__video-description__input" name="videoUploadDescription" onChange={(e) => updateFormDetails('description', e.target.value)} value={formDetails.description} placeholder="Add a description to your video" type="text" id="videoUploadDescription"/>
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