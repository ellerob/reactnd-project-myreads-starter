import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import BookshelfPage from './BookshelfPage';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onShelfChange = (newBook, newShelf) => {
    newBook.shelf = newShelf
    const updatedBooks = this.state.books.filter(book => book.id !== newBook.id)
    BooksAPI.update(newBook, newShelf).then(response => {
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <div className="search-books">
            <SearchPage
              books={books}
              onShelfChange={this.onShelfChange}
            />
          </div>
        )} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <BookshelfPage
              books={books}
              onShelfChange={this.onShelfChange}
             />
          </div>)}
        />
      </div>

    )
  }
}


  export default BooksApp