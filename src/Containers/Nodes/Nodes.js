import React, { Component } from 'react';
import './Nodes.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class Nodes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="node-status">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Nodes</h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40">
            <Col lg={12}>
              <div className="card">
                <div className="table-responsive">
                  <table className="es-transaction striped bordered hover table">
                    <tr>
                      <th>Wallet Address</th>
                      <th>Last Seen</th>
                      <th>Host</th>
                      <th>Port</th>
                      <th>OS</th>
                      <th>Stakes</th>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>0x36560493644fbb79f1c38D12fF096F7ec5D333b7</td>
                      <td>1 hr 4 mins ago</td>
                      <td>35.187.226.64</td>
                      <td>30303</td>
                      <td>X86_64-linux-gnu</td>
                      <td>
                        <p className="">
                          3,875,156.<span>77305048</span> ES
                        </p>
                      </td>
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

export default Nodes;
