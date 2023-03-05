const Form = () => {
    <div>
        <h3>
            ADD NEW BOOK
        </h3>
        <form>
            <input type='text' placeholder="Book title" required />
            <input type='text' placeholder="Author" required />
            <button className="addBook" type="submit">
                ADD BOOK
            </button>
        </form>
    </div>
}