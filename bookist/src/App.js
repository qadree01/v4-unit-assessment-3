import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: data
    }

    // this.state.books = this.state.books.bind(this)
  }

  

  render() {
    return (
      <div className='container'>
        <Header />
        <BookList books={this.state.books} />
        <Shelf />
      </div>
    );
  } 
}

export default App;