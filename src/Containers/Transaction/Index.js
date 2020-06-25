import React, { Component } from 'react';
import './Transaction.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Index';


class Transaction extends Component {
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
                    <p className="trans-head">Transactions</p>
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
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>
                        

                        <tr>
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>
                        <tr>
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
                            <td>0.065 ES </td>
                            <td>0.000546</td>
                        </tr>

                        <tr>
                            <td>0x3c93616a08b29b9...</td>
                            <td>10302362</td>
                            <td>18 sec ago</td>
                            <td>Mahesh Rapelli 0x3c93616a08b...</td>
                            <td>Soham Zemse 0x3c93616a08b... </td>
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