const Book = ( props ) => {
    const { category, title, author, progress } = props;

    return (
        <div className='book'>
            <div className="book-details">
                <p >{category}</p>
                <h2 className="title">{title}</h2>
                <p className="author">{author}</p>
                <ul className="book-action">
                    <li>Comments</li>
                    <li >Remove</li>
                    <li >Edit</li>
                </ul>
            </div>
            <div >
                <div className="oval"/>
                <div >
                    <h3 >{progress}</h3>
                    <p >completed</p>
                </div>
            </div>
            <div >
                <p>CURRENT CHAPTER</p>
                <p >Current</p>
                <button type="button" className="progress-update">UPDATE PROGRESS</button>
            </div>
        </div>
    );
};

export default Book;