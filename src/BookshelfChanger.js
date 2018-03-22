import React from 'react'

class BookshelfChanger extends React.Component {
  render() {
    const { book, onShelfChange, thisShelf } = this.props
    return (
      <div className="book-shelf-changer">
        <select defaultValue={thisShelf} onChange={(event) => onShelfChange(book, event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger