import React, { Component } from 'react';
import './Overview.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';



class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Container>
                    <table className="block-overview">
                        <tr>
                            <td>Block Height: </td>
                            <td>10302495</td>
                          
                        </tr>
                        <tr>
                            <td>Timestamp:</td>
                            <td>8 mins ago (Jun-20-2020 11:58:06 Am +UTC)</td>
                            
                        </tr>
                        <tr>
                            <td>Transactions:</td>
                            <td>111 transactions and 51 contract internal transactions in this block</td>
                           
                        </tr>
                        <tr>
                            <td>Mined By:</td>
                            <td> 0x442d36c557d86b2251fdf6b9cf9d2810 (Ethermine) in 14 secs</td>
                            
                        </tr>
                        <tr>
                            <td>Block Reward:</td>
                            <td>2.36648154845164884845 ES (2+0.3565451645884654)</td>
                           
                        </tr>
                        <tr>
                        <td>Uncles Reward:</td>
                            <td>0</td>
                           
                        </tr>
                        <tr>
                        <td>Difficulty</td>
                          <td>2,332,829,297,798</td>
                        </tr>

                       <tr>
                        <td>Total Difficulty: </td>
                        <td>15,928,285,456,798,756</td>
                        </tr>

                        <tr>
                        <td>Size:</td>
                        <td>21,045 bytes</td>
                        </tr>

                        <tr>
                        <td>Gas Used:</td>
                        <td>12,018,436 (99.91%)</td>
                        </tr>

                        <tr>
                        <td>Gas Limit:</td>
                        <td>12,029,018</td>
                        </tr>

                        <tr>
                        <td>Extra Data:</td>
                        <td>PPYE-ethermine-eu1-7 (Hex:0x505059452d65746865726d696e652d6575312d37)</td>
                        </tr>

                        <tr>
                        <td>Parent Hash:</td>
                        <td>0x442d36c557d86b2251fdf6b9cf9d2810a24422ab5b544c05125adc05351dc868</td>
                        </tr>

                        <tr>
                        <td>Sha3Uncles:</td>
                        <td>0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347</td>
                        </tr>

                        <tr>
                        <td>Nonce:</td>
                        <td>0x883cd80802b40e3b</td>
                        </tr>
                    </table>

                </Container>
            </div>
        );

    }
}


export default Overview;