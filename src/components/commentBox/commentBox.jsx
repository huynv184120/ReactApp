import React, { Component } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import { SendOutlined } from '@ant-design/icons';
import StarRatingComponent from 'react-star-rating-component';

import './commentBox.scss';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      comment: '',
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  enterComment = (e, rat, com) => {
    this.props.onComment(e, rat, com);
    this.setState({
      rating: 0,
      comment: '',
    });
  };

  handleChange = (e) => this.setState({ comment: e.target.value });

  render() {
    return (
      <Container className='comment-box'>
        <Row className='mt-4'>
          <Col>
            <StarRatingComponent
              className='rating'
              name='book-rating-comment-box'
              starCount={10}
              value={this.state.rating}
              emptyStarColor='#ccc'
              onStarClick={this.onStarClick}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='input-group mb-3'>
              <div className='input-group-append send-button'>
                <button
                  className='btn btn-link'
                  type='button'
                  onClick={(e) =>
                    this.enterComment(e, this.state.rating, this.state.comment)
                  }
                >
                  <SendOutlined />
                </button>
              </div>
              <textarea
                type='text'
                className='form-control'
                placeholder='Comment'
                value={this.state.comment}
                onChange={this.handleChange}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentBox;