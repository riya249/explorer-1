import React, { Component } from 'react';
import './MyListing.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';




class MyListing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={6}>
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
                            <div className="update-btn">
                                <button className="btn-frst">Update</button>
                                <button className="btn-sec">Delete</button>
                            </div>
                        </Col>
                        <Col sm={6}>
                        <div className='category-three-box'>
                                <div className="small-ev-box">
                                    <p className="ev-month">JUNE</p>
                                    <p className="ev-date">21</p>
                                </div>
                                <img className='listing-Img-three' src={Images.path.crttwo} />
                                <div className='listing-text'>
                                    Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="update-btn">
                              <Link to="/CreateEvent">  <button className="btn-frst">Update</button></Link>
                                <button className="btn-sec">Delete</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );

    }
}


export default MyListing;