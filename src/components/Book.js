import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import booksDisplay from './displayBooks';
import Form from './Form';
import removeBook from './removeBook';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => (state.books.books));
  useEffect(() => {
    dispatch(booksDisplay());
  }, [books]);

  return (
    <div>
      {books.map((book) => (
        <div className="book" key={book.key}>
          <div className="book-details">
            <p className="book-category">{book.category}</p>
            <h2 className="title">{book.title}</h2>
            <p className="author">{book.author}</p>
            <ul className="book-action">
              <li>Comments</li>
              <li><button type="button" id={book.key} onClick={() => dispatch(removeBook(book.key))}>Remove</button></li>
              <li>Edit</li>
            </ul>
          </div>
          <div className="per-div">
            <div className="oval" />
            <div>
              <h3 className="per-completed">0%</h3>
              <p className="completed">Completed</p>
            </div>
          </div>
          <hr className="hr-completed" />
          <div className="chapter-div">
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p className="chapter">Chapter</p>
            <button type="button" className="progress-update">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
      <hr className="hr-addbook" />
      <Form />
    </div>
  );
};

export default Books;
