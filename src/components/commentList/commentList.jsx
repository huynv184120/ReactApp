import React from 'react';

import Comment from '../comment/comment';

import './commentList.scss';

const CommentList = ({ reviews }) => (
  <div className='commentList'>
    <div className='mb-2'>
      {reviews.map((review) => (
        <Comment key={review.id} review={review}></Comment>
      ))}
    </div>
  </div>
);

export default CommentList;
