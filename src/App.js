import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    const shelves = [
      { id: 'currentlyReading', name: 'Currently Reading' },
      { id: 'wantToRead', name: 'Want To Read' },
      { id: 'read', name: 'Read' }
    ]
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <li key={shelf.id} className="bookshelf">
                <BookShelf
                  shelf={shelf}
                  books={this.state.books}
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp