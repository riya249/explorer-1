import React, { Component } from 'react';
import './CreateEvent.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Index';




class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div>
                <Header />
                <div className="event-bgd-img">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className="create-align">
                               
                                <h3 className="head-create">Create Event</h3>
                                <p className="create-txt">Start Selling Tickets with Blockchain</p>
                                <p className="create-txt1">Middlemen-free</p>
                                <p className="create-txt">P2P Connectivity</p>
                                <p className="create-txt">Total Transparency</p>
                                   </div>
                                  
                            </Col>

                            <Col sm={6}>
                            <div className="form-bgd">
                            <label>Title*</label>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Title" />
                                <label>Subtitle*</label>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Subtitle" />
                                <label>Price*</label>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Price" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container>
                        <div className="create-ev-container">
                            <label>Description</label>
                            <textarea className='qs-field' type="text" id="text" name="text" placeholder="Description" />
                            <h5>Upload Photos*</h5>
                            <div className='upload-img-container'>

                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>

                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>

                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>
                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>

                            </div>
                            <div className='upload-img-container'>

                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>

                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>

                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>
                                <div className='img1-upload'>
                                    <img src={Images.path.fileUpload} className='upload-pic1' />
                                </div>

                            </div>
                            <label>Location*</label>
                            <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Country/Region" />
                            <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Street Address" />
                            <Row>
                                <Col sm={6}>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="City" />
                                </Col>
                                <Col sm={6}>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="District" />
                                </Col>
                            </Row>
                            <Row>
                            <Col sm={6}>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="Pincode" />
                                </Col>
                                <Col sm={6}>
                                </Col>
                            </Row>
                            <Row>
                           
                                <Col sm={6}>
                                <label>Seat Diagram*</label>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="upload your files" />
                                </Col>
                               
                                <Col sm={6}>
                                <label>Event Diagram*</label>
                                <input className='fieldone-txt' type="text" id="fname" name="fname" placeholder="upload your details" />
                                </Col>
                            </Row>
                            <button className="form-submit-btn"> Submit</button>
                        </div>

                    </Container>
                </div>
            </div>
        );

    }
}


export default CreateEvent;