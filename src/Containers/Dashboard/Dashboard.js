import React, { Component } from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Responsive from '../../Responsive/Responsive.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Header />

                <h5>Dashboard</h5>
                <div  className='row'>
                    <Col sm={2}>
                        <h5>Era Swap (ES)</h5>
                        <h5>0.0468 USDT</h5>
                        <h5>0.00000523 BTC</h5>
                    </Col>
                    <Col sm={2}>
                        <div className="es-box-ds">
                            <p className="supply-txt">ES CURRENT SUPPLY</p>
                            <p className="supply-txt">1222928288.80 ES</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="es-box-ds">
                            <p className="supply-txt">TOTAL ES USERS</p>
                            <p className="supply-txt">10005 Users</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="es-box-ds">
                            <p className="supply-txt">TOTAL ES USERS</p>
                            <p className="supply-txt">10005 Users</p>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <h5>Next NRT Count</h5>
                        <div className="count-box">
                            <ul className="flex-count-box">
                                <li className="count-txt">
                                    29 :
                                </li>
                                <li className="count-txt">
                                    11 :
                                </li>
                                <li className="count-txt">
                                    44 :
                                </li>
                                <li className="count-txt">
                                    69
                                </li>
                            </ul>
                        </div>
                    </Col>
               </div>
                <div className="bgd-dash-color">
                    <div className="dash-section-2">
                        <Row>
                     
                                <div className="section-border">
                                    <p className="sect-txt-bold">Bitcoin (BTC)</p>
                                    <p className="value-dash-txt">$9029.61</p>
                                </div>
                          

                           
                                <div className="section-border">
                                    <p  className="sect-txt-bold">Ethereum (ETH)</p>
                                    <p className="value-dash-txt">$171.9</p>
                                </div>
                              

                            
                                <div className="section-border">
                                    <p  className="sect-txt-bold">CIRCULATING OUTSIDE TA</p>
                                    <p className="value-dash-txt">1002658636.87 ES</p>
                                </div>  

                                     <div className="section-border">
                                    <p  className="sect-txt-bold">ES FROM NRT THIS MONTH</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>
                               
                              
                                <div className="section-border">
                                    <p  className="sect-txt-bold">NUMBER OF DAYSWAPPERS</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                              </div>
                              
                                <div className="section-border">
                                    <p  className="sect-txt-bold">NUMBER OF DAYSWAPPERS</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                               
                                </div>
                        </Row>
                      <div className="wrapper-sub-section">
                        <Row>
                       
                                <div className="section-border">
                                    <p  className="sect-txt-bold">ECOSYSTEM TRANSACTIONS</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>
                               

                           
                                <div className="section-border">
                                    <p  className="sect-txt-bold">UNUSED POWER TOKENS</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>
                              

                           
                                <div className="section-border">
                                    <p  className="sect-txt-bold">LUCK POOL IN NRT</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>
                                

                        
                                <div className="section-border">
                                    <p  className="sect-txt-bold">BURN POOL (IN NEXT NRT)</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>
                              

                         
                                <div className="section-border">
                                    <p  className="sect-txt-bold">TOTAL ES BURNED</p>
                                    <p className="value-dash-txt">51519927.21 ES</p>
                                </div>
                               
                        </Row>

                        <Row>
                            
                                <div className="section-border">
                                    <p  className="sect-txt-bold">MARKET CAP</p>
                                    <p className="value-dash-txt">$57233043</p>
                                </div>
                            

                            
                                <div className="section-border">
                                    <p  className="sect-txt-bold">24HR VOL (PROBIT GLOBAL)</p>
                                    <p className="value-dash-txt">208628.88 USDT</p>
                                </div>
                          
                            
                                <div className="section-border">
                                    <p  className="sect-txt-bold">CROWDFUND PRICE</p>
                                    <p className="value-dash-txt">$0.0078</p>
                                </div>
                           

                            
                                <div className="section-border">
                                    <p  className="sect-txt-bold">ALL TIME HIGH</p>
                                    <p className="value-dash-txt">1.42 USDT</p>
                                </div>
                          

                            
                                <div className="section-border">
                                    <p  className="sect-txt-bold">ALL TIME LOW</p>
                                    <p className="value-dash-txt">0.005 USDT</p>
                                </div>
                         
                        </Row>
                       </div>
                    </div>
                </div>

                <div className="dash-section-3">
                    </div>

                    <div className="dash-section-4">
                        <Row>
                            <Col sm={3}>
                            <div className="section-border">
                                <p className="platfrm-txt"> TIMEALLY STAKERS</p>
                                </div>
                            </Col>

                            <Col sm={3}>
                            <div className="section-border">
                            <p className="platfrm-txt"> TIMESWAPPERS
</p>
                                </div>
                            </Col>

                            <Col sm={3}>
                            <div className="section-border">
                            <p className="platfrm-txt"> TIMESWAPPERS
</p>
                                </div>
                            </Col>

                            <Col sm={3}>
                            <div className="section-border">
                            <p className="platfrm-txt"> TIMESWAPPERS
</p>
                                </div>
                            </Col>
                            </Row>
                    </div>
            </div>
        );

    }
}


export default Dashboard;