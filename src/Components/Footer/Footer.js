import React, { Component } from 'react';
import './Footer.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Footer-container">
        <Container>
          <Row>
            <Col sm={4}>
              <div className="flex-footer-logo">
                <img
                  className="eslogo11-Img"
                  src={Images.path.esgreylogo}
                  alt="logo"
                />
                <div className="footer-txt-white">Powered by Era Swap</div>
              </div>
              <p className="sub-footer-white mt10">
                Era Swap is a Block Explorer and Analytics Platform for
              </p>
              <p className="sub-footer-white">
                Era Swap a decentralized smart contracts platform.
              </p>
            </Col>
            <Col sm={2}></Col>
            <Col sm={6}>
              <div className="subscribe-container">
                <div className="subscribe-detail">
                  Subscribe to get the latest insights
                </div>
                <div className="flex-box-subs">
                  <form>
                    <input
                      placeholder="Your email address"
                      className="subscribe-field"
                      onChange={this.handleInputChange}
                    />
                  </form>
                </div>
                <div>
                  <a href="https://www.instagram.com/eraswap/?hl=en">
                    {' '}
                    <img
                      className="social-Img"
                      src={Images.path.insta}
                      alt="rent"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/eraswap/">
                    {' '}
                    <img
                      className="social-Img"
                      src={Images.path.linkedin}
                      alt="rent"
                    />{' '}
                  </a>
                  <a href="https://mobile.twitter.com/EraSwapTech">
                    {' '}
                    <img
                      className="social-Img"
                      src={Images.path.twitter}
                      alt="rent"
                    />{' '}
                  </a>
                  <a href="https://www.facebook.com/eraswap">
                    {' '}
                    <img
                      className="social-Img"
                      src={Images.path.facebook}
                      alt="rent"
                    />{' '}
                  </a>
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
