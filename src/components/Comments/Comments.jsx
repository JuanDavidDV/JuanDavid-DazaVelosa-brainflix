const Comments = (props) => {

    return (
        <section className="comments">
            <div className="comments__container">
                <ul className="comments__container__content">
                    {props.heroVideoData.map((comment) => (
                        <li className="comments__container__content__list" key={comment.id}>
                            
                                name={comment.name}
                                
                            
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Comments;