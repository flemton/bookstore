import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Form from './Form';
import books from './books';

const Books = () => (
  <div>
    {books.map((book) => (
      <Book title={book.title} category={book.category} author={book.author} progress="64%" chapter="Chapter 17" key={book.item_id} />
    ))}
    <Form />
  </div>
);

const Book = ({
  category, title, author, progress, chapter, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="book-details">
        <p>{category}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <ul className="book-action">
          <li>Comments</li>
          <button type="button" onClick={() => dispatch(removeBook({ id }))}>Remove</button>
          <li>Edit</li>
        </ul>
      </div>
      <div>
        <div className="oval" />
        <div>
          <h3 className="per-completed">{progress}</h3>
          <p className="completed">completed</p>
        </div>
      </div>
      <div>
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">{chapter}</p>
        <button type="button" className="progress-update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { Books };

export default Book;
