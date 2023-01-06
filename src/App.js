import {useState} from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const newBooks = [...books, {id: Math.round(Math.random() * 9999), title}];
    setBooks(newBooks);
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  const updateBookByIdAndTitle = (id, newTitle) => {
    const updatedBooks = books.map( book => {
        if (book.id === id) {
          return {...book, title: newTitle}
        }

        return book;
    })

    setBooks(updatedBooks);
  }

  return (
    <div>
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onUpdate={updateBookByIdAndTitle} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
