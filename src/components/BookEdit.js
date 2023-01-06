import {useState} from "react";
function BookEdit( {book, onSubmit} ) {
	const [title, setTitle] = useState(book.title);
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(book.id, title);
	}

	return <form onSubmit={handleSubmit}>
		<label>Title</label>
		<input value={title} onChange={handleTitleChange} />
		<button>Submit</button>
	</form>
}

export default BookEdit;