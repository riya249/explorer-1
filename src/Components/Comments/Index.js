import React, { Component } from 'react';
import './Comments.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';



class Comments extends Component {
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
                       <Col sm={2}>
                       <img className='comm-profile-Img' src={Images.path.imgProfile} alt='profile' />
                       </Col>
                       <Col sm={10}>
                       <textarea className='comm-field' type="text" id="text" name="text" placeholder="Comments" />
                       <div className="btn-flex-right">
                           <button className="submit-btn-comm">Submit</button>
                           </div>
                       </Col>
                       </Row>
                       <div className="public-container">
                        <div className="flex-user-comm">
                        <img className='comm-user-Img' src={Images.path.imgProfile} alt='profile' />
                        <div>
                        <h6>Ravindra Jadeja</h6>
                        <p className="user-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                       </div>
                        </div>

                        <div className="flex-user-comm">
                        <img className='comm-user-Img' src={Images.path.imgProfile} alt='profile' />
                        <div>
                        <h6>Ravindra Jadeja</h6>
                        <p  className="user-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                       </div>
                        </div>
                       </div>
                   </Container>
            </div>
        );

    }
}


export default Comments;