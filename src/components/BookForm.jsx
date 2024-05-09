import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

function BookForm() {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
      }}
    >
      <input
        type="text"
        placeholder="Book title..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="Book author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input type="submit" value="Add book" />
    </form>
  );
}

export default BookForm;
