import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (event) => {
    const query = event
    this.setState({ query: query.trim() })
    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        if (books.length > 0) {
          this.setState({ showingBooks: books })
        } else {
          this.setState({ showingBooks: [] })
        }
      })
    }
  }

  render() {
    const { onShelfChange, books } = this.props
    const { showingBooks, query } = this.state

    return (
      <div>
        <div className="search-books-bar">
          <Link className="close-search"
            to="/">
         </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              showingBooks.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  books={books}
                  onShelfChange={onShelfChange}
                />))
            }
          </ol>
        </div>
      </div>
    )
  }

}


export default SearchPage