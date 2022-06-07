import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

import './comment.scss';

const Comment = ({ review: { rating, comment } }) => (
  <div className='border rounded p-2 mb-2'>
    <StarRatingComponent
      name='book-rating-comment'
      className='rating'
      editing={false}
      starCount={10}
      value={rating}
      emptyStarColor='#ccc'
    />
    <div className='mt-n3'>{comment}</div>
  </div>
);

export default Comment;