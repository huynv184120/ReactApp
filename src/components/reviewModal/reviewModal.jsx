import React, { Component } from 'react';

import { Container, Col, Modal, Image, Row } from 'react-bootstrap';
import BookCard from '../bookCard/bookCard';
import CommentList from '../commentList/commentList';
import CommentBox from '../commentBox/commentBox';

import './reviewModal.scss';

class ReviewModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      reviews: [],
    };
  }

  changeShowState = () => {
    this.setState({ show: !this.state.show });
  };

  onComment = (e, rating, comment) => {
    e.preventDefault();
    if (rating !== 0) {
      this.setState({
        reviews: [
          ...this.state.reviews,
          { id: this.state.reviews.length + 1, comment, rating },
        ],
      });
    }
  };

  render() {
    return this.props.book ? (
      <div className='review-modal'>
        <div className='book-card-container' onClick={this.changeShowState}>
          <BookCard key={this.props.book.book_id} book={this.props.book} />
        </div>
        <Modal size={'lg'} show={this.state.show} onHide={this.changeShowState}>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={6}>
                  <Image src={this.props.book.image_url} fluid />
                </Col>
                <Col md={6}>
                  <h2 className='mb-2'>{this.props.book.original_title}</h2>
                  <Row>
                    <Col md={4}>
                      <p className='book-info__label'>{'Author: '}</p>
                    </Col>
                    <Col md={8}>
                      <p className='book-info'>{this.props.book.authors}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <p className='book-info__label'>Public year: </p>
                    </Col>
                    <Col md={8}>
                      <p className='book-info'>
                        {this.props.book.original_publication_year}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <p className='book-info__label'>Full Title: </p>
                    </Col>
                    <Col md={8}>
                      <p className='book-info'>{this.props.book.title}</p>
                    </Col>
                  </Row>
                  <Container className='comment-list-container'>
                    {this.state.reviews.length > 0 ? (
                      <Row>
                        <Col>
                          <CommentList reviews={this.state.reviews} />
                        </Col>
                      </Row>
                    ) : (
                      <Row>
                        <Col>
                          <span>No comments yet.</span>
                        </Col>
                      </Row>
                    )}
                  </Container>
                  <Row>
                    <Col>
                      <CommentBox onComment={this.onComment} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    ) : null;
  }
}

export default ReviewModal;