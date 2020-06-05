import React, { Component } from 'react';
import './Homepage.css'
import Images from '../../Containers/Images/Images';
import Navbar from '../../Components/Navbar/Navbar';
import UpcomingEvent from '../../Containers/UpcomingEvent/UpcomingEvent';
import EntertainEvent from '../../Containers/EntertainEvent/EntertainEvent';
import { Col, Button, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div className="ticket-wrap-para">List your event on BookingDapp by simply, clicking on Create an Event button, and mention all the required information of your event like – the Title, Description, Venue, Date, and Seat Map of your event..</div>,
    },
    {
        path: '/section2',
        sidebar: () => <div className="ticket-wrap-para">Once your event is successfully listed, add the number of tickets you are adding for sale, once your event tickets are listed, will connect you with your participants directly, in a P2P mode.</div>,

    },
    {
        path: '/section3',
        sidebar: () => <div className="ticket-wrap-para">Now, that all the process is completed, you can receive the value you deserve by selling your tickets directly, to the purchaser in the Peer-to-Peer mode, without paying huge cuts or multi-layer middlemen charges</div>,

    },
]

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };

        return (
            <div>
                <div className='booking-hero-bgd'>
                    <div className='wrapper-container-home'>
                        <Navbar />
                        <div className="hero-container">
                            <div>ALL THE FUN STARTS HERE</div>
                            <div className="discover-txt">Discover</div>
                            <div className="music-txt"><span className="music-color"><span href="" class="typewrite" data-period="2000" data-type='[ "Concerts", "Sport Events", "Parties", "Conferences" ,"Social Events" ]'>
                                <span class="wrap"></span>
                            </span></span> around You.</div>
                        </div>
                        <div className="hero-category-container">
                            <div className="catg-main">
                                <div className="part-select">
                                    <h5>WHAT</h5>
                                    <p className="choose-categr">Select Category</p>
                                </div>
                                <div className="part-select">
                                    <h5>WHERE</h5>
                                    <p className="choose-categr">Select Location</p>
                                </div>
                                <div className="part-select">
                                    <h5>WHEN</h5>
                                    <p className="choose-categr" >Select Date</p>
                                </div>
                                <div className="part-select">
                                    <button className="search-btn">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bookindapp-Container">

                    <UpcomingEvent />
                    <EntertainEvent />
                    <div className="book-box-img">
                        <img className='bookingOffer-img' src={Images.path.bookingOffer} />
                    </div>
                    <Container>
                        <div className="margin-left-ticket">
                            <div className="row">
                                <Router>
                                    <Col sm={6} >
                                        <p class="subtitle">How to</p>
                                        <h3 class="font-weight-bold">Sell Your Tickets</h3>

                                        {routes.map((route) => (
                                            <Route
                                                key={route.path}
                                                path={route.path}
                                                exact={route.exact}
                                                component={route.sidebar}
                                            />
                                        ))}

                                        <div className="sub-tick-txt">
                                            <Link to="/"><h4 class="pb-3-txt"><span class="text-red">01</span>Create an Event</h4></Link>
                                            <Link to="/section2"> <h4 class="pb-3-txt"><span class="text-red">02</span>Add Tickets</h4></Link>
                                            <Link to="/section3"> <h4 class="pb-3-txt"><span class="text-red">03</span>Earn Money</h4></Link>
                                        </div>
                                    </Col>
                                </Router>
                                <Col sm={4} >
                                    <img className='sideticket-img' src={Images.path.eventNine} />
                                </Col>
                            </div>
                            <div className="started-box">
                                <button className="Started-btn-btn">Get Started</button>
                            </div>
                        </div>
                    </Container>


                    <Container>
                        <div className="testimonial-container">
                            <p class="subtitle">Testimonials</p>
                            <h3 class="font-weight-bold">Hear From Our Organizers</h3>
                            <Container>
                                <Row>
                                    <Col sm={4}>
                                        <div className="org-head-txt">BookingDapp Features</div>
                                        <p>Some unique features that make Booking Dapp different</p>
                                        <div className="">
                                            <img className='user-img-pf' src={Images.path.imgProfile} />
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="org-head-txt">Decentralized</div>
                                        <p>BookingDapp is decentralized, and with a decentralized approach BookingDapp, keeps middlemen and all the parts of centralized platforms which make the process difficult and slow.</p>

                                        <div className="">
                                            <img className='user-img-pf' src={Images.path.imgProfile} />
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="org-head-txt">P2P Connectivity</div>
                                        <p>BookingDapp gives Buyer and Seller, a complete self-sustainable platform to transact, so user here can connect and transact with each other, in a Peer-to-Peer mode, to make the complete process efficient and fast.</p>
                                        <div className="">
                                            <img className='user-img-pf' src={Images.path.imgProfile} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </div>
            </div>

        );

    }
}


export default Homepage;