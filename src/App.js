import {useState, useEffect} from "react";
import axios from "axios";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    })
     const newBooks = [...books, response.data];
     setBooks(newBooks);
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/${id}`);
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  const updateBookByIdAndTitle = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });

    const updatedBooks = books.map( book => {
        if (book.id === id) {
          return {...book, ...response.data}
        }

        return book;
    })

    setBooks(updatedBooks);
  }

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onUpdate={updateBookByIdAndTitle} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
