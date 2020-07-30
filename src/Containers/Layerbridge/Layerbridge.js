import React, { Component } from 'react';
import './layerbridge.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class Layerbridge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="layer-bridge">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Layer2 Bridge</h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40">
            <Col lg={6}>
              <div className="card">
                <table className="es-transaction striped bordered hover">
                  <tr>
                    <td className="noborder" width="150">
                      <p className="explr-text-black">ESN to ETH</p>
                    </td>
                    <td className="noborder">
                      <p className="explr-purple-text">
                        Last Block Number on Plasma Smart <br />
                        Contract: 110783 (+39 blocks pending)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>Start Block Number</th>
                    <th>Bunch Depth</th>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                  </tr>
                </table>
              </div>
            </Col>
            <Col lg={6}>
              <div className="card">
                <table className="es-transaction striped bordered hover">
                  <tr>
                    <td className="noborder" width="150">
                      <p className="explr-text-black">ESN to ETH</p>
                    </td>
                    <td className="noborder">
                      <p className="explr-purple-text">
                        Live block number of Rinkeby ETH (Layer 1): 6871773
                        <br />
                        Block number confirmed on ESN Reverse Plasma Contract:
                        6869710(2061 pending)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>Block Number for Ex</th>
                    <th>Consensus</th>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                  <tr>
                    <td>512</td>
                    <td>6838486 (34% confirmed)</td>
                  </tr>
                </table>
              </div>
            </Col>
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layerbridge;
