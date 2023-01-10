import {useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";
function BookShow({ book }) {
	const [showEdit, setShowEdit] = useState(false);
	const { deleteBookById } = useBooksContext();
	const handleClickDelete = () => {
		deleteBookById(book.id);
	}

	const handleClickEdit = () => {
		setShowEdit(!showEdit);
	}

	const handleSubmit = () => {
		setShowEdit(false);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={book} onSubmit={handleSubmit} />;
	}

	return (
		<div className='book-show'>
			<img alt="books"
					 src={`https://picsum.photos/seed/${book.id}/300/200`}
					 />

			{content}
			<div className='actions'>
				<button className='edit' onClick={handleClickEdit}>
					Edit
				</button>
				<button className='delete' onClick={handleClickDelete}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default BookShow;