import './UploadPageForm.scss';
import uploadVideoPreview from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/icons/publish.svg'

const UploadPageForm = () => {
    return (
        <form className="upload-form">
            <div className="upload-form__container">
                <div className="upload-form__container__image-box">
                    <label className="upload-form__container__image-box__label" htmlFor="videoThumbnailUpload">VIDEO THUMBNAIL</label>
                    <div className="upload-form__container__image-box__sub-container">
                        <img className="upload-form__container__image-box__sub-container--video-thumbnail" src={uploadVideoPreview} alt="videoThumbnailUpload"/>
                    </div> 
                </div>
                <div className="upload-form__container__input-box">
                    <div className="upload-form__container__input-box__video-title">
                        <label className="upload-form__container__input-box__video-title__label" htmlFor="videoUploadTitle">TITLE YOUR VIDEO</label>
                        <input className="upload-form__container__input-box__video-title__input" name="videoUploadTitle" type="text" placeholder="Add a title to your video" id="videoUploadTitle"/>
                    </div>
                    <div className="upload-form__container__input-box__video-description">
                        <label className="upload-form__container__input-box__video-description__label" htmlFor="videoUploadDescription">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload-form__container__input-box__video-description__input" name="videoUploadDescription" placeholder="Add a description to your video" type="text" id="videoUploadDescription"/>
                    </div>
                </div>    
                <div  className="upload-form__container__options-box">
                    <button className="upload-form__container__options-box--publish-button">
                        <img className="upload-form__container__options-box--publish-button--icon" src={publishIcon}/>
                        PUBLISH
                    </button>
                    <a className="upload-form__container__option-box--cancel" href="../../index.html">CANCEL</a>
                </div>
            </div>
        </form>
    )
}

export default UploadPageForm;