import React, { Component } from 'react';
import './Bunch.css'
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class Bunch extends Component {
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
                    <h2 className="es-main-head es-main-head-inner">Bunch</h2>
                 </div>
                <Container>
                   
                    <table className="es-transaction ">
                        <tr>
                            <th>Signers</th>
                            <th>Last Block Hash</th>
                            <th>Start Block Number</th>
                            <th>End Block Number</th>
                            <th>Number of Blocks </th>
                            <th>Number of Transaction</th>
                            <th>Bunch Depth</th>
                            <th>Receipts Block Hash</th>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
                            <td>11,814,839 </td>
                            <td>24.83 Gwei</td>
                            <td>2.28994 ES</td>
                        </tr>
                        <tr>
                            <td className="tr-color-txt"><a href="/BlockPage">102587</a></td>
                            <td>52 secs ago</td>
                            <td className="tr-color-txt">94</td>
                            <td>0</td>
                            <td>0</td>
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


export default Bunch;