import React, { Component } from 'react';
import './nodestatus.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

class Nodestatus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="node-status">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Node Status</h2>
        </div>
        <Container>
          {/* <p className="trans-head">TimeAlly Explorer</p> */}

          <Row className="mt40">
            <Col lg={12}>
              <div className="card">
                <div className="table-responsive">
                <table className="es-transaction striped bordered hover table">
                  <tr>
                    <th>Node Name</th>
                    <th>Latest Block Number</th>
                    <th>New Pending Transactions</th>
                    <th>Timestamp</th>
                    <th>Transactions</th>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                    <td>0</td>
                    <td>6/16/2020, 4:59:13 PM</td>
                    <td>
                      <a href="btn">
                        <Link to="/Nodestatustransaction">
                          View All Transactions{' '}
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                    <td>0</td>
                    <td>6/16/2020, 4:59:13 PM</td>
                    <td>
                      <a href="btn">
                        <Link to="/Nodestatustransaction">
                          View All Transactions{' '}
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                    <td>0</td>
                    <td>6/16/2020, 4:59:13 PM</td>
                    <td>
                      <a href="btn">
                        <Link to="/Nodestatustransaction">
                          View All Transactions{' '}
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                    <td>0</td>
                    <td>6/16/2020, 4:59:13 PM</td>
                    <td>
                      <a href="btn">
                        <Link to="/Nodestatustransaction">
                          View All Transactions{' '}
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                    <td>0</td>
                    <td>6/16/2020, 4:59:13 PM</td>
                    <td>
                      <a href="btn">
                        <Link to="/Nodestatustransaction">
                          View All Transactions{' '}
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                    <td>0</td>
                    <td>6/16/2020, 4:59:13 PM</td>
                    <td>
                      <a href="btn">
                        <Link to="/Nodestatustransaction">
                          View All Transactions{' '}
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>ESN Node</td>
                    <td>109972</td>
                    <td>0</td>
                    <td>6/16/2020, 4:59:13 PM</td>
                    <td>
                      <a href="btn">
                        <Link to="/Nodestatustransaction">
                          View All Transactions{' '}
                          <i
                            class="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </a>
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

export default Nodestatus;
