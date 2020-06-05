import React, { Component } from 'react';
import './Kycform.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';




class Kycform extends Component {
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
            <Col sm={7}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
            </Col>
            <Col sm={5}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
            </Col>
          </Row>

          <Row>
            <Col sm={7}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
            </Col>
            <Col sm={5}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
              
            </Col>
          </Row>

          <Row>
            <Col sm={5}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
            </Col>
            <Col sm={7}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
            </Col>
          </Row>
          <div>
            <textarea className='qs-field' type="text" id="text" name="text" placeholder="Your Question or Message" />
          </div>
          <Row>
            <Col sm={4}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
            </Col>
            <Col sm={8}>
              <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Name" />
            </Col>
          </Row>

          <h5>Upload Photos</h5>
          <div className='upload-img-container'>
            <div>
          <p className='field-note-txt'>Id Proof</p>
                <div className='img-upload'>
                  <img src={Images.path.fileUpload} className='upload-pic' />
                </div>
                </div>
                <div>
                <p className='field-note-txt'>Address Proof</p>
                <div className='img-upload'>
                  <img src={Images.path.fileUpload} className='upload-pic' />
                </div>
                </div>
          </div>
          <p className="color-note">35 ES is required to become a verified seller</p>
          <p className="grey-note">Note*</p>
          <p className='field-note-txt'>You will be charged only when you submit your KYC</p>
          <p className='field-note-txt'>You will not be if save your KYC as Draft</p>
          <div>
            <button className="form-submit-btn"> Submit</button>
          </div>
        </Container>
      </div>

    );

  }
}


export default Kycform;