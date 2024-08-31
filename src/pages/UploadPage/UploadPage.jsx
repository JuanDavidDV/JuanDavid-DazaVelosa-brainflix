import UploadPageForm from "../../components/UploadPageForm/UploadPageForm";
import './UploadPage.scss'

const UploadPage = () => {
    return (
        <section className="upload-page">
            <div className="upload-page__container">
                <h1 className="upload-page__container--title">Upload Video</h1>
            </div>
            <UploadPageForm />
        </section>
   );
};

export default UploadPage;