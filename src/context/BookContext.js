import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Fullmetal Alchemist", author: "Hiromu Arakawa", id: 1 },
    { title: "Fire Punch", author: "Tatsuki Fijimoto", id: 2 },
    { title: "Ranger Reject", author: "Negi Haruba", id: 3 },
    { title: "Frieren: Journeys end", author: "Kanehito Yamada", id: 4 },
  ]);

  function addBook(title, author) {
    setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  }

  function removeBook(id) {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
