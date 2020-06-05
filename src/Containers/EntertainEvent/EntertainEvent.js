import React, { Component } from 'react';
import './EntertainEvent.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';




class EntertainEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Container>
                    <div className='entertain-category'>
                        <p class="subtitle-en">ALL THE FUN STARTS HERE !</p>
                        <h3 class="font-weight-bold-en">Entertainment Guides</h3>
                        <div className="row">
                            <Col>
                                <div class="grid">
                                    <figure class="effect-lily">
                                        <img className='box-Img-three' src={Images.path.eventFive} />
                                        <figcaption>
                                            <div>
                                            <h3>Social Events</h3>
                                                 <p>4 Events</p>
                                            </div>
                                            <a href="/EventPage" >View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </Col>
                            <Col>

                                <div class="grid">
                                    <figure class="effect-lily">
                                        <img className='box-Img-three' src={Images.path.eventTen} />
                                        <figcaption>
                                            <div>
                                            <h3>Concerts</h3>
                                                 <p>4 Events</p>
                                            </div>
                                            <a href="/EventPage">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </Col>
                            <Col>
                                <div class="grid">
                                    <figure class="effect-lily">
                                        <img className='box-Img-three' src={Images.path.eventOne} />
                                        <figcaption>
                                            <div>
                                                <h3>Food Festival</h3>
                                                 <p>4 Events</p>
                                            </div>
                                            <a href="/EventPage">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </Col>
                        </div>
                        <div className="second-column">
                            <div className="row">
                                <Col>

                                    <div class="grid">
                                        <figure class="effect-lily">
                                            <img className='box-Img-three' src={Images.path.eventFour} />
                                            <figcaption>
                                                <div>
                                                <h3>Business Events</h3>
                                                <p>4 Events</p>
                                                </div>
                                                <a href="/EventPage">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Col>
                                <Col>

                                    <div class="grid">
                                        <figure class="effect-lily">
                                            <img className='box-Img-three' src={Images.path.eventTen} />
                                            <figcaption>
                                                <div>
                                                <h3>Theatre Shows</h3>
                                                <p>4 Events</p>
                                                </div>
                                                <a href="/EventPage">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Col>
                                <Col>

                                    <div class="grid">
                                        <figure class="effect-lily">
                                            <img className='box-Img-three' src={Images.path.eventTen} />
                                            <figcaption>
                                                <div>
                                                    <h3>Concerts</h3>
                                                    <p>4 Events</p>
                                                </div>
                                                <a href="/EventPage">View more</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );

    }
}


export default EntertainEvent;