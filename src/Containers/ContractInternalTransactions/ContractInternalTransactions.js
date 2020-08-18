import React, { Component } from 'react';
import './ContractInternalTransactions.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class ContractInternalTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="node-status compage">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Contract Internal Transactions</h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40 eraswapcal-tab">
            <Col lg={12}>
              <div className="card">
                <div className="table-responsive">
                  <table className="es-transaction striped  hover ">
                    <tr>
                      <th>Block</th>
                      <th>Age</th>
                      <th>Parent Txn Hash</th>
                      <th>Type </th>
                      <th>From</th>
                      <th>To</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td><b><span className="explr-purple-text">10612081</span></b></td>
                      <td>33 secs ago</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>0x36560493644fbb</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>

               
                    <tr>
                      <td><b><span className="explr-purple-text">10612080</span></b></td>
                      <td>41 secs ago</td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>0x36560493644fbb</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>call</td>
                      <td>0x36560493644fbb</td>
                      <td>Uniswap V2: Router 2</td>
                      <td>1 ES</td>
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

export default ContractInternalTransactions;
