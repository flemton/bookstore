import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [formInput, setFormInput] = useState({
    id: '',
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const handleFormInput = (e) => {
    const Name = e.target.name;
    setFormInput({
      id: uuidv4(),
      ...formInput,
      [Name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ formInput }));
    setFormInput({
      title: '',
      author: '',
    });
  };

  (
    <div className="form">
      <h3>
        ADD NEW BOOK
      </h3>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Book title" required className="book-title" onChange={handleFormInput} value={formInput.title} />
        <input type="text" placeholder="Author" required className="book-author" onChange={handleFormInput} value={formInput.author} />
        <button className="addBook" type="button">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
