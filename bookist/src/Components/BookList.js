import React, { Component } from 'react'

class BookList extends Component {
    render() {
      let mappedBooks = this.state.books.map((books, index) => {
        return <h2 key={index}>{books.title}</h2>
      });
    
      return (
        <div className="App">{mappedBooks}</div>
      )
    }
}


export default BookList;