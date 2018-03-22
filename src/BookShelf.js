import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    const { shelf, books, onShelfChange } = this.props
    const booksOnShelf = books.filter(book => book.shelf === shelf.id)
    return (
      <div>
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
          booksOnShelf.map((book) => (
          <Book 
            key={book.id} 
            book={book} 
            books={books}
            shelf={shelf}
            onShelfChange={onShelfChange}
          />))
          }
        </ol>
      </div>
      </div>
    )
  }
}

export default BookShelf