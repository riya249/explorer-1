import React, { Component } from 'react';
import './UpcomingEvent.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';




class UpcomingEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <Container className='category-container'>
          <p class="subtitle">Discover the fun!</p>
          <div className="upcoming-display">
          <h3 class="font-weight-bold">Upcoming Events</h3>
          <button className="search-btn" >View All</button>
          </div>
          <div className='section-one-category'>
            <div className='row'>
              <Col sm={8} >
                <div className='category-one-box'>
                <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                  <img className='box-Img-one' src={Images.path.crtone} />
                  <Link to='/allCategory'>  
                  <div className='rentCategory-text'>
                  Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                  </div> </Link>
                </div></Col>
              <Col sm={4}>
                <div className='category-two-box'>
                <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                  <img className='box-Img-two' src={Images.path.eventTen} />
                  <div className='rentCategory-text'>
                  Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                 </div>
                </div></Col>
            </div>
          </div>
          <div className='section-two-category'>
            <div className='row'>
              <Col>
                <div className='category-three-box'>
                  <img className='box-Img-three' src={Images.path.eventEight} />
                  <div className='rentCategory-text'>
                  Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                </div>
                </div></Col>
              <Col><div className='category-three-box'>
              <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                <img className='box-Img-three' src={Images.path.party} />
                <div className='rentCategory-text'>
                Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                </div>
              </div></Col>
              <Col><div className='category-three-box'>
              <div className="small-ev-box">
                                    <p className="ev-month">MAY</p>
                                    <p className="ev-date">27</p>
                                </div>
                <img className='box-Img-three' src={Images.path.crttwo} />
                <div className='rentCategory-text'>
                Global Meetup Event
                                    <div className="list-box-flex">
                                        <p className="location-txt">Navi Mumbai</p>
                                        <p className="location-txt">ES 20 - ES 50</p>
                                    </div>
                 </div>
              </div></Col>
            </div>
          </div>
        </Container>
      </div>

    );

  }
}


export default UpcomingEvent;