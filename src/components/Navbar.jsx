import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <nav className="navbar">
      <h1>Collins' Reading list</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </nav>
  );
}

export default Navbar;
