import { useContext } from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../context/BookContext";

function Booklist() {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read...</div>
  );
}

export default Booklist;
