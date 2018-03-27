import React from 'react'
import './App.css'
import BookShelfChanger from './BookshelfChanger'
import BlankImage from './icons/BlankImage.png'

function Book(props) {
  const { onShelfChange, books, book } = props
  let thisShelf = 'none'
  const title = book.title || "No title"
  const authors = book.authors || []
  let bookCover = book.imageLinks || BlankImage

  if (bookCover !== BlankImage) {
    bookCover = book.imageLinks.smallThumbnail
  }

  for (let thisBook of books) {
    if (thisBook.id === book.id) {
      thisShelf = thisBook.shelf
      break
    }
  }

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${bookCover})` }}></div>
        <BookShelfChanger
          book={book}
          thisShelf={thisShelf}
          onShelfChange={onShelfChange}
        />
      </div>
      <div className="book-title">{title}</div>
      <div>
        {authors.map((author, index) => (
          <a key={index} className="book-authors">
            {author}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Book