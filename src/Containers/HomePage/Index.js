import React, { Component } from 'react';
import './Homepage.css'
import Images from '../../Containers/Images/Images';
import Navbar from '../../Components/Navbar/Navbar';
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



        return (
            <div>
                <div className='booking-hero-bgd'>
                    <Navbar />
                    <h2 className="es-main-head">Era Swap Blockchain Explorer</h2>
                </div>
                <div className="esexplorer-Container">

                    <div className="home-search-container">

                        <Container>
                            <form >
                                <input type="text" placeholder="block, hash, transaction etc.." name="search" className="search-field" />
                                <button className="search-btn"> <img className='search-Img' src={Images.path.search} /></button>
                            </form>
                        </Container>
                    </div>
                </div>
                <div className="es-explorer-wrapper">
                    <Container>
                        <div className="second-section-es">
                            <Row>
                                <Col sm={4}>
                                    <div className="flex-eraswap">
                                        <img src={Images.path.escolor} className='escolor-pic1' />
                                        <div>
                                            <p className="era-head">ERA SWAP PRICE</p>
                                            <p>$229.86 <span>@ 0.02469 BTC</span>  <span> (+0.61%)</span></p>
                                        </div>
                                    </div>
                                    <div >
                                        <p className="era-head">ERA SWAP PRICE</p>
                                        <p>$229.86</p>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="flex-transc">
                                        <div>
                                            <p className="era-head">TRANSACTIONS </p>
                                            <p className="era-value">738.81 M <span className="era-span">(12.1 TPS)</span></p>
                                        </div>
                                        <div>
                                            <p className="era-head">SAFE GAS PRICE</p>
                                            <p className="era-value">27 Gwel <span className="era-span">($0.13)</span></p>
                                        </div>
                                    </div>
                                    <div className="flex-transc border-value">
                                        <div>
                                            <p className="era-head">DIFFICULTY</p>
                                            <p className="era-value">2,359.39 TH</p>
                                        </div>
                                        <div >
                                            <p className="era-head">HASH RATE</p>
                                            <p className="era-value">190,198.77 GH/s</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div>
                                        <p className="era-head">ERA SWAP TRANSACTION HISTORY IN 14 DAYS</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm={4}>
                                <div className="border-era">Latest Bunch </div>
                                <table className="era-transaction">
                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>
                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.4854 ES </div> </td>
                                    </tr>
                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>
                                </table>
                                <div className="border-era-two">
                                    <button className="era-view-btn">View all Bunch</button>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="border-era">Latest Blocks</div>
                                <table className="era-transaction">
                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>

                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>

                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>
                                </table>
                                <div className="border-era-two">
                                    <button className="era-view-btn">View all Bunch</button>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="border-era">Latest Transactions</div>
                                <table className="era-transaction">
                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>

                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>
                                    <tr>
                                        <td className="frst-era">
                                            10301065
                                            <div className="sub-frst">45 secs ago</div>
                                        </td>
                                        <td>Miner <span className="frst-era">zhizhu.top</span> <div className="sub-frst">45 secs ago</div> </td>
                                        <td><div className="era-no">2.48 ES </div> </td>
                                    </tr>


                                </table>
                                <div className="border-era-two">
                                    <button className="era-view-btn">View all Bunch</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        );

    }
}


export default Homepage;