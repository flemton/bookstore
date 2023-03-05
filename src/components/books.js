import Book from "./Book";
import Form from "./Form";

const Books = () => (
    <div>
        <Book title="The Hunger Games" category="Action" author="Suzanne Collins" progress="64%" chapter="Chapter 17" />
        <Book title="Dune" category="Science Fiction" author="Frank Herbert" progress="8%" chapter='Chapter 3: "A Lesson Learned"' />
        <Book title="Capital in the Twenty-First Century" category="Economy" author="Suzanne Collins" progress="0" chapter="Introduction" />
        <Form/>
    </div>
);

export default Books;