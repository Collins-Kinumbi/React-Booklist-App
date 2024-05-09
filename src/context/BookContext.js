import React, { createContext, useEffect, useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import BookReducer from "../reducers/BookReducer";

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, dispatch] = useReducer(
    BookReducer,
    [
      // { title: "Fullmetal Alchemist", author: "Hiromu Arakawa", id: 1 },
      // { title: "Fire Punch", author: "Tatsuki Fijimoto", id: 2 },
      // { title: "Ranger Reject", author: "Negi Haruba", id: 3 },
      // {
      //   title: "Frieren: Beyond Journeys' end",
      //   author: "Kanehito Yamada",
      //   id: 4,
      // },
    ],
    () => {
      const localData = localStorage.getItem("Books");
      return localData ? JSON.parse(localData) : [];
    }
  );

  // function addBook(title, author) {
  //   setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  // }

  // function removeBook(id) {
  //   setBooks(
  //     books.filter((book) => {
  //       return book.id !== id;
  //     })
  //   );
  // }

  useEffect(() => {
    localStorage.setItem("Books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
