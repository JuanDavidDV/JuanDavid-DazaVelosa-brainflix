import "./NextVideosCards.scss";

const NextVideosCards = ({ nextVideoImage, nextVideoTitle, nextVideoChannel }) => {
    return (
        <article className = "next-videos-cards__container">
            <img className="next-videos-cards__container__image" src={nextVideoImage}/>
            <div className="next-videos-cards__container__details">
                <h3 className="next-videos-cards__container__details--title">{nextVideoTitle}</h3>
                <p className="next-videos-cards__container__details--channel">{nextVideoChannel}</p>
            </div>
                
        </article>
    );
};

export default NextVideosCards;