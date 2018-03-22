import React from 'react'
import './App.css'
import BookShelfChanger from './BookshelfChanger'

class Book extends React.Component {
  render() {
    const { onShelfChange, books, book } = this.props
    let bookCover
    let thisShelf = 'none'
    const title = book.title || "No title"
    const authors = book.authors || "No authors"
    const smallThumbnail = book.imageLinks.smallThumbnail || 'null'
    
    if (smallThumbnail !== 'null') {
      bookCover = smallThumbnail
    }

    for (let thisBook of books ) {
      if (thisBook.id === book.id)  {
        thisShelf = thisBook.shelf
        break
      }
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url("${bookCover}")` }}></div>
          <BookShelfChanger 
            book={book}
            thisShelf={thisShelf}
            onShelfChange={onShelfChange}
          />
        </div>
        <div className="book-title">{title}</div>
        <div>
          {authors.map((author, index) => (
            <li key={index} className="book-authors">
              {author}
            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default Book