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
            <div className="bgd-dash-color">
                <Header />
                <div className="dashboard-main-bgd">
                    <h5 className="dash-main-head">Dashboard</h5>
                    <div className='row'>
                        <Col sm={10}>
                            <div className="sub-dashboard">
                                <Col sm={2}>
                                    
                                    <h5 className="sub-dash-head">Era Swap (ES)</h5>
                                    <h5 className="sub-dash-head">0.0468 USDT</h5>
                                    <h5 className="sub-dash-head">0.00000523 BTC</h5>
                                </Col>
                                <Col sm={3}>
                                <div className="sub-supply-box">
                                    <div className="es-box-ds">
                                        <p className="supply-txt">ES CURRENT SUPPLY</p>
                                        <p className="supply-txt">1222928288.80 ES</p>
                                    </div>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                <div className="sub-supply-box">
                                    <div className="es-box-ds">
                                        <p className="supply-txt">TOTAL ES USERS</p>
                                        <p className="supply-txt">10005 Users</p>
                                    </div>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                <div className="sub-supply-box">
                                    <div className="es-box-ds">
                                        <p className="supply-txt">TOTAL ES USERS</p>
                                        <p className="supply-txt">10005 Users</p>
                                    </div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <h5 className="nrt-head">Next NRT Count</h5>
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
                </div>
                <div className="bgd-dash-color">
                    <div className="dash-section-2">
                        <Row>

                            <div className="section-border">
                                <p className="sect-txt-bold">Bitcoin (BTC)</p>
                                <p className="value-dash-txt">$9029.61</p>
                            </div>



                            <div className="section-border">
                                <p className="sect-txt-bold">Ethereum (ETH)</p>
                                <p className="value-dash-txt">$171.9</p>
                            </div>



                            <div className="section-border">
                                <p className="sect-txt-bold">CIRCULATING OUTSIDE TA</p>
                                <p className="value-dash-txt">1002658636.87 ES</p>
                            </div>

                            <div className="section-border">
                                <p className="sect-txt-bold">ES FROM NRT THIS MONTH</p>
                                <p className="value-dash-txt">68301836.73 ES</p>
                            </div>


                            <div className="section-border">
                                <p className="sect-txt-bold">NUMBER OF DAYSWAPPERS</p>
                                <p className="value-dash-txt">68301836.73 ES</p>
                            </div>

                            <div className="section-border">
                                <p className="sect-txt-bold">NUMBER OF DAYSWAPPERS</p>
                                <p className="value-dash-txt">68301836.73 ES</p>

                            </div>
                        </Row>
                        <div className="wrapper-sub-section">
                            <Row>

                                <div className="section-border">
                                    <p className="sect-txt-bold">ECOSYSTEM TRANSACTIONS</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>



                                <div className="section-border">
                                    <p className="sect-txt-bold">UNUSED POWER TOKENS</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>



                                <div className="section-border">
                                    <p className="sect-txt-bold">LUCK POOL IN NRT</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>



                                <div className="section-border">
                                    <p className="sect-txt-bold">BURN POOL (IN NEXT NRT)</p>
                                    <p className="value-dash-txt">68301836.73 ES</p>
                                </div>



                                <div className="section-border">
                                    <p className="sect-txt-bold">TOTAL ES BURNED</p>
                                    <p className="value-dash-txt">51519927.21 ES</p>
                                </div>

                            </Row>

                            <Row>

                                <div className="section-border">
                                    <p className="sect-txt-bold">MARKET CAP</p>
                                    <p className="value-dash-txt">$57233043</p>
                                </div>



                                <div className="section-border">
                                    <p className="sect-txt-bold">24HR VOL (PROBIT GLOBAL)</p>
                                    <p className="value-dash-txt">208628.88 USDT</p>
                                </div>


                                <div className="section-border">
                                    <p className="sect-txt-bold">CROWDFUND PRICE</p>
                                    <p className="value-dash-txt">$0.0078</p>
                                </div>



                                <div className="section-border">
                                    <p className="sect-txt-bold">ALL TIME HIGH</p>
                                    <p className="value-dash-txt">1.42 USDT</p>
                                </div>



                                <div className="section-border">
                                    <p className="sect-txt-bold">ALL TIME LOW</p>
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
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo' src={Images.path.timeally} alt='logo' />
                                    <p className="platfrm-txt"> TIMEALLY STAKERS</p>
                                </div>
                                <Row>
                                    <Col sm={5}></Col>
                                    <Col sm={7}>
                                        <div className="flex-sect4-box">
                                            <div className="timeally-mark"></div><p className="sect4-context">Volume of 1 year stakings
                                              96353517.34 ES</p>
                                        </div>
                                        <div className="flex-sect4-box">
                                            <div className="timeally-mark2"></div><p className="sect4-context">Volume of 1 year stakings
                                              96353517.34 ES</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="timelly-flex tm-border">
                                    <p className="sect4-context">Total Volume of Stakings</p>
                                    <p className="sect4-value-bold">1002658636.87 ES</p>
                                </div>
                                <div className="timelly-border-flex">
                                    <p className="sect4-context">Total Volume of Stakings</p>
                                    <p className="sect4-value-bold">1002658636.87 ES</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo2' src={Images.path.timeswapper} alt='logo' />
                                    <p className="platfrm-txt">TIMESWAPPERS</p>
                                </div>
                                <div className="ts-flex tm-border">
                                    <div>
                                        <p className="sect4-context">Total Number of Users</p>
                                        <p className="sect4-value">644 User</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Number of Freelancers/Services</p>
                                        <p className="sect4-value">71 Users</p>
                                    </div>
                                </div>
                                <div className="ts-flex tm-border">
                                    <div>
                                        <p className="sect4-context">TFC generated</p>
                                        <p className="sect4-value">10.33 ES</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Verified</p>
                                        <p className="sect4-value">5 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Certified</p>
                                        <p className="sect4-value">2 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Deposit Done</p>
                                        <p className="sect4-value">11 ES</p>
                                    </div>
                                </div>

                                <div className="ts-flex tm-border">
                                    <div>
                                        <p className="sect4-context">Number of Views on </p>
                                        <p className="sect4-context">Freelancer Portfolio pages</p>
                                        <p className="sect4-value">136 views</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Withdraw done</p>
                                        <p className="sect4-value">0 ES</p>
                                    </div>
                                </div>


                                <div className="timelly-border-flex">
                                    <div>
                                        <p className="sect4-context">Total Jobs Posted</p>
                                        <p className="sect4-value">6 jobs</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Jobs Done</p>
                                        <p className="sect4-value">0 jobs</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo' src={Images.path.dayswapper} alt='logo' />
                                    <p className="platfrm-txt">DAYSWAPPERS</p>
                                </div>
                                <div className="ds-flex tm-border">
                                    <div>
                                        <p className="sect4-context">Total DaySwappers</p>
                                        <p className="sect4-value">644 User</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Liquid Reward</p>
                                        <p className="sect4-value">5843.69 ES</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Total TimeAlly Rewards</p>
                                        <p className="sect4-value">7486.48 ES</p>
                                    </div>
                                </div>
                                <div className="ds-flex tm-border">
                                    <div>
                                        <p className="sect4-context">Active Users </p>
                                        <p className="sect4-value">10 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">KYC users</p>
                                        <p className="sect4-value">5 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">White Belt</p>
                                        <p className="sect4-value">2 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Yellow Belt </p>
                                        <p className="sect4-value">11 ES</p>
                                    </div>
                                </div>

                                <div className="ds-flex tm-border">
                                    <div>
                                        <p className="sect4-context">Orange Belt </p>
                                        <p className="sect4-value">10 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Green Belt</p>
                                        <p className="sect4-value">5 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Blue Belt</p>
                                        <p className="sect4-value">2 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Brown Belt</p>
                                        <p className="sect4-value">11 ES</p>
                                    </div>
                                </div>


                                <div className="dayswappr-border-flex">
                                    <div className="dayswapper-box">
                                        <p className="sect4-context">Red Belt</p>
                                        <p className="sect4-value">6 jobs</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Black Belt</p>
                                        <p className="sect4-value">0 jobs</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo4' src={Images.path.swaal} alt='logo' />
                                    <p className="platfrm-txt"> SWAPPERS WALL </p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Power Tokens this month</p>
                                        <p className="sect4-value-swal">6830183.67 ES</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Communities</p>
                                        <p className="sect4-value-swal">38 communities</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Group</p>
                                        <p className="sect4-value-swal">15 groups</p>
                                    </div>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Pages</p>
                                        <p className="sect4-value-swal">34 pages</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Swappers</p>
                                        <p className="sect4-value-swal">2998 swappers</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Active Users</p>
                                        <p className="sect4-value-swal">644 active users</p>
                                    </div>
                                </div>
                                <div className="swapper-center">
                                    <div>
                                        <p className="sect4-context">Media Uploads</p>
                                        <p className="sect4-value">2365 media uploads</p>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Second row platforms */}
                    <Row>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo' src={Images.path.blocklogy} alt='logo' />
                                    <p className="platfrm-txt">ERASWAP ACADEMY </p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">User Counts</p>
                                        <p className="sect4-value-swal">6830183.67 ES</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Group</p>
                                        <p className="sect4-value-swal">15 groups</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Total ES Deposited</p>
                                        <p className="sect4-value">96353517.34 ES</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Users Studying Count</p>
                                        <p className="sect4-value">35 Users</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo4' src={Images.path.buzcafe} alt='logo' />
                                    <p className="platfrm-txt">BUZCAFE</p>
                                </div>
                                <div className="buz-flex-border">
                                    <div>
                                        <p className="sect4-context">Total Users</p>
                                        <p className="sect4-value-swal">644 Users</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Shops</p>
                                        <p className="sect4-value-swal">88 Shops</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Deposits</p>
                                        <p className="sect4-value-swal">0 Deposits</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Total Withdrawal</p>
                                        <p className="sect4-value">0 Withdrawal</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Internal Transactions</p>
                                        <p className="sect4-value">9 Transactions</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo4' src={Images.path.betdeex} alt='logo' />
                                    <p className="platfrm-txt">BETDEEX </p>
                                </div>
                                <div className="bet-flex-border">
                                    <div>
                                        <p className="sect4-context">Total Number of Events</p>
                                        <p className="sect4-value-swal">10 events</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Total Number of Predictors</p>
                                        <p className="sect4-value-swal">15 predictors</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Total ES volume predicted </p>
                                        <p className="sect4-context">on BetDeEx</p>
                                        <p className="sect4-value">80525.0 ES</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Highest Prediction </p>
                                        <p className="sect4-context">on BetDeEx</p>
                                        <p className="sect4-value">25000.0 ES </p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Average Prediction </p>
                                        <p className="sect4-context">on BetDeEx</p>
                                        <p className="sect4-value">2300.71 ES</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo-5' src={Images.path.computeex} alt='logo' />
                                    <p className="platfrm-txt">(YET TO GO LIVE) </p>
                                </div>
                                <div className="compute-flex-border">
                                    <div>
                                        <p className="sect4-context">Total Number of Events</p>
                                        <p className="sect4-value-swal">10 events</p>

                                    </div>
                                </div>
                                <div className="swapper-center">
                                    <div>
                                        <p className="sect4-context">Total Volume</p>
                                        <p className="sect4-value">0 ES</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Third row platforms */}
                    <Row>
                        <Col sm={6}>
                        </Col>
                        <Col sm={3}>
                        </Col>
                        <Col sm={3}>
                        </Col>
                    </Row>

                    {/* Fourth row platforms */}
                    <Row>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo' src={Images.path.blocklogy} alt='logo' />
                                    <p className="platfrm-txt">CHARITYDAPP </p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Number of Users</p>
                                        <p className="sect4-value-swal">647 Users</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of organisations </p>
                                        <p className="sect4-value-swal">120 applied</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Total Charity</p>
                                        <p className="sect4-value">120</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Org rewarded</p>
                                        <p className="sect4-value">123</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">TFC Generated</p>
                                        <p className="sect4-value">123 </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo' src={Images.path.blocklogy} alt='logo' />
                                    <p className="platfrm-txt">KYCDAPP </p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Number of Level 1 KYC</p>
                                        <p className="sect4-value-swal">647 Users</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Level 2 KYC</p>
                                        <p className="sect4-value-swal">647 Users</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Number of Level 2 KYC</p>
                                        <p className="sect4-value">647 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Platform KYC</p>
                                        <p className="sect4-value">647 Users</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo' src={Images.path.Coupondapp} alt='logo' />
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Claimed ES</p>
                                        <p className="sect4-value-swal">1111 ES</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Withdrawn ES</p>
                                        <p className="sect4-value-swal">153 ES</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Number of Users</p>
                                        <p className="sect4-value">647 Users</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">TFC Generated</p>
                                        <p className="sect4-value">123 </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo-5' src={Images.path.computeex} alt='logo' />

                                </div>
                                <div className="compute-flex-border">
                                    <div>
                                        <p className="sect4-context">Total number of Transactions</p>
                                        <p className="sect4-value-swal">10 events</p>

                                    </div>
                                </div>
                                <div className="swapper-center">
                                    <div>
                                        <p className="sect4-context">Total Volume</p>
                                        <p className="sect4-value">0 ES</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* fifth row platforms */}
                    <Row>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo2' src={Images.path.renting} alt='logo' />
                                    <p className="platfrm-txt">RENTINGDAPP</p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Number of Users</p>
                                        <p className="sect4-value-swal">647 Users</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Lenders </p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Transactions</p>
                                        <p className="sect4-value">120</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Objects Rented</p>
                                        <p className="sect4-value">123</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">TFC Generated</p>
                                        <p className="sect4-value">123 </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo2' src={Images.path.booklogo} alt='logo' />
                                    <p className="platfrm-txt">BOOKINGDAPP </p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Number of Events</p>
                                        <p className="sect4-value-swal">6 events</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Tickets</p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">TFC Generated</p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Number Of Organizers</p>
                                        <p className="sect4-value">123 </p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Users</p>
                                        <p className="sect4-value">123</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo' src={Images.path.poolingdapplogo} alt='logo' />
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Transactions</p>
                                        <p className="sect4-value-swal">1111 ES</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Tickets</p>
                                        <p className="sect4-value-swal">153 ES</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Vehicle Owners</p>
                                        <p className="sect4-value">647 Users</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Number Of Rides</p>
                                        <p className="sect4-value">120 </p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">TFC Generated</p>
                                        <p className="sect4-value">123 </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo4' src={Images.path.curedapplogo} alt='logo' />

                                </div>
                                <div className="bet-flex-border">
                                    <div>
                                        <p className="sect4-context">Equipments</p>
                                        <p className="sect4-value-swal">10 </p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Doctors</p>
                                        <p className="sect4-value-swal">15</p>
                                    </div>

                                    <div>
                                        <p className="sect4-context">Cases Solved</p>
                                        <p className="sect4-value-swal">15 </p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">Number Of Users</p>

                                        <p className="sect4-value">123 </p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Cetificates</p>

                                        <p className="sect4-value">123  </p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* sixth row platforms */}
                    <Row>

                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo2' src={Images.path.booklogo} alt='logo' />
                                    <p className="platfrm-txt">FAITH MINUS</p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Cases Solved</p>
                                        <p className="sect4-value-swal">6 events</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Cases Pending</p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Curators</p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Transactions</p>
                                        <p className="sect4-value-swal">120</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Organizations rewarded</p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">TFC Generated</p>
                                        <p className="sect4-value">123 </p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="section4-border">
                                <div className="flex-sect4-box">
                                    <img className='platfrm-logo2' src={Images.path.dateswappr} alt='logo' />
                                    <p className="platfrm-txt">DATE SWAPPERS</p>
                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Number of Meet Ups</p>
                                        <p className="sect4-value-swal">647 meetups</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Users</p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>

                                </div>
                                <div className="swwall-flex-border">
                                    <div>
                                        <p className="sect4-context">Transactions</p>
                                        <p className="sect4-value-swal">120</p>

                                    </div>
                                    <div>
                                        <p className="sect4-context">Number of Trips</p>
                                        <p className="sect4-value-swal">120</p>
                                    </div>
                                </div>
                                <div className="swwall-border-flex">
                                    <div>
                                        <p className="sect4-context">ES Withdrawn</p>
                                        <p className="sect4-value">123 </p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                        </Col>
                    </Row>
                </div>
            </div>
        );

    }
}


export default Dashboard;