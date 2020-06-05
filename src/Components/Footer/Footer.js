import React, { Component } from 'react';
import './Footer.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div className='Footer-container'>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <img className='rentDaap-Img' src={Images.path.booklogo} alt='rent' />
                        </Col>
                        <Col sm={4}>
                            <div className='rentDaap-help'>
                                <ul>
                                    <h5 className='footer-link'>HELPFUL LINKS</h5>
                                    <li><a href="/pdf/ListingPolicyRentingDAp.pdf" target='_blank' >My Account</a></li>
                                    <li><a href="">Ticket Your Event</a></li>
                                    <li><a href="">Get In Touch</a></li>
                                    <li><a href="">Whitepaper</a></li>
                                </ul>
                                <ul>
                                    <h5 className='other-footer-txt'>EXPLORE</h5>
                                    <li><a href="">Concerts</a></li>
                                    <li><a href="/pdf/Renting Dapp Terms & Service.pdf">Conferences</a></li>
                                    <li><a href='/pdf/Renting Dapp Privacy.pdf'
                                        target='_blank' >Family</a></li>
                                    <li><a href="">Musical</a></li>
                                    <li><a href="">Music Festival</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className='subscribe-container'>
                                <div className='subscribe-detail'>NEWS LETTER</div>
                                <div className="flex-box-subs">
                                    <form>
                                        <input
                                            placeholder='Your email address'
                                            className='subscribe-field'
                                            onChange={this.handleInputChange}
                                        />
                                    </form>

                                    <button className='subscribe-rent-btn'>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}




export default Footer;