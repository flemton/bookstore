import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import booksAdd from './AddBook';

const Form = () => {
  const dispatch = useDispatch();
  return (
    <div className="form">
      <h3>
        ADD NEW BOOK
      </h3>
      <form onSubmit={((e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const author = e.target[1].value;
        dispatch(booksAdd({ id: uuidv4(), title, author }));
        e.target[0].value = '';
        e.target[1].value = '';
      })}
      >
        <input type="text" placeholder="Book title" required className="book-title" />
        <input type="text" placeholder="Author" required className="book-author" />
        <button className="addBook" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
