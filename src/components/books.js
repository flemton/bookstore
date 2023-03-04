import Book from "./Book";

const Books = ({ prop }) => (
    <ul>
        {prop.map((book) => (
            <Book key={book.id} prop={book} />
        ))}
    </ul>
);

export default Books;