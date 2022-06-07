import React from 'react';
import LazyLoad from 'react-lazyload';

const BookCardList = (props) => {
  return (
    <div className='book-card-list'>
      {props.books.map((book) => (
        <LazyLoad once key={book.book_id}>
        </LazyLoad>
      ))}
    </div>
  );
};

export default BookCardList;