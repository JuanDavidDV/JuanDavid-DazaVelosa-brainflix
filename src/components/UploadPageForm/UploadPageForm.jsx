import './UploadPageForm.scss';
import uploadVideoPreview from '../../assets/images/Upload-video-preview.jpg';

const UploadPageForm = () => {
    return (
        <form className="upload-form">
            <div className="upload-form__container">
                <label className="upload-form__container__label" htmlFor="videoThumbnailUpload">
                    VIDEO THUMBNAIL
                </label>
                <img className="upload-form__container__video-thumbnail"
                     src={uploadVideoPreview}
                     id="videoThumbnailUpload"
                     alt="videoThumbnailUpload"
                     name="videoThumbnailUpload"    
                />
                <label className="upload-form__container__label" htmlFor=""></label>
            </div>
        </form>
    )
}

export default UploadPageForm;