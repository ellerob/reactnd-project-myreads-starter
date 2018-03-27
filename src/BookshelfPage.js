import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookshelfPage extends React.Component {
  render() {
    const { books, onShelfChange } = this.props
    const shelves = [
      { id: 'currentlyReading', name: 'Currently Reading' },
      { id: 'wantToRead', name: 'Want To Read' },
      { id: 'read', name: 'Read' }
    ]
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <li key={shelf.id} className="bookshelf">
              <BookShelf
                shelf={shelf}
                books={books}
                onShelfChange={onShelfChange}
              />
            </li>
          ))}
        </div>
        <div className="open-search">
          <Link
            to="/search">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default BookshelfPage