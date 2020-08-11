import React, { Component } from 'react';
import './address.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp, formatEther } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';
import { Link } from 'react-router-dom';
import { ethers, providers } from 'ethers';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import config from '../../config/config';
import { providerESN } from '../../ethereum/Provider';

class Address extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const {
      match: { params },
    } = this.props;

    this.state = {
      address: params.address,
      data: {
        label: null,
        balance: null,
        nativeBalance: null,
      },
      isLoading: true,
      transactions: {
        data: {},
        total: 0,
        isLoading: false,
      },
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    this.fetchAddress();
    this.fetchTransactionsByAddress();
    // this.fetchBalance();
    // this.fetchNativeBalance();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.address !== prevProps.match.params.address) {
      this.setState(
        {
          address: this.props.match.params.address,
        },
        () => {
          // this.fetchNativeBalance();
          this.fetchAddress();
          this.fetchTransactionsByAddress();
          // this.fetchBalance();
        }
      );
    }
  }

  async fetchNativeBalance() {
    const balance = await providerESN.getBalance(
      this.props.match.params.address
    );

    this.setState({
      data: {
        ...this.state.data,
        nativeBalance: balance.toNumber(),
      },
    });
  }

  async fetchBalance() {
    const customHttpProvider = new ethers.providers.JsonRpcProvider(
      config.nodeUrl
    );
    const balance = await customHttpProvider.getBalance(this.state.address);
    this.setState({
      data: {
        ...this.state.data,
        label: this.state.label,
        balance: ethers.utils.formatEther(balance),
      },
    });
  }

  async fetchAddress() {
    try {
      const res = await Apis.fetchAddress(this.state.address);

      if (Object.keys(res).length)
        this.setState({
          data: {
            ...this.state.data,
            label: res.label,
            balance: formatEther(res.balance)
          },
          isLoading: false,
        });
      // else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e);
      this.setState({
        ...this.state.data,
        data: {},
        isLoading: false,
      });
    }
  }

  async fetchTransactionsByAddress() {
    try {
      const res = await Apis.fetchTransactionsByAddress(this.state.address);

      this.setState({
        transactions: {
          data: res.data,
          total: res.total,
          isLoading: false,
        },
      });
    } catch (e) {
      console.log(e);
      this.openSnackBar(e);
      this.setState({
        transactions: {
          ...this.state.transactions,
          data: [],
          isLoading: false,
        },
      });
    }
  }

  openSnackBar(message) {
    // this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div className="blocks-table">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Address</h2>
          <p className="explr-txt">#{this.state.address}</p>
        </div>
        <div className="container">
          <div className="BlockPage-detail">
            <Container>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="table-responsive">
                      <table className="es-transaction table">
                        <tr>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            colSpan="2"
                          >
                            Overview
                          </td>
                        </tr>
                        <tr>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                            Native Balance
                          </td>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                            {this.state.data.nativeBalance ?? '-'} ES
                          </td>
                        </tr>
                        <tr>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                            Balance
                          </td>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                            {this.state.data.balance} ES
                          </td>
                        </tr>
                        <tr>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                            Label
                          </td>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title="These are the transactions that are included in this Block"
                          >
                            {this.state.data.label || '-'}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>

              <div className="mt40">
                <Tabs
                  defaultActiveKey="transactions"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="transactions" title="Transactions">
                    {this.state.isLoading
                      ? 'Loading...'
                      : `Showing ${this.state.transactions.data.length} of ${this.state.transactions.total}`}
                    <div className="card">
                      <div className="table-responsive">
                        <table className="es-transaction table">
                          <thead>
                            <tr>
                              <th
                                data-toggle="tooltip"
                                data-placement="top"
                                title="The Hash of the Transaction"
                              >
                                Transaction Hash{' '}
                              </th>
                              <th
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Block is the periodic collection of transactions happening on Era Swap Network"
                              >
                                Block
                              </th>
                              <th
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Age is the Age of this Block when it was mined"
                              >
                                Age
                              </th>
                              <th
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                From
                              </th>
                              <th
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                To
                              </th>
                              <th
                                data-toggle="tooltip"
                                data-placement="top"
                                title="The amount of era swap sent with this Transaction"
                              >
                                Value
                              </th>
                              <th
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Fee for this Transaction"
                              >
                                (Transaction Fee)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.transactions.isLoading ? (
                              <tr>
                                <td colSpan="7">Loading...</td>
                              </tr>
                            ) : this.state.transactions.data?.length ? (
                              this.state.transactions.data?.map(
                                (transaction, i) => {
                                  return (
                                    <tr key={i + 1}>
                                      <td className="tr-color-txt">
                                        <AddressLink
                                          value={transaction.txn_hash}
                                          type="txn"
                                          shrink={true}
                                        />
                                      </td>
                                      <td className="tr-color-txt">
                                        <AddressLink
                                          value={transaction.block.block_number}
                                          type="block"
                                        />
                                      </td>
                                      <td>
                                        {toLocaleTimestamp(
                                          transaction.createdOn
                                        ).fromNow()}
                                      </td>
                                      <td>
                                        {transaction.fromAddress.label && (
                                          <Link
                                            to={
                                              '/' +
                                              transaction.fromAddress.address
                                            }
                                          >
                                            {transaction.fromAddress.label}
                                          </Link>
                                        )}
                                        <span className="tr-color-txt">
                                          <AddressLink
                                            value={
                                              transaction.fromAddress.address
                                            }
                                            type="address"
                                            shrink={
                                              transaction.fromAddress.label
                                                .length
                                            }
                                          />
                                        </span>
                                      </td>
                                      <td>
                                        {transaction.fromAddress.label && (
                                          <Link
                                            to={
                                              '/' +
                                              transaction.fromAddress.address
                                            }
                                          >
                                            {transaction.fromAddress.label}
                                          </Link>
                                        )}
                                        <span className="tr-color-txt">
                                          <AddressLink
                                            value={
                                              transaction.toAddress.address
                                            }
                                            type="address"
                                            shrink={
                                              transaction.fromAddress.label
                                                .length
                                            }
                                          />
                                        </span>
                                      </td>
                                      <td>
                                        {ethers.utils.formatEther(
                                          transaction.value
                                        )}{' '}
                                        ES{' '}
                                      </td>
                                      <td>0.000546</td>
                                    </tr>
                                  );
                                }
                              )
                            ) : (
                              <tr>
                                <td colSpan="7">No Transactions</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <Snackbar ref={this.snackbarRef} />
                  </Tab>
                </Tabs>
              </div>
              <Snackbar ref={this.snackbarRef} />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
