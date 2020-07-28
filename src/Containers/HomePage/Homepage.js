import React, { Component } from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import * as moment from 'moment';
import './Homepage.css';
import Images from '../Images/Images';
import Navbar from '../../Components/Navbar/Navbar';
import Apis from '../../lib/apis';
import { Snackbar } from '../../Components/Snackbar/Snackbar';
import AddressLink from '../../Components/AddressLink/AddressLink';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { toLocaleTimestamp } from '../../lib/parsers';
import { ethers } from 'ethers';

class Homepage extends Component {
  snackbarRef = React.createRef();
  search = '';

  constructor(props) {
    super(props);
    this.state = {
      esPriceUSDT: 0,
      esPriceBTC: 0,
      blocks: {
        data: [],
        isLoading: true,
      },
      transactions: {
        data: [],
        isLoading: true,
      },
      bunches: {
        data: [],
        isLoading: true,
      },
    };

    this.fetchTransactions = this.fetchTransactions.bind(this);
  }

  componentDidMount() {
    this.fetchBlocks();
    this.fetchTransactions();
    this.fetchBunches();
    this.fetchESPrice();
  }

  fetchBlocks = async () => {
    try {
      const res = await Apis.fetchBlocks(0, 14);
      this.setState({
        blocks: {
          data: res.data,
          isLoading: false,
        },
      });
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e.message);
      this.setState({
        blocks: {
          data: [],
          isLoading: false,
        },
      });
    }
  };

  openSnackBar = (message) => {
    // this.snackbarRef.current.openSnackBar(message);
  };

  fetchTransactions = async () => {
    try {
      const res = await Apis.fetchTransactions(0, 14);
      console.log('res', res);
      this.setState({
        transactions: {
          data: res.data,
          isLoading: false,
        },
      });
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e.message);
      this.setState({
        transactions: {
          data: [],
          isLoading: false,
        },
      });
    }
  };

  fetchBunches = async () => {
    try {
      const res = await Apis.fetchBunches(0, 14);
      console.log('bunches res', res);
      this.setState({
        bunches: {
          data: res.data,
          isLoading: false,
        },
      });
    } catch (e) {
      console.log(e);
      // this.openSnackBar(e.message);
      this.setState({
        bunches: {
          data: [],
          isLoading: false,
        },
      });
    }
  };

  async fetchESPrice() {
    try {
      const res = await Apis.getESPrice();
      console.log('fetchESPrice res', res);
      if (res?.data?.probitResponse?.data?.length) {
        this.setState({
          esPriceUSDT: res.data.probitResponse.data[0].last,
          esPriceBTC: res.data.probitResponse.data[1].last,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case 'search':
        this.search = e.target.value;
        break;
      default:
        break;
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    if (this.search.length === 42)
      this.props.history.push('/address/' + this.search);
    else if (this.search.length === 66)
      this.props.history.push('/tx/' + this.search);
    else this.props.history.push('/block/' + this.search);
  };

  calculatePriceDiff() {
    if (this.state.esPriceUSDT && this.state.esPriceBTC) {
    }
  }

  render() {
    return (
      <div>
        <div className="booking-hero-bgd">
          <Navbar />
          <h2 className="es-main-head">Era Swap Blockchain Explorer</h2>
        </div>
        <div className="esexplorer-Container">
          <div className="home-search-container">
            <Container>
              <form onSubmit={this.handleClick}>
                <input
                  type="text"
                  placeholder="Block, hash, transaction etc.."
                  name="search"
                  className="search-field"
                  onChange={this.handleChange}
                />
                <button className="search-btn" type="submit">
                  {' '}
                  <img className="search-Img" src={Images.path.search} />
                </button>
              </form>
            </Container>
          </div>
        </div>
        <div className="es-explorer-wrapper">
          <Container>
            <div className="second-section-es">
              <Row>
                <Col lg={4} className="border-right">
                  <div className="flex-eraswap">
                    <img src={Images.path.escolor} className="escolor-pic1" />
                    <div>
                      <p className="era-head">ERA SWAP PRICE</p>
                      <p className="text-black">
                        {this.state.esPriceUSDT
                          ? `$ ${this.state.esPriceUSDT}`
                          : 'Loading...'}{' '}
                        <span className="text-gray">
                          @{' '}
                          {this.state.esPriceBTC
                            ? `${this.state.esPriceBTC} BTC`
                            : 'Loading...'}
                        </span>{' '}
                        <span className="text-green"></span>
                      </p>
                    </div>
                  </div>
                  <div className="mt10">
                    <div className="pdl70">
                      <p className="era-head">MARKET VOLUME</p>
                      <p className="text-black">-</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="border-right">
                  <div className="flex-transc row">
                    <div className="col-lg-6">
                      <p
                        className="era-head"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="These are the transactions that are included in this Block"
                      >
                        TRANSACTIONS{' '}
                      </p>
                      <p className="era-value text-black">
                        738.81 M{' '}
                        <span className="era-span text-gray">(12.1 TPS)</span>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p className="era-head">SAFE GAS PRICE</p>
                      <p className="era-value text-black">
                        0 Gwel{' '}
                        <span className="era-span text-gray">($0.0)</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex-transc border-value row">
                    <div className="col-lg-6">
                      <p className="era-head">DIFFICULTY</p>
                      <p className="era-value text-black">0 TH</p>
                    </div>
                    <div className="col-lg-6">
                      <p
                        className="era-head"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Era Swap Network Proof of Stake (ESN PoS)"
                      >
                        HASH RATE
                      </p>
                      <p className="era-value text-black">0 GH/s</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div>
                    <p className="era-head">
                      ERA SWAP TRANSACTION HISTORY IN 14 DAYS
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          <Container>
            <Row className="mt40">
              <Col lg={4}>
                <div className="border-era">
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Bunch is the collection of Blocks which is posted on Ethereum"
                  >
                    Latest Bunch{' '}
                  </span>
                </div>
                <div className="table-scroll">
                  <table className="era-transaction">
                    {this.state.bunches.isLoading ? (
                      <tr>
                        <td colSpan="4">Loading...</td>
                      </tr>
                    ) : this.state.bunches.data?.length ? (
                      this.state.bunches.data.map((bunch, i) => (
                        <tr>
                          <td className="frst-era">
                            <AddressLink
                              value={bunch.bunchIndex}
                              type="bunch"
                            />
                            <div className="sub-frst">
                              {toLocaleTimestamp(bunch.createdOn).fromNow()}
                            </div>
                          </td>
                          <td
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Informer pays the gas fee to post the Bunch Roots to Ethereum"
                          >
                            Informer{' '}
                            <span className="frst-era">
                              <AddressLink
                                value={bunch.informer}
                                type="address"
                                shrink={true}
                              />
                            </span>
                            {/* <div className="sub-frst">45 secs ago</div>  */}
                          </td>
                          <td>
                            <div className="era-no">{bunch.bunchDepth} </div>{' '}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">No Bunches</td>
                      </tr>
                    )}
                  </table>
                </div>

                <div className="border-era-two">
                  <button className="era-view-btn">
                    <Link to="/bunches" className="era-link">
                      View all Bunch
                    </Link>
                  </button>
                </div>
              </Col>

              <Col lg={4}>
                <div className="border-era">
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Block is the periodic collection of Transactions happening on Era Swap Network"
                  >
                    Latest Blocks{' '}
                  </span>
                </div>
                <div className="table-scroll">
                  <table className="era-transaction">
                    {this.state.blocks?.isLoading
                      ? 'Loading...'
                      : this.state.blocks?.data?.length
                      ? this.state.blocks.data.map((block, i) => {
                          return (
                            <tr key={i + 1}>
                              <td className="frst-era">
                                <AddressLink
                                  value={block.block_number}
                                  type="block"
                                />
                                <div className="sub-frst">
                                  {moment(
                                    moment(block.createdOn).toDate()
                                  ).fromNow()}
                                </div>
                              </td>
                              <td
                                data-toggle="tooltip"
                                data-placement="top"
                                title="The validator who authors a Block on Era Swap Network"
                              >
                                Sealer{' '}
                                <span className="frst-era">
                                  <AddressLink
                                    value={block?.miner?.address}
                                    type="address"
                                    shrink={true}
                                  />
                                </span>
                              </td>
                              <td>
                                <div className="era-no">
                                  {block.provisional_reward ? (
                                    block.provisional_reward
                                  ) : (
                                    <i>pending...</i>
                                  )}
                                </div>{' '}
                              </td>
                            </tr>
                          );
                        })
                      : 'No Blocks'}
                  </table>
                </div>
                <div className="border-era-two">
                  <button className="era-view-btn">
                    <Link to="/blocks" className="era-link">
                      View all Blocks
                    </Link>
                  </button>
                </div>
              </Col>

              <Col lg={4}>
                <div className="border-era">
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Latest Transactions are the Transactions happening in recent Blocks in chronological orders"
                  >
                    Latest Transactions
                  </span>
                </div>
                <div className="table-scroll">
                  <table className="era-transaction">
                    {this.state.transactions?.isLoading
                      ? 'Loading...'
                      : this.state.transactions?.data?.length
                      ? this.state.transactions.data.map((transaction, i) => {
                          return (
                            <tr key={i + 1}>
                              <td className="frst-era">
                                <AddressLink
                                  value={transaction.txn_hash}
                                  type="tx"
                                  shrink={true}
                                />
                                <div className="sub-frst">
                                  {moment(
                                    moment(transaction.createdOn).toDate()
                                  ).fromNow()}
                                </div>
                              </td>
                              <td>
                                <span className="">
                                  From:{' '}
                                  <AddressLink
                                    value={transaction?.fromAddress?.address}
                                    type="address"
                                    shrink={true}
                                  />
                                  <br></br>
                                  To:{' '}
                                  <AddressLink
                                    value={transaction?.toAddress?.address}
                                    type="address"
                                    shrink={true}
                                  />
                                </span>
                              </td>
                              <td>
                                <div className="era-no">
                                  {ethers.utils.formatEther(transaction.value)}{' '}
                                  ES
                                </div>{' '}
                              </td>
                            </tr>
                          );
                        })
                      : 'No Transactions'}
                  </table>
                </div>
                <div className="border-era-two">
                  <button className="era-view-btn">
                    <Link to="/txs" className="era-link">
                      View all Transactions
                    </Link>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>

          {/* <Container>
            <Row>
              <Col lg={12}>
                <div className="second-section-es mt40 purpalebg ">
                  <Row>
                    <Col lg={4}>
                      <div className="block-bg">
                        <div className="escolor-pic1">
                          <img
                            src={Images.path.escolor}
                            className="img-fluid"
                          />
                        </div>
                        <div className="block-value">
                          <p className="block-text">AVG. BLOCK TIME</p>
                          <p className="block-value">25,759,721</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} className="">
                      <div className="block-bg">
                        <div className="escolor-pic1">
                          <img
                            src={Images.path.escolor}
                            className="img-fluid"
                          />
                        </div>
                        <div className="block-value">
                          <p className="block-text">BLOCK HEIGHT</p>
                          <p className="block-value">25,759,721</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                        <p className="era-head">EPOCH: 31 </p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt30">
                    <Col lg={4} className="">
                      <div className="block-bg">
                        <div className="escolor-pic1">
                          <img
                            src={Images.path.escolor}
                            className="img-fluid"
                          />
                        </div>
                        <div className="block-value">
                          <p className="block-text">AVG. BLOCK TIME</p>
                          <p className="block-value">25,759,721</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8} className="">
                      <div className="block-bg"></div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col lg={12}>
                <div className="second-section-es mt40 purpalebg ">
                  <Row>
                    <Col lg={4}>
                      <div className="block-bg staking-bg">
                        <div className="escolor-pic1">
                          <img
                            src={Images.path.escolor}
                            className="img-fluid"
                          />
                        </div>
                        <div className="staking-value">
                          <p className="staking-text">STAKING APR</p>
                          <p className="staking-value">0%</p>
                          <p class="small mt20">
                            {' '}
                            <span className="yellow-text">0%</span> real staking
                            APR
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} className="">
                      <div className="block-bg staking-bg">
                        <div className="escolor-pic1">
                          <img
                            src={Images.path.escolor}
                            className="img-fluid"
                          />
                        </div>
                        <div className="staking-value">
                          <p className="staking-text">STAKED ES</p>
                          <p className="staking-value">7.1M /488.6M</p>
                          <p class="small mt20">Delinquent stake: 0.0%</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="block-bg staking-bg">
                        <div className="escolor-pic1">
                          <img
                            src={Images.path.escolor}
                            className="img-fluid"
                          />
                        </div>
                        <div className="staking-value">
                          <p className="staking-text">PRICE</p>
                          <p className="staking-value">
                            ES 0.58{' '}
                            <span className="small green-text">0.16%</span>
                          </p>
                          <p class="small mt20">
                            <span className="pdr40">
                              24h Vol:{' '}
                              <span className="yellow-text">5.6 ES</span>
                            </span>
                            <span className="pdr40">
                              MCap: <span className="yellow-text">5.6 ES</span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col lg={12}>
                <div className="second-section-es mt40 purpalebg ">
                  <Row>
                    <Col lg={4}>
                      <div className="block-bg staking-bg">
                        <div className="staking-value">
                          <p className="staking-text">CURRENT TPS</p>
                          <p className="staking-value blue-text">179</p>
                        </div>
                      </div>

                      <div className="block-bg staking-bg mt20">
                        <div className="staking-value">
                          <p className="staking-text">TOTAL TRANSACTIONS</p>
                          <p className="staking-value blue-text">818,043,895</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8} className="">
                      <div className="block-bg staking-bg"></div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="mt40">
              <Col lg={12}>
                <div className="second-section-es purpalebg">
                  <div className="table-responsive">
                    <table className="table table-bordered purple-table">
                      <tr>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          RANK
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          VALIDATOR
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          STAKE (ES){' '}
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          CUMULATIVE STAKE (EM)
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          FEE
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          LAST VOTE
                        </th>
                      </tr>

                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>1 </td>
                        <td>
                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>{' '}
                          Era Swap Node 3{' '}
                        </td>
                        <td>
                          <div>725,003</div>
                          <div>10.3%</div>
                        </td>
                        <td>10.3 %</td>
                        <td>100 %</td>
                        <td>
                          14,114,331{' '}
                          <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>*/}

          <Container>
            <Row className="mt40">
              <Col lg={12}>
                <div className="second-section-es">
                  <div className="col-lg-12 text-center">
                    <h5 class="purple-text">
                      ES METER (EM) & ES NANOMETER (nEM)
                    </h5>
                  </div>
                  <div className="table-responsive mt20">
                    <table className="table table-bordered white-table">
                      <tr>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          ES Unit
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          Symbol
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          Era Swap (ES){' '}
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          ES Meter (EM)
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          ES Nano Meter (nEM)
                        </th>
                      </tr>

                      <tr>
                        <td>1 ES </td>
                        <td>(ES) </td>
                        <td>1</td>
                        <td>
                          10<sup>9</sup>
                        </td>
                        <td>
                          10<sup>18</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>1 ES TonMeter </td>
                        <td>(tEM)</td>
                        <td>
                          10<sup>-3</sup>
                        </td>
                        <td>
                          10<sup>6</sup>
                        </td>
                        <td>
                          10<sup>15</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>1 ES KiloMeter</td>
                        <td>(kEM)</td>
                        <td>
                          10<sup>-6</sup>
                        </td>
                        <td>
                          10<sup>3</sup>
                        </td>
                        <td>
                          10<sup>12</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>1 ES Meter </td>
                        <td>(EM) </td>
                        <td>
                          10<sup>-9</sup>
                        </td>
                        <td>1</td>
                        <td>
                          10<sup>9</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>1 ES MilliMeter </td>
                        <td>(mEM) </td>
                        <td>
                          10<sup>-12</sup>
                        </td>
                        <td>
                          10<sup>-3</sup>
                        </td>
                        <td>
                          10<sup>6</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>1 ES MicroMeter</td>
                        <td>(µEM)</td>
                        <td>
                          10<sup>-15</sup>
                        </td>
                        <td>
                          10<sup>-6</sup>
                        </td>
                        <td>
                          10<sup>3</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>1 ES NanoMeter </td>
                        <td>(nEM) </td>
                        <td>
                          10<sup>-18</sup>
                        </td>
                        <td>
                          10<sup>-9</sup>
                        </td>
                        <td>1</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Snackbar ref={this.snackbarRef} />
      </div>
    );
  }
}

export default withRouter(Homepage);
