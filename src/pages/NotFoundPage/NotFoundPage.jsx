import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const hundleClick = () => {
        navigate("/");
    }

    return (
        <main className="not-found-page">
            <div className="not-found-page__container">
                <h1 className="not-found-page__container--title">Oooops, something went wrong 😲</h1>
                <p className="not-found-page__container--text">The page you are trying to reach does not exists...</p>
                <button className="not-found-page__container__button" onClick={hundleClick}>Return Home Page</button>
            </div>
        </main>
    )
}

export default NotFoundPage;