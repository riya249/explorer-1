import React, { Component } from 'react';
import './TimeallyExplorer.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';


class TimeallyExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Header />
                <Container>
                    <p className="trans-head">TimeAlly Explorer</p>
                    <p className="explr-txt">Era Swap is a Block Explorer and Analytics Platform for</p>
                    <p className="explr-txt">Era Swap, a decentralized smart contracts platform</p>
                    <Row>
                        <table className="es-transaction">
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