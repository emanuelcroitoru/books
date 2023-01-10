import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";
function BookList() {
	const { books } = useBooksContext();
	const displayBooks = books.map(book => {
		return <BookShow key={book.id} book={book} />
	})
	return <div className='book-list'>
		{displayBooks}
	</div>
}

export default BookList;