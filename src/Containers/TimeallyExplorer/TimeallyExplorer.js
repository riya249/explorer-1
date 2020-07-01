import React, { Component } from 'react';
import './TimeallyExplorer.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';


class TimeallyExplorer extends Component {
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
                    <h2 className="es-main-head es-main-head-inner">TimeAlly Explorer</h2>
                    <p className="explr-txt">Era Swap is a Block Explorer and Analytics Platform for</p>
                    <p className="explr-txt">Era Swap, a decentralized smart contracts platform</p>
                </div>
                <Container>
                    {/* <p className="trans-head">TimeAlly Explorer</p> */}
                    
                    <Row className="mt40">
                         <div className="col-md-12 pull-right">
                             <a className="time-dwnld pull-right down-data">Download This Data</a>
                         </div>
                        <table className="es-transaction striped bordered hover">
                            <tr>
                                <th>Address</th>
                                <th>Plan</th>
                                <th>Amount</th>
                                <th>Staking Type</th>
                                <th>Timestamp</th>
                            </tr>
                            <tr>
                                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                                <td>1 Year</td>
                                <td>7804.97</td>
                                <td>Reward Staking</td>
                                <td>6/16/2020, 4:59:13 PM </td>
                            </tr>
                            <tr>
                                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                                <td>1 Year</td>
                                <td>7804.97</td>
                                <td>Reward Staking</td>
                                <td>6/16/2020, 4:59:13 PM </td>
                            </tr>
                            <tr>
                                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                                <td>1 Year</td>
                                <td>7804.97</td>
                                <td>Reward Staking</td>
                                <td>6/16/2020, 4:59:13 PM </td>
                            </tr>
                            <tr>
                                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                                <td>1 Year</td>
                                <td>7804.97</td>
                                <td>Reward Staking</td>
                                <td>6/16/2020, 4:59:13 PM </td>
                            </tr>
                            <tr>
                                <td>0x3c93616a08b29b978c5a18becfe82f3460303135</td>
                                <td>1 Year</td>
                                <td>7804.97</td>
                                <td>Reward Staking</td>
                                <td>6/16/2020, 4:59:13 PM </td>
                            </tr>
                        </table>
                    </Row>
                </Container>
            </div>
        );

    }
}


export default TimeallyExplorer;