const Book = ({ prop }) => {
    return (
        <div >
            <div >
                <p >{prop.category}</p>
                <h1>{prop.title}</h1>
                <p >{prop.author}</p>
                <ul >
                    <li>Comments</li>
                    <li >Remove</li>
                    <li >Edit</li>
                </ul>
            </div>
            <div >
                <div />
                <div >
                    <h2 >{prop.progress}</h2>
                    <p >completed</p>
                </div>
            </div>
            <div >
                <p>CURRENT CHAPTER</p>
                <p >{prop.current}</p>
                <button type="button">UPDATE PROGRESS</button>
            </div>
        </div>
    );
};

export default Book;