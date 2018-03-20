import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    console.log(this.props);
    const { shelf, books } = this.props
    const booksOnShelf = books.filter(book => book.shelf === shelf.id)
    return (
      <div>
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
         
          {
          booksOnShelf.map((bookData) => <Book key={bookData.id} {...bookData} />)
          }
          
        </ol>
      </div>
      </div>
    )
  }
}

export default BookShelf