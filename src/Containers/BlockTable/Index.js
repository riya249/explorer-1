import React, { Component } from 'react';
import './BlockTable.css'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Index';


class BlockTable extends Component {
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
                    <p className="trans-head">Blocks</p>
                    <table className="es-transaction">
                        <tr>
                            <th>Block </th>
                            <th>Age</th>
                            <th>Txn </th>
                            <th>Uncles</th>
                            <th>Miner</th>
                            <th>Gas Used</th>
                            <th>Gas Limit </th>
                            <th>Avg.Gas Price</th>
                            <th>Reward</th>
                        </tr>
                        <tr>
                            <td>10301065</td>
                            <td>52 secs ago</td>
                            <td>94</td>
                            <td>0</td>
                            <td>Spark Pool </td>
                            <td>11,544,474 (97.71%)</td>
                            <td>0.000546</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei </td>
                            <td>2.28994 ES</td>
                        </tr>
                    </table>

                </Container>
            </div>
        );

    }
}


export default BlockTable;