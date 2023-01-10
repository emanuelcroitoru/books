import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";
function BookCreate() {
	const [title, setTitle] = useState('');
	const { createBook } = useBooksContext()
	const handleChange = (event) => {
		setTitle(event.target.value);
	}

	const addBook = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle('');
	}

	return (
		<div className='book-create'>
			<h3>Add a book</h3>
			<form onSubmit={addBook}>
			<label>Title</label>
			<input className='input' value={title} onChange={handleChange} />
			<button className='button'>Add a book</button>
			</form>
	</div>
	)
}

export default BookCreate;