import React, { Component } from 'react';
import './validatorstakings.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';


class Validatorstakings extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                 <div className='booking-hero-bgd booking-hero-bgd-inner'>
                    <Navbar />
                    <h2 className="es-main-head es-main-head-inner">Validator Stakings</h2>
                         </div>
                <Container>
                    {/* <p className="trans-head">TimeAlly Explorer</p> */}
                    
                    <Row className="mt40">

        <div id="tabs" className="project-tab">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">PREVIOUS MONTHS</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">PRESENT</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">FUTURE MONTHS</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                       <div className="col-md-12 text-center mt30"><p className="explr-purple-text">Validator Stakings for August 2020 month</p></div>
                                            <div className="table-responsive">
                                                <table className="es-transaction striped bordered hover">
                                                    <tr>
                                                        <th>Validator</th>
                                                        <th>Amount</th>
                                                        <th>Adjusted Amount</th>
                                                        <th>Blocks Mined</th>
                                                        <th>Delegator Stakings</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>

                                                  
                                                </table>
                                            </div>
                                            <div className="col-md-12 text-center mt30"><p className="explr-purple-text">Validator Stakings for August 2020 month</p></div>
                                            <div className="table-responsive">
                                                <table className="es-transaction striped bordered hover">
                                                    <tr>
                                                        <th>Validator</th>
                                                        <th>Amount</th>
                                                        <th>Adjusted Amount</th>
                                                        <th>Blocks Mined</th>
                                                        <th>Delegator Stakings</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>

                                                  
                                                </table>
                                            </div>
                                      
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                           <div className="col-md-12 text-center mt30"><p className="explr-purple-text">Validator Stakings for August 2020 month</p></div>
                                            <div className="table-responsive">
                                                <table className="es-transaction striped bordered hover">
                                                    <tr>
                                                        <th>Validator</th>
                                                        <th>Amount</th>
                                                        <th>Adjusted Amount</th>
                                                        <th>Blocks Mined</th>
                                                        <th>Delegator Stakings</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>

                                                  
                                                </table>
                                            </div>
                                            <div className="col-md-12 text-center mt30"><p className="explr-purple-text">Validator Stakings for August 2020 month</p></div>
                                            <div className="table-responsive">
                                                <table className="es-transaction striped bordered hover">
                                                    <tr>
                                                        <th>Validator</th>
                                                        <th>Amount</th>
                                                        <th>Adjusted Amount</th>
                                                        <th>Blocks Mined</th>
                                                        <th>Delegator Stakings</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>

                                                  
                                                </table>
                                            </div>
                              
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                               <div className="col-md-12 text-center mt30"><p className="explr-purple-text">Validator Stakings for August 2020 month</p></div>
                                            <div className="table-responsive">
                                                <table className="es-transaction striped bordered hover">
                                                    <tr>
                                                        <th>Validator</th>
                                                        <th>Amount</th>
                                                        <th>Adjusted Amount</th>
                                                        <th>Blocks Mined</th>
                                                        <th>Delegator Stakings</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>

                                                  
                                                </table>
                                            </div>
                                            <div className="col-md-12 text-center mt30"><p className="explr-purple-text">Validator Stakings for August 2020 month</p></div>
                                            <div className="table-responsive">
                                                <table className="es-transaction striped bordered hover">
                                                    <tr>
                                                        <th>Validator</th>
                                                        <th>Amount</th>
                                                        <th>Adjusted Amount</th>
                                                        <th>Blocks Mined</th>
                                                        <th>Delegator Stakings</th>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0x08D85Bd1004E3e674042EAddF81Fb3beb4853a22</td>
                                                        <td>200000.0 </td>
                                                        <td>199970.0</td>
                                                        <td>20500 (40%)</td>
                                                        <td>(0xBB62C6ec56786AB602bF98a507EB98C8a756Fe63 => 0)</td>
                                                    </tr>

                                                  
                                                </table>
                                            </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                                 
                    </Row>
                </Container>
            </div>
        );

    }
}


export default Validatorstakings;