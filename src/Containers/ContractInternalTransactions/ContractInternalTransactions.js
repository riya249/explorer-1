import React, { Component } from 'react';
import './ContractInternalTransactions.css';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import { toLocaleTimestamp } from '../../lib/parsers';
import AddressLink from '../../Components/AddressLink/AddressLink';

class ContractInternalTransactions extends Component {
  blockNumber = '';

  constructor(props) {
    super(props);
    this.state = {
      block: {
        data: {},
        isLoading: true,
      },
      transactions: {
        data: [],
        isLoading: true,
      },
    };

    const {
      match: { params },
    } = this.props;
    if (params?.blockNumber) this.blockNumber = params.blockNumber;
  }

  componentDidMount() {
    if (this.blockNumber) {
      this.fetchInternalTxns();
    }
  }

  async fetchInternalTxns() {
    let res = [];
    try {
      res = await Apis.fetchInternalTransactionsByBlock(this.blockNumber);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        block: {
          data: res?.block,
          isLoading: false,
        },
        transactions: {
          data: res?.txns && Array.isArray(res.txns) ? res.txns : [],
          isLoading: false,
        },
      });
    }
  }

  render() {
    return (
      <div className="node-status compage">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            Contract Internal Transactions
          </h2>
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
                    {this.state.transactions.isLoading ? (
                      <tr>
                        <td colSpan="7">Loading...</td>
                      </tr>
                    ) : this.state.transactions.data?.length ? (
                      this.state.transactions.data?.map((txn, i) => (
                        <tr>
                          <td>
                            {i === 0 && (
                              <b>
                                <span className="explr-purple-text">
                                  {this.blockNumber && (
                                    <AddressLink
                                      value={this.blockNumber}
                                      type="block"
                                    />
                                  )}
                                </span>
                              </b>
                            )}
                          </td>
                          <td>
                            {(
                              this.state.block?.data?.timestamp &&
                              toLocaleTimestamp(
                                this.state.block?.data?.timestamp
                              )
                            ).format('hh:mm A DD/MM/YYYY') || '-'}
                          </td>
                          <td>
                            {txn.parentTxn?.txn_hash && (
                              <AddressLink
                                value={txn.parentTxn?.txn_hash}
                                type="tx"
                              />
                            )}
                          </td>
                          <td>{txn.tx_type || '-'}</td>
                          <td>
                            {txn.fromAddress?.address && (
                              <AddressLink
                                value={txn.fromAddress?.address}
                                type="address"
                              />
                            )}
                          </td>
                          <td>
                            {txn.toAddress?.address && (
                              <AddressLink
                                value={txn.toAddress?.address}
                                type="address"
                              />
                            )}
                          </td>
                          <td>
                            {txn.value !== null ? txn.value + ' ES' : '-'}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No Transactions</td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
              {/* <div className="cus-pagination row">
                <div className="col-md-12 text-right">
                  <button type="button" className="btn mr10 mt10">
                    Back
                  </button>
                  <button type="button" className="btn mr10 mt10">
                    Next
                  </button>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContractInternalTransactions;
