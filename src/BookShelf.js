import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return (
      <div>
      <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book/>
          </li>
        </ol>
      </div>
      </div>
    )
  }
}

export default BookShelf