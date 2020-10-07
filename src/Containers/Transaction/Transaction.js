import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './transaction.css';
import Images from '../Images/Images';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { Col, Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Apis from '../../lib/apis';
import { toLocaleTimestamp, formatEther } from '../../lib/parsers';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';
import { ethers } from 'ethers';

class Transaction extends Component {
  snackbarRef = React.createRef();

  constructor(props) {
    super(props);

    const {
      match: { params },
    } = this.props;

    this.state = {
      hash: params.hash,
      transaction: {
        data: {},
        isLoading: true,
      },
    };

    this.openSnackBar = this.openSnackBar.bind(this);
  }

  componentDidMount() {
    this.fetchTransaction();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.hash !== prevProps.match.params.hash) {
      this.setState(
        {
          hash: this.props.match.params.hash,
          transaction: {
            data: {},
            isLoading: true,
          },
        },
        this.fetchTransaction
      );
    }
  }

  async fetchTransaction() {
    try {
      console.log('this.state.hash', this.state.hash);
      const res = await Apis.fetchTransaction(this.state.hash);
      console.log('res', res);
      if (res.status)
        this.setState({
          transaction: {
            data: res.data,
            isLoading: false,
          },
        });
      else this.openSnackBar(res.error.message);
    } catch (e) {
      console.log(e);
      this.openSnackBar(e.message);
      this.setState({
        transaction: {
          data: {},
          isLoading: false,
        },
      });
    }
  }

  openSnackBar = (message) => {
    // this.snackbarRef.current.openSnackBar(message);
  };

  render() {
    return (
      <div className="compage">
        <div className="booking-hero-bgd booking-hero-bgd-inner">
          <Navbar />
          <h2 className="es-main-head es-main-head-inner">Transaction </h2>
          <p className="explr-txt">#{this.state.hash}</p>
        </div>
        <div className="wrapper-container">
          <div className="BlockPage-detail">
            <Container>
              <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                <Tab eventKey="overview" title="Overview">
                  <div className="card">
                    <div className="table-responsive">
                      <table className="block-overview table">
                        {
                          this.state.transaction.isLoading ?
                          'Loading...'
                          :
                          Object.keys(this.state.transaction.data).length ? (
                          <thead>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="The Hash of the Transaction"
                              >
                                Transaction Hash:{' '}
                              </td>
                              <td>{this.state.hash}</td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                Status:{' '}
                              </td>
                              <td>
                                {
                                  this.state.transaction.data.status_enum ===
                                  'pending' ? (
                                    <span className="badge badge-warning">
                                      Pending
                                    </span>
                                  ) :
                                this.state.transaction.data.status_enum ===
                                'success' ? (
                                  <span className="badge badge-success">
                                    Success
                                  </span>
                                ) : (
                                  <span className="badge badge-danger">
                                    Failed
                                  </span>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Block is the periodic collection of transactions happening on Era Swap Network"
                              >
                                Block:{' '}
                              </td>
                              <td>
                                <AddressLink
                                  value={
                                    this.state.transaction.data.block.block_number
                                  }
                                  type="block"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Time Stamp show that the blocks are connected in a chronological order which marks the time for each transaction on Era Swap Network"
                              >
                                Timestamp:
                              </td>
                              <td>
                                {toLocaleTimestamp(
                                  this.state.transaction.data.block?.timestamp
                                ).fromNow()}{' '}
                                (
                                {toLocaleTimestamp(
                                  this.state.transaction.data.block?.timestamp
                                ).format('MMMM-DD-YYYY hh:mm:ss A')}
                                )
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                From:{' '}
                              </td>
                              <td>
                                <AddressLink
                                  value={
                                    this.state.transaction.data.fromAddress
                                      .address
                                  }
                                  type="address"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                To:{' '}
                              </td>
                              <td>
                                {
                                  this.state.transaction?.data?.toAddress?.address
                                  ?
                                  <AddressLink
                                  value={
                                    this.state.transaction.data.toAddress
                                      .address
                                  }
                                  type="address"
                                />
                                :
                                '-'
                                }
                                
                              </td>
                            </tr>
                            <tr>
                              <td>Value:</td>
                              <td>
                                {ethers.utils.formatEther(
                                  this.state.transaction.data.value
                                )}{' '}
                                ES
                              </td>
                            </tr>
                            <tr>
                              <td>Internal Transactions:</td>
                              <td>
                                <Link
                                  to={{
                                    pathname:
                                      '/txnsInternal/' + this.state.hash,
                                    state: { parentHash: this.state.hash },
                                  }}
                                >
                                  <span className="tr-color-txt">
                                    {this.state.transaction.data
                                      .internalTxnsCount || 0}
                                  </span>
                                </Link>{' '}
                                contract internal transactions in this
                                transaction
                              </td>
                            </tr>
                            <tr>
                              <td>Type of Transactions:</td>
                              <td>
                               -
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Fee for this Transaction"
                              >
                                Transaction Fee:
                              </td>
                              <td>
                                {this.state.transaction.data.gas_price 
                                  &&
                                  this.state.transaction.data.gas_used
                                  &&  ethers.utils.formatEther(
                                  ethers.BigNumber.from(
                                    this.state.transaction.data.gas_price
                                  ).mul(this.state.transaction.data.gas_used)
                                ) || '-'}{' '}
                                ES
                              </td>
                            </tr>
                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Gas Limit is the maximum amount of computation that can happen in this Block"
                              >
                                Gas Limit:
                              </td>
                              <td>{this.state.transaction.data.gas_limit}</td>
                            </tr>

                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                Gas Used by Transaction:{' '}
                              </td>
                              <td>
                                {this.state.transaction.data.gas_used} (
                                {(
                                  (this.state.transaction.data.gas_used /
                                    this.state.transaction.data.gas_limit) *
                                  100
                                ).toFixed(2)}
                                %)
                              </td>
                            </tr>

                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Amount of Era Swap paid per Unit of Gas"
                              >
                                Gas Price:
                              </td>
                              <td>
                                {formatEther(
                                  this.state.transaction.data.gas_price
                                )}{' '}
                              </td>
                            </tr>

                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                Nonce:
                              </td>
                              <td>{this.state.transaction.data.nonce}</td>
                            </tr>

                            <tr>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                              >
                                Input Data:
                              </td>
                              <td>{this.state.transaction.data.data}</td>
                            </tr>
                          </thead>
                        ) : (
                          <tr>
                            <td colSpan="2">No Transaction</td>
                          </tr>
                        )}
                      </table>
                    </div>
                  </div>
                </Tab>
                {/* <Tab eventKey="comments" title="Comments">
                  <Row>
                    <Col sm={2}>
                      <img className='comm-profile-Img' src={Images.path.imgProfile} alt='profile' />
                    </Col>
                    <Col sm={10}>
                      <textarea className='comm-field' type="text" id="text" name="text" placeholder="Comments" />
                      <div className="btn-flex-right">
                        <button className="submit-btn-comm">Submit</button>
                      </div>
                    </Col>
                  </Row>
                  <div className="public-container">
                    <div className="flex-user-comm">
                      <img className='comm-user-Img' src={Images.path.imgProfile} alt='profile' />
                      <div>
                        <h6>Ravindra Jadeja</h6>
                        <p className="user-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                      </div>
                    </div>

                    <div className="flex-user-comm">
                      <img className='comm-user-Img' src={Images.path.imgProfile} alt='profile' />
                      <div>
                        <h6>Ravindra Jadeja</h6>
                        <p className="user-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                      </div>
                    </div>
                  </div>
                </Tab> */}
              </Tabs>
              <Snackbar ref={this.snackbarRef} />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;
