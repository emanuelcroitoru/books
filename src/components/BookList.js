import BookShow from "./BookShow";

function BookList({books, onDelete, onUpdate}) {
	const displayBooks = books.map(book => {
		return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate} />
	})
	return <div className='book-list'>{displayBooks}</div>
}

export default BookList;