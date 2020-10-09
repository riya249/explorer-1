import React, { Component } from 'react';
import './InternalTransactions.css';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import AddressLink from '../../Components/AddressLink/AddressLink';
import * as moment from 'moment';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import { ethers } from 'ethers';
import { formatEther, toLocaleTimestamp } from '../../lib/parsers';

class InternalTransactions extends Component {
  snackbarRef = React.createRef();

  parentHash;

  constructor(props) {
    super(props);
    this.state = {
      transactions: {
        data: [],
        isLoading: true,
      },
    };

    const {
      match: { params },
    } = this.props;
    if (params?.parentHash) this.parentHash = params.parentHash;

    console.log('this.parentHash', this.parentHash);
    this.fetchTransactions = this.fetchTransactions.bind(this);
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  async fetchTransactions() {
    try {
      const res = await Apis.fetchInternalTransactionsByHash(this.parentHash);
      console.log('res', res);
      this.setState({
        transactions: {
          data: res,
          isLoading: false,
        },
      });
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        transactions: {
          ...this.state.transactions,
          data: [],
          isLoading: false,
        },
      });
    }
  }

  openSnackBar = (message) => {
    console.log('e', message);
    // this.snackbarRef.current.openSnackBar(message);
  };

  render() {
    return (
      <div className="blocks-table">
        <div className="booking-hero-bgd booking-hero-bgd-inner ">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">
            Internal Transactions
          </h2>
        </div>
        <Container>
          {this.parentHash && (
            <span>
              <br></br>
              Showing internal transactions of Transaction{' '}
              <AddressLink
                value={this.parentHash}
                type="block"
                style={{ fontSize: '20px' }}
              />
            </span>
          )}
          <Row className="mt40">
            <Col lg={12}>
              <div className="card">
                <div className="table-responsive">
                  <table className="es-transaction table">
                    <thead>
                      <tr>
                        <th>Transaction Index</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Gas Used</th>
                        <th>Gas</th>
                        <th>Value</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.transactions.isLoading ? (
                        <tr>
                          <td colSpan="7">Loading...</td>
                        </tr>
                      ) : this.state.transactions.data?.length ? (
                        this.state.transactions.data?.map((transaction, i) => {
                          return (
                            <tr key={i + 1}>
                              <td>{transaction.tx_internal_index}</td>
                              <td>
                                <AddressLink
                                  value={transaction.fromAddress.address}
                                  type="address"
                                />
                              </td>
                              <td>
                                <AddressLink
                                  value={transaction.toAddress.address}
                                  type="address"
                                />
                              </td>
                              <td>{transaction.gas_used && formatEther(transaction.gas_used)}</td>
                              <td>{transaction.gas && formatEther(transaction.gas)}</td>
                              <td>{transaction.value && formatEther(transaction.value)}</td>
                              <td>{transaction.tx_type}</td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="7">No Transactions</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <Snackbar ref={this.snackbarRef} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default InternalTransactions;
