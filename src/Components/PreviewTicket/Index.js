import React, { Component } from 'react';
import './PreviewTicket.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Index';
import {
    Link,
} from 'react-router-dom'




class PreviewTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    };

    decrement() {
        this.setState(
            {
                count: this.state.count - 1
            }
        );
    };

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
                    <div className="air-space-box">
                        <div className="event-time-box">
                            <div>
                                <p>28 Nov</p>
                                <p>7:00 p.m</p>
                            </div>
                            <div>
                                <select className="select-style" name="select" id="select">
                                    <option value="volvo">Normal Ticket ES:250</option>
                                    <option value="saab">ES 677</option>
                                    <option value="mercedes">ES 200</option>
                                    <option value="audi">ES </option>
                                </select>
                            </div>
                            <div>
                                <div className="scroll-count">
                                   
                                    <button className="inc" onClick={(e) => this.increment(e)}>+</button>
                                    <div>{this.state.count}</div>
                                    <button className="dec" onClick={(e) => this.decrement(e)}>-</button>
                                </div>
                            </div>
                        </div>
                        <label> Seat Number</label>
                        <p className="blck-txt">Block C (ROW B to C)</p>
                        <p >CC5, CC6</p>
                        <button className="form-submit-btn">Proceed</button>
                    </div>
                </Container>
            </div>
        );
    }
}


export default PreviewTicket;