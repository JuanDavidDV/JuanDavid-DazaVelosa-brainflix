import "./NextVideosCards.scss";

const NextVideosCards = ({ nextVideoImage, nextVideoTitle, nextVideoChannel, onClick }) => {
    return (
        <article className="next-videos-cards__container">
            <div onClick={onClick} className="next-videos-cards__container__image-box">
                <img className="next-videos-cards__container__image-box--poster" src={nextVideoImage}/>
            </div>
            <div onClick={onClick} className="next-videos-cards__container__details">
                <h3 className="next-videos-cards__container__details--title">{nextVideoTitle}</h3>
                <p className="next-videos-cards__container__details--channel">{nextVideoChannel}</p>
            </div>
                
        </article>
    );
};

export default NextVideosCards;