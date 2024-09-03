const NotFoundPage = () => {
    return (
        <main className="not-found-page">
            <div className="not-found-page__container">
                <h1 className="not-found-page__container--title">Oooops, something went wrong 😲</h1>
                <p className="not-found-page__container--text">The page you are trying to reach does not exist...</p>
                <button className="not-found-page__container__button">Return Home Page</button>
            </div>
        </main>
    )
}

export default NotFoundPage;