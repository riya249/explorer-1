import React, { Component } from 'react';
import './EventDetail.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Index';
import Modal from 'react-bootstrap/Modal';
import {
    Link,
} from 'react-router-dom'



class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showReviewModal: false
        };
    }

    handleReviewClose = () => {
        this.setState({
            showReviewModal: false,
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='category-event-box'>
                                <img className='event-Img-three' src={Images.path.eventEight} />
                                <div className='listing-text-ev'>
                                    Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="event-main-box">
                        <h5 className="ev-detail-name">BLANK LANKTEH</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
                        <p className="event-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure </p>
                       <div className="address-head">
                        <label>ADDRESS</label>
                        <p className="event-desc1"> long established</p>
                        <p className="event-desc1">sometimes on purpose</p>
                        <p className="event-desc1">five centuries</p>
                        </div>
                        <label>TICKETS</label>
                        <p className="concert-name">For Blank Lankteh</p>
                        <div className="event-time-box">
                            <div>
                                <p>28 Nov</p>
                                <p>7:00 p.m</p>
                            </div>
                            <div>
                                <p><span className="hex-txt">&#x2022;</span>  Normal Tickets: ES 250</p>
                                <p><span className="hex-txt">&#x2022;</span>  VIP Tickets: ES 450</p>
                            </div>
                            <div>
                              <Link to="/PreviewTicket"><button className="Started-btn-btn">Book Tickets</button></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                    <div className='catg-review-container'>
                                <div className='review-rate-style'>
                                    <img className='rate-imgs' src={Images.path.orangeStar} />4.8<h5 className='review-heading-style'>50(reviews)</h5></div>
                                    <Row>
                               <Col sm={6}>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgProfile} />
                                            <div>
                                                <h5>Jessica Does</h5>
                                                <p className='review-date-txt'>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </Col>
                              
                                <Col  sm={6}>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgProfile} />
                                            <div>
                                                <h5>Jessica Does</h5>
                                                <p className='review-date-txt'>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                    </Col>

                                    <Col  sm={6}>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgProfile} />
                                            <div>
                                                <h5>Jessica Does</h5>
                                                <p className='review-date-txt'>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                    </Col>

                                    <Col  sm={6}>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                            <img className='user-img-style' src={Images.path.imgProfile} />
                                            <div>
                                                <h5>Jessica Does</h5>
                                                <p className='review-date-txt'>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                    </Col>
                                </Row>
                                <h5 className='review-btn-toggle' onClick={() => this.setState({ showReviewModal: true })}>Show All Reviews</h5>
                            </div> 
                    </div>
                </Container>
                 {/* Bootstrap Modal two */}
                 <Modal size="lg" show={this.state.showReviewModal} onHide={this.handleReviewClose}>
                    <Modal.Header closeButton>
                        <img className='rate-imgs' src={Images.path.orangeStar} />4.8<h5 className='review-heading-style'>50(reviews)</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row className="show-grid">
                                <Col sm={6}>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                        <img className='user-img-style' src={Images.path.imgProfile} />
                                            <div>
                                                <h5>Jessica Does</h5>
                                                <p className='review-date-txt'>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                        <img className='user-img-style' src={Images.path.imgProfile} />
                                            <div>
                                                <h5>Jessica Does</h5>
                                                <p className='review-date-txt'>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className='user-review'>
                                        <div className='user-detail-container'>
                                        <img className='user-img-style' src={Images.path.imgProfile} />
                                            <div>
                                                <h5>Jessica Does</h5>
                                                <p className='review-date-txt'>March 2020</p>
                                            </div>
                                        </div>
                                        <p>Thank you ,We loved our stay,stunning place </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>

                </Modal>
            </div>
        );

    }
}


export default EventDetail;