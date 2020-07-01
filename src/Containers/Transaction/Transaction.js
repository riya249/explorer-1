import React, { Component } from 'react';
import './Transaction.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class Transaction extends Component {
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
                    <h2 className="es-main-head es-main-head-inner">Transactions</h2>
                 </div>
                <Container>
                   
                    <table className="es-transaction">
                        <tr>
                            <th>Txn Hash </th>
                            <th>Block</th>
                            <th>Age</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Value</th>
                            <th>(Txn Fee)</th>
                        </tr>
                        <tr>
                            <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>
                        

                        <tr>
                        <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                        <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                        <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                        <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>
                        <tr>
                        <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                        <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                        <td className="tr-color-txt">0x3c93616a08b29b9...</td>
                            <td className="tr-color-txt">10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>Soham Zemse <span className="tr-color-txt">0x3c93616a08b...</span></td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>
                    </table>

                </Container>
            </div>
        );

    }
}


export default Transaction;