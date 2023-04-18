import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import booksDisplay from './displayBooks';
import Form from './Form';
import removeBook from './removeBook';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => (state.books.books));
  console.log(books);
  useEffect(() => {
    dispatch(booksDisplay());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <div className="book" key={book.key}>
          <div className="book-details">
            <p>{book.category}</p>
            <h2 className="title">{book.title}</h2>
            <p className="author">{book.author}</p>
            <ul className="book-action">
              <li>Comments</li>
              <button type="button" id={book.key} onClick={() => dispatch(removeBook(book.key))}>Remove</button>
              <li>Edit</li>
              <button type="button" className="status-btn">Status</button>
            </ul>
          </div>
          <div>
            <div className="oval" />
            <div>
              <h3 className="per-completed">0%</h3>
              <p className="completed">completed</p>
            </div>
          </div>
          <div>
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p className="chapter">Chapter</p>
            <button type="button" className="progress-update">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
      <Form />
    </div>
  );
};

export default Books;
