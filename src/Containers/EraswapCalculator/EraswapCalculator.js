import React, { Component } from 'react';
import './EraswapCalculator.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Card from 'react-bootstrap/Card';

class EraswapCalculator extends Component {
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
                    <h2 className="es-main-head es-main-head-inner">Era Swap Calculator</h2>
                    <p className="explr-txt">This mining calculator will display your expected earnings in Dollars. The calculations
                    <br/>
are based on the assumption that all conditions remain as they are below.</p>
                 
                </div>
                <Container>
                    {/* <p className="trans-head">TimeAlly Explorer</p> */}

                    <Row className="mt40 eraswapcal">
                             <Col sm={12} lg={12} >
                                <Card className="">
                                    <Card.Body>
                                       <Col lg={12}>
                                       
                                        <div class="form-row">
                                            <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                                                <label for="">Number of Validators</label>
                                                <input type="text" class="form-control" id="" placeholder=""/>
                                                <span><i class="fa fa-user user" aria-hidden="true"></i></span>
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                                                <label for="">Total ES deposit</label>
                                                <input type="text" class="form-control" id="" placeholder=""/>
                                                <span><img className='eslogo'  src={Images.path.eslogo} /></span>
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                                                <label for="">Estimated validator's uptime</label>
                                                <input type="text" class="form-control" id="" placeholder=""/>
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                                                <label for="">Total network ES staked</label>
                                                <input type="text" class="form-control" id="" placeholder=""/>
                                                <span><img className='eslogo'  src={Images.path.eslogo} /></span>
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                                                <label for="">ES price</label>
                                                <input type="text" class="form-control" id="" placeholder=""/>
                                                <span><img className='eslogo'  src={Images.path.eslogo} /></span>
                                            </div>
                                            <div class="col-sm-6  form-group">
                                                <label for="">Staking cost (USD/yearly)</label>
                                                <input type="text" class="form-control" id="" placeholder=""/>
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                                                <label for="">Network uptime</label>
                                                <input type="text" class="form-control" id="" placeholder=""/>
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-lg-3 form-group">
                                              <button class="btn">Calculate</button>
                                            </div>
                                            
                                        </div>
                                        
                                       </Col>


                                    </Card.Body>
                                </Card>
                            </Col>
                         </Row>
                         
                </Container>
                <Container className="mt30 eraswapcal-tab">
                        <Row>
                            <Col lg={6} >
                            <Card className="">
                                <div className="border-era">RESULTS</div>
                                <table className="es-transaction striped bordered hover">
                                <tr>
                                    <th>Interval</th>
                                    <th>ERA SWAP Earned</th>
                                    <th scope="col">Cost (USD)</th>
                                     <th scope="col">Profit (USD)</th>
                                    
                                </tr>
                                 <tr>
                                        <td class="text-left text-secondary">Daily</td>
                                        <td>0.015511673636315 ($3.49)</td>
                                        <td>$1.37</td>
                                        <td><span class="text-success">$2.12</span></td>
                                    </tr>
                                    <tr>
                                        <td class="text-left  text-secondary">Weekly</td>
                                        <td>0.108581715454205 ($24.46)</td>
                                        <td>$9.58</td>
                                        <td><span class="text-success">$14.88</span></td>
                                    </tr>
                                    <tr>
                                        <td class="text-left  text-secondary">Monthly</td>
                                        <td>0.47212622518958 ($106.37)</td>
                                        <td>$41.67</td>
                                        <td><span class="text-success">$64.70</span></td>
                                    </tr>
                                    <tr>
                                        <td class="text-left text-secondary">Yearly</td>
                                        <td>5.66551470227496 ($1,276.50)</td>
                                        <td>$500.00</td>
                                        <td><span class="text-success">$776.50</span></td>
                                    </tr>

                                    
                                    
                                </table>
                                </Card>
                            </Col>

                            <Col lg={6}>
                              <Card className="">
                               <div className="border-era">STAKED AMOUNT GROWTH</div>
                                
                                </Card>
                            </Col>

                            
                        </Row>
                    </Container>
            </div>
        );

    }
}


export default EraswapCalculator;