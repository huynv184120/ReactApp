import React from 'react';
import LazyLoad from 'react-lazyload';
import ReviewModal from '../reviewModal/reviewModal';
import './bookCardList.scss';

const BookCardList = (props) => {
  return (
    <div className='book-card-list'>
      {props.books.map((book) => (
        <LazyLoad once key={book.book_id}>
          <ReviewModal key={book.book_id} book={book} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default BookCardList;