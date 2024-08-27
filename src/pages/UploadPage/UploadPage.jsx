import Header from "../../components/Header/Header";
import './UploadPage.scss'

const UploadPage = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className="upload-page">
                <div className="upload-page__container">
                    <h1 className="upload-page__container--title">Upload Video</h1>
                </div>
            </main>
        </>
    )
}  

export default UploadPage;