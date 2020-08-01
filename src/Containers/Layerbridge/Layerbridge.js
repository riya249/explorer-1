import React, { Component } from 'react';
import './layerbridge.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';

class Layerbridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toESNblocks: {
        data: [],
        isLoading: true
      },
    };
  }

  componentDidMount() {
    this.fetchToESNBlocks();
  }

  async fetchToEthBlocks() {
    try{
    const res = await Apis.fetchBunches()
      console.log('toeth blocks', res);
    } catch (e) {
      console.log(e);
    } finally {
      
    }
  }

  async fetchToESNBlocks() {
    let res;
    try {
      res = await Apis.fetchLayer2ToESNBlock() 
      console.log('res', res);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        toESNblocks: {
          data: res || [],
          isLoading: false,
        },
      });
    }
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
                <div className="table-responsive">
                  <table className="es-transaction striped bordered hover table">
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
              </div>
            </Col>
            <Col lg={6}>
              <div className="card">
                <div className="table-responsive">
                  <table className="es-transaction striped bordered hover table">
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layerbridge;
