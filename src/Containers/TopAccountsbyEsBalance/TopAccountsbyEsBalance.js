import React, { Component } from 'react';
import './TopAccountsbyEsBalance.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class TopAccountsbyEsBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="node-status">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Top Accounts by ES Balance</h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40 eraswapcal-tab">
            <Col lg={12}>
              <div className="card">
                <div className="table-responsive">
                  <table className="es-transaction striped  hover ">
                    <tr>
                      <th>Rank</th>
                      <th>Address</th>
                      <th>Name Tag</th>
                      <th>Stake </th>
                      <th>Balance</th>
                      <th>Percentage</th>
                      <th>Txn Count</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>Bitfinex 2</td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td><span className="">3,875,156.<span className="explr-purple-text">77305048</span> ES</span></td>
                      <td>3.45758416% </td>
                      <td>8,374</td>
                    </tr>
                   
                   
                    

                  </table>
                </div>
              </div>
              <div className="cus-pagination row">
                <div className="col-md-12 text-right">
                  <button type="button" className="btn mr10 mt10">
                    Back
                  </button>
                  <button type="button" className="btn mr10 mt10">
                    Next
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TopAccountsbyEsBalance;
