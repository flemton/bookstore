const Form = () => (
  <div className="form">
    <h3>
      ADD NEW BOOK
    </h3>
    <form>
      <input type="text" placeholder="Book title" required className="book-title" />
      <input type="text" placeholder="Author" required className="book-author" />
      <button className="addBook" type="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
