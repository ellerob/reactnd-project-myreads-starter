import React from 'react'
import './App.css'

class Book extends React.Component {
  render() {
    const book = this.props
    let bookCover
    const title = book.title ? book.title : "No Title"
    const authors = book.authors ? book.authors : "no authors"
    //const thumbnail = book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'null'
    const smallThumbnail = book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : 'null'
    if (smallThumbnail !== 'null') {
      bookCover = smallThumbnail
      // } else if (smallThumbnail !== 'null') {
      //   bookCover = smallTumbnail
      // } 
    } else {
      bookCover = 'null'
    }
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url("${bookCover}")` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
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