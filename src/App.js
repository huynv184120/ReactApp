import React, { Component } from 'react';

import BookCardList from './components/bookCardList/bookCardList';
import SearchBox from './components/searchBox/searchBox';

import BOOKS_DATA from './data/booksData';

import Logo from './assets/bookaholic.png';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
    };
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { searchField } = this.state;

    const filteredBooks = BOOKS_DATA.filter((book) =>
      book.original_title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <div>
          <img alt='logo' src={Logo} width='200px' />
        </div>
        <SearchBox placeholder='Search' handleChange={this.handleChange} />
        <BookCardList books={filteredBooks} />
      </div>
    );
  }
}

export default App;