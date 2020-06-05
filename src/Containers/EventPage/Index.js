import React, { Component } from 'react';
import './EventPage.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Index';
import { Link } from 'react-router-dom';





class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h3>Concerts</h3>
                    <p>3 Events available</p>
                    <Row>
                        <Link to ="/EventDetail">
                        <Col sm={4}>
                            <div className='category-three-box'>
                                <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                                <img className='listing-Img-three' src={Images.path.eventEight} />
                                <div className='listing-text'>
                                    Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        </Link>
                        <Col sm={4}>
                            <div className='category-three-box'>
                                <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                                <img className='listing-Img-three' src={Images.path.eventFour} />
                                <div className='listing-text'>
                                    Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='category-three-box'>
                                <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                                <img className='listing-Img-three' src={Images.path.eventEight} />
                                <div className='listing-text'>
                                    Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }
}


export default EventPage;