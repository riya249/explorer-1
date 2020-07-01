import React, { Component } from 'react';
import './Blocks.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class Blocks extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="blocks-table">
               <div className='booking-hero-bgd booking-hero-bgd-inner'>
                    <Navbar />
                    <h2 className="es-main-head es-main-head-inner">Blocks</h2>
                 </div>
                <Container>
                   
                    <table className="es-transaction ">
                        <tr>
                            <th>Block</th>
                            <th>Age</th>
                            <th>Txn</th>
                            <th>Uncles</th>
                            <th>Miner</th>
                            <th>Gas Used</th>
                            <th>Gas Limit</th>
                            <th>Avg.Gas Price</th>
                            <th>Reward</th>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td className="tr-color-txt">Spark Pool</td>
                            <td className="underline">11,544,474 <span className="tr-color-txt">(97.71%)</span></td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt">10301065</td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td className="tr-color-txt">Spark Pool</td>
                            <td className="underline">11,544,474 <span className="tr-color-txt">(97.71%)</span></td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt">10301065</td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td className="tr-color-txt">Spark Pool</td>
                            <td className="underline">11,544,474 <span className="tr-color-txt">(97.71%)</span></td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt">10301065</td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td className="tr-color-txt">Spark Pool</td>
                            <td className="underline">11,544,474 <span className="tr-color-txt">(97.71%)</span></td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt">10301065</td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td className="tr-color-txt">Spark Pool</td>
                            <td className="underline">11,544,474 <span className="tr-color-txt">(97.71%)</span></td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt">10301065</td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td className="tr-color-txt">Spark Pool</td>
                            <td className="underline">11,544,474 <span className="tr-color-txt">(97.71%)</span></td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt">10301065</td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td className="tr-color-txt">Spark Pool</td>
                            <td className="underline">11,544,474 <span className="tr-color-txt">(97.71%)</span></td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>


                    </table>

                </Container>
            </div>
        );

    }
}


export default Blocks;