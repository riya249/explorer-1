import React, { Component } from 'react';
import {
  Col,
  Button,
  Container,
  Row,
  Tooltip,
  ProgressBar,
} from 'react-bootstrap';
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
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  nFormatter,
  moreDecimals,
  lessDecimals,
  formatEther,
} from '../../lib/parsers';
import { nrtManager } from '../../ethereum/NrtManager';
import { timeAllyManager } from '../../ethereum/TimeallyManager';
import { nrtAddress } from '../../config/config';
import { providerESN } from '../../ethereum/Provider';

const MAX_SUPPLY = 9100000000;

class Homepage extends Component {
  snackbarRef = React.createRef();
  search = '';
  cummulativeStakes = 0;
  esCurrentSupply;

  constructor(props) {
    super(props);
    this.state = {
      marketCap: 0,
      change1H: '-',
      change24H: '-',
      change7Days: '-',
      probitTimestampUSDT: '',
      probitTimestampBTC: '',
      availableSupply: 0,
      totalSupply: 0,
      maxSupply: MAX_SUPPLY,
      volume24: 0,
      backedAmt: 0,
      totalESStaked: 0,
      transactionsChartData: [],
      txnsCount: 0,
      txnPerMin: 0,
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
      validators: {
        data: [],
        isLoading: true,
      },
      averageBlock: null,
      latestBlockNumber: null,
      nrtCompletedPercent: 0,
      burnPool: 0
    };

    this.fetchTransactions = this.fetchTransactions.bind(this);
  }

  componentDidMount() {
    this.fetchBlocks().catch((e) => console.log(e));
    this.fetchTransactions().catch((e) => console.log(e));
    this.fetchBunches().catch((e) => console.log(e));
    this.fetchESPrice().catch((e) => console.log(e));
    this.fetchTransactionsInterval().catch((e) => console.log(e));
    this.fetchTransactionsCount().catch((e) => console.log(e));
    this.fetchTotalStakedES().catch((e) => console.log(e));
    this.fetchValidators().catch((e) => console.log(e));
    this.fetchAverageBlock().catch((e) => console.log(e));
    this.nrtTicker().catch((e) => console.log(e));
    this.esCurrentSupply().catch((e) => console.log(e));
    this.fetchTotalSupply().catch((e) => console.log(e));
    this.fetchBurnPool().catch((e) => console.log(e));
    
  }

  async fetchBurnPool() {
    const burnBal = await nrtManager.burnPoolBalance();
    this.setState({
      burnPool: formatEther(burnBal),
    });
  }

  async nrtTicker() {
    /// @dev countdown timer for nrt release
    const deployTimestamp = 1564336091 * 1000;
    const monthDuration = 2629744 * 1000;

    let seeFutureNrt = false;
    let currentNrtMonthNumber = 0;
    // let nextNrtTimestamp = deployTimestamp + monthDuration * (currentNrtMonthNumber + 1);

    const lastNrtReleaseTimestamp = (
      await nrtManager.lastReleaseTimestamp()
    ).toNumber();

    setInterval(() => {
      // const nextNrtTimestamp =
      //   deployTimestamp + monthDuration * (currentNrtMonthNumber + 1);

      const nextNrtTimestamp = lastNrtReleaseTimestamp * 1000 + monthDuration;
      const currentTimestamp = Date.now();

      const timeRemaining =
        nextNrtTimestamp > currentTimestamp
          ? nextNrtTimestamp - currentTimestamp
          : 0;

      //     window.isOnProduction || console.log(timeRemaining);

      const daysRemaining = Math.floor(timeRemaining / 1000 / 24 / 60 / 60);
      const hoursRemaining = Math.floor(
        (timeRemaining - daysRemaining * 1000 * 24 * 60 * 60) / 1000 / 60 / 60
      );
      const minutesRemaining = Math.floor(
        (timeRemaining -
          daysRemaining * 1000 * 24 * 60 * 60 -
          hoursRemaining * 1000 * 60 * 60) /
          1000 /
          60
      );
      const secondsRemaining = Math.floor(
        (timeRemaining -
          daysRemaining * 1000 * 24 * 60 * 60 -
          hoursRemaining * 1000 * 60 * 60 -
          minutesRemaining * 1000 * 60) /
          1000
      );

      const totalMiliSecInMonth = 2628000000;
      const timePassed = totalMiliSecInMonth - timeRemaining;
      const timePassedPercent = (timePassed / totalMiliSecInMonth) * 100;

      this.setState({
        nrtCompletedPercent: timePassedPercent,
      });
    }, 1000);
  }

  async fetchAverageBlock() {
    let res = [];
    try {
      res = await Apis.fetchAverageBlock();
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        averageBlock: res?.average ? (res?.average/1000).toFixed(2) : 0,
        latestBlockNumber: res?.latestBlock?.block_number,
      });
    }
  }

  async fetchValidators() {
    try {
      const month = await nrtManager.currentNrtMonth();
      if (month !== null) {
        const res = await Apis.fetchValidatorsWithLastBlock(month);
        console.log('Validators res', res);
        if (res && Array.isArray(res)) {
          let data = res;
          data.forEach((validator, i) => {
            this.cummulativeStakes =
              Number(this.cummulativeStakes) +
              Number(formatEther(validator.amount));
            data[i].cummulativeStakes = this.cummulativeStakes;
            data[i].amount = Number(formatEther(validator.amount));
          });
          console.log({ data });
          data = data.sort((a, b) => (a.amount > b.amount ? -1 : 1));

          this.setState({
            validators: {
              data,
              isLoading: false,
            },
          });
        }
      }
    } catch (e) {
      console.log('fetchValidators', e);
      this.setState({
        validators: {
          data: [],
          isLoading: false,
        },
      });
    }
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

  async fetchTransactionsInterval() {
    try {
      const res = await Apis.fetchTransactionsInterval();
      console.log('fetchTransactionsInterval', res);
      const data = Array.from(res);
      console.log({ data });
      data.forEach((transaction, i) => {
        data[i].date = moment(moment(transaction.date).toDate()).format(
          'DD/MM/yyyy'
        );
      });
      console.log(1, { data });
      this.setState({ transactionsChartData: data });
    } catch (e) {
      console.log(e);
    }
  }

  fetchTransactions = async () => {
    try {
      const res = await Apis.fetchTransactions(0, 14);
      console.log('fetchTransactions res', res);
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

  async fetchTransactionsCount() {
    try {
      const res = await Apis.fetchTransactionsCount();
      console.log('fetchTransactionsCount res', res);
      if (res?.status) {
        this.setState({
          txnsCount: res.data.totalCount,
          txnPerMin: res.data.transactionsPerMin,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async fetchESPrice() {
    try {
      const res = await Apis.getESPrice();
      console.log('fetchESPrice res', res);
      if (res?.status && res?.probitResponse?.data?.length) {
        this.setState(
          {
            esPriceUSDT: res.probitResponse.data[0].last,
            esPriceBTC: res.probitResponse.data[1].last,
            volume24: Number(res.probitResponse.data[0].base_volume) + Number(res.probitResponse.data[1].base_volume),
            change24H: res.probitResponse.data[0].change,
            probitTimestampUSDT: res.probitResponse.data[0].time,
            probitTimestampBTC: res.probitResponse.data[1].time
          },
          this.updateMarketCap
        );
      }
    } catch (e) {
      console.log(e);
      console.log(e.response);
    }
  }

  async esCurrentSupply() {
    let res;
    try {
      res = await Apis.esTotalSupply();
    } catch (e) {
      console.log(e);
    } finally {
      // if (res?.data?.totalSupply) {
        // this.esCurrentSupply = Number(lessDecimals(res.data.totalSupply));
        // this.updateMarketCap();
      // }
      this.setState({
        availableSupply: res?.data?.outsideTimeAllySupply
          ? lessDecimals(res.data.outsideTimeAllySupply)
          : 0,
      });
    }
  }

  updateMarketCap = () => {
    if (this.state.esPriceUSDT && this.esCurrentSupply) {
      let marketCap = String(this.state.esPriceUSDT * this.esCurrentSupply);
      if (marketCap.includes('.')) {
        marketCap = marketCap.split('.')[0];
      }
      this.setState({
        marketCap,
      });
    }
  };

  // async getPlatformDetailsAllTime() {
  //   let res;
  //   try {
  //     res = await Apis.getPlatformDetailsAllTime();
  //     console.log('getPlatformDetailsAllTime - res', res);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     this.setState({
  //       totalESStaked: res?.data?.totalStaking
  //         ? lessDecimals(res.data.totalStaking)
  //         : '-',
  //     });
  //   }
  // }

  async fetchTotalStakedES() {
    const currentNrtMonth = await nrtManager.currentNrtMonth();
    // const nrtReleasePromise
    const nextMonthActiveStakes = await timeAllyManager.getTotalActiveStaking(
      currentNrtMonth
    );
    this.setState({
      totalESStaked: formatEther(nextMonthActiveStakes)
    });
  }

  async fetchTotalSupply() {
    const nrtBalance = await providerESN.getBalance(nrtAddress);

    this.setState({
      totalSupply: MAX_SUPPLY - formatEther(nrtBalance),
    });
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
    if (this.search.length) {
      if (this.search.length === 42)
        this.props.history.push('/address/' + this.search);
      else if (this.search.length === 66)
        this.props.history.push('/txn/' + this.search);
      else this.props.history.push('/block/' + this.search);
    }
  };

  calculatePriceDiff() {
    if (this.state.esPriceUSDT && this.state.esPriceBTC) {
    }
  }

  render() {
    const availableSupply = this.state.totalSupply - this.state.totalESStaked - this.state.burnPool;
    return (
      <div>
        <div className="booking-hero-bgd">
          <Navbar />
          <h2 className="es-main-head">Era Swap Blockchain Explorer</h2>
        </div>
        {/* <div className="esexplorer-Container">

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
        </div> */}
        <div className="es-explorer-wrapper">
          <Container>
            <div className="second-section-es mt30 card">
              <Row>
                <Col lg={8}>
                  <Row>
                    <Col md={12}>
                      <div className="flex-eraswap">
                        <img
                          src={Images.path.escolor}
                          className="escolor-pic1"
                        />
                        <div>
                          <p className="era-head">ERA SWAP PRICE</p>
                          <p className="text-black">
                            {this.state.esPriceUSDT
                              ? `$ ${this.state.esPriceUSDT}`
                              : 'Loading...'}{' '} 
                             <span className="text-gray">
                             {this.state.probitTimestampUSDT && <>@ {moment(moment(this.state.probitTimestampUSDT).toDate()).format('hh:mm A')}</>}{' '}
                             </span>
                            {/*<span className="text-gray">
                              @{' '}
                              {this.state.esPriceBTC
                                ? `${this.state.esPriceBTC} BTC`
                                : 'Loading...'}
                            </span>*/}{' '} 
                            <span className="text-green"></span>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="border-right">
                      <div className="flex-transc border-value row">
                        <div className="col-lg-6">
                          <p className="era-head">Symbol</p>
                          <p className="era-value text-black">ES</p>
                        </div>
                        <div className="col-lg-6">
                          <p className="era-head">MARKET CAP</p>
                          <p className="era-value text-black">
                            USDT {(this.state.totalSupply - this.state.burnPool) - this.state.esPriceUSDT}
                          </p>
                        </div>
                      </div>

                      <div className="flex-transc border-value row">
                        <div className="col-lg-6">
                          <p className="era-head"> MAX SUPPLY</p>
                          <p className="era-value text-black">
                            {this.state.maxSupply} ES
                          </p>
                        </div>

                        <div className="col-lg-6">
                          <p 
                            className="era-head"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Era Swap Network Proof of Stake (ESN PoS)"
                          >AMOUNT OF STAKINGS</p>
                          <p className="era-value text-black">
                            {this.state.totalESStaked} ES
                          </p>
                        </div>
                      </div>
                      <div className="flex-transc border-value row">
                        <div className="col-lg-6">
                          <p className="era-head">AVAILABLE SUPPLY</p>
                          <p className="era-value text-black">
                            {availableSupply > -1 ? availableSupply : 'Loading...'} ES
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p
                            className="era-head"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                            TOTAL SUPPLY
                          </p>
                          <p className="era-value text-black">
                            {Number(this.state.totalESStaked) +
                              Number(this.state.availableSupply)}{' '}
                            ES
                          </p>
                        </div>
                      </div>
                      <div className="flex-transc border-value-no row">
                        <div className="col-lg-6">
                          <p className="era-head">24 HOURS VOLUME in ES</p>
                          <p className="era-value text-black">
                             {this.state.volume24} ES
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p className="era-head">24 HOURS VOLUME in USDT</p>
                          <p className="era-value text-black">
                             {isFinite(this.state.volume24 * this.state.esPriceUSDT) ?
                               (this.state.volume24 * this.state.esPriceUSDT)
                               : '-'} USDT
                          </p>
                        </div>
                      </div>

                      {/* 
                  
                  <div className="flex-eraswap mt10">
                    <div className="pdl70">
                      <p className="era-head">MARKET VOLUME</p>
                      <p className="text-black">-</p>
                    </div>
                  </div>
                 */}
                    </Col>
                    <Col md={6} className="border-right">
                      <div className="flex-transc border-value row">
                        <div className="col-md-6">
                          <p
                            className="era-head"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="These are the transactions that are included in this Block"
                          >
                            TRANSACTIONS{' '}
                          </p>
                          <p className="era-value text-black">
                            {nFormatter(this.state.txnsCount)}{' '}
                            <span className="era-span text-gray">
                              ({this.state.txnPerMin} TPD)
                            </span>
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="era-head">SAFE GAS PRICE</p>
                          <p className="era-value text-black">
                            0 EM{' '}
                            <span className="era-span text-gray">($0.0)</span>
                          </p>
                        </div>
                      </div>
                        <div className="flex-transc border-value row">
                      <div className="col-md-6">
                          <p
                            className="era-head"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                           Last Price in USDT
                          </p>
                          <p className="era-value text-black">
                            {this.state.esPriceUSDT} USDT
                            {' '}{this.state.probitTimestampUSDT && <></>}
                            {/* {' '}{this.state.probitTimestampUSDT && <>@ {moment(moment(this.state.probitTimestampUSDT).toDate()).format('hh:mm A')}</>} */}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p
                            className="era-head"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                          >
                           Last Price in BTC
                          </p>
                          <p className="era-value text-black">
                            {this.state.esPriceBTC} BTC
                            {' '}{this.state.probitTimestampBTC && <></>}
                            {/* {' '}{this.state.probitTimestampBTC && <>@ {moment(moment(this.state.probitTimestampBTC).toDate()).format('hh:mm A')}</>} */}
                          </p>
                        </div>
                        
                      </div>
                      <div className="flex-transc border-value-no row">
                       <div className="col-md-6">
                          <p className="era-head">CHANGE 24H in USDT</p>
                          <p className="era-value text-black">
                            $ {this.state.change24H}
                          </p>
                        </div>
                        <div className="col-md-6">
                          {/*<p
                              className="era-head"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Era Swap Network Proof of Stake (ESN PoS)"
                            >
                              NETWORK BACKED UP ES WORTH
                            </p>
                            <p className="era-value text-black">
                              $ 
                              {(
                                this.state.totalESStaked * this.state.esPriceUSDT
                              ).toFixed(2)}
                            </p>*/}
                        </div>
                      </div>
                    
                    </Col>
                  </Row>
                </Col>
                <Col lg={4}>
                  <div>
                    <p className="era-head ">
                      ERA SWAP TRANSACTION HISTORY IN 14 DAYS
                    </p>
                    <LineChart
                      className="mt20"
                      width={320}
                      height={260}
                      data={this.state.transactionsChartData}
                      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                      <Line type="monotone" dataKey="count" stroke="#8884d8" />
                      {/* <CartesianGrid stroke="#ccc" /> */}
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          <Container>
            <Row className="mt40">
              <Col lg={4}>
                <div className="card">
                  <div className="border-era">
                    <span
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Bunch is the collection of Blocks which is posted on Ethereum"
                    >
                      Latest Plasma Bunch{' '}
                    </span>
                  </div>
                  <div className="table-scroll table-responsive">
                    <table className="era-transaction table">
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
                                {toLocaleTimestamp(bunch.timestamp).fromNow()}
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
                                  value={bunch.informer.address}
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
                <div className="table-scroll table-responsive">
                  <table className="era-transaction table">
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
                                  {toLocaleTimestamp(block.timestamp).fromNow()}
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
                                    <i>pending for Next NRT...</i>
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
                <div className="card">
                  <div className="border-era">
                    <span
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Latest Transactions are the Transactions happening in recent Blocks in chronological orders"
                    >
                      Latest Transactions
                    </span>
                  </div>
                  <div className="table-scroll table-responsive">
                    <table className="era-transaction table">
                      {this.state.transactions?.isLoading
                        ? 'Loading...'
                        : this.state.transactions?.data?.length
                        ? this.state.transactions.data.map((transaction, i) => {
                            return (
                              <tr key={i + 1}>
                                <td className="frst-era">
                                  <AddressLink
                                    value={transaction.txn_hash}
                                    type="txn"
                                    shrink={true}
                                  />
                                  <div className="sub-frst">
                                    {moment(
                                      moment(
                                        transaction.block.timestamp
                                      ).toDate()
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
                                    {formatEther(transaction.value)} ES
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
                      <Link to="/txns" className="era-link">
                        View all Transactions
                      </Link>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col lg={12}>
                <div className="second-section-es mt40 card purpalebg ">
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
                          <p className="block-value">
                            {this.state.averageBlock == null
                              ? 'Loading...'
                              : parseInt(this.state.averageBlock)} <small className="text-white">(Sec.)</small>
                          </p>
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
                          <p className="block-value">
                            {this.state.latestBlockNumber == null
                              ? 'Loading...'
                              : this.state.latestBlockNumber}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                        <p className="era-head text-white">NRT Release in </p>
                        <ProgressBar
                          now={this.state.nrtCompletedPercent}
                          label={`${this.state.nrtCompletedPercent.toFixed(
                            2
                          )}%`}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* <Row className="mt30">
                    <Col lg={4} className="">
                      <div className="block-bg">
                        <div className="escolor-pic1">
                          <img
                            src={Images.path.escolor}
                            className="img-fluid"
                          />
                        </div>
                        <div className="block-value">
                          <p className="block-text">CURRENT LEADER</p>
                          <p className="">Eraswap Node</p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8} className="">
                      <div className="block-bg"></div>
                    </Col>
                  </Row> */}
                </div>
              </Col>
            </Row>
          </Container>

          {/* <Container>
            <Row>
              <Col lg={12}>
                <div className="second-section-es mt40 card purpalebg ">
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
          </Container> */}

          {/* <Container>
            <Row>
              <Col lg={12}>
                <div className="second-section-es mt40 card purpalebg ">
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
          </Container> */}

          <Container>
            <Row className="mt40">
              <Col lg={12}>
                <div className="second-section-es card purpalebg">
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
                        {/* <th data-toggle="tooltip" data-placement="top" title="">
                          CUMULATIVE STAKE (ES)
                        </th> */}
                        <th data-toggle="tooltip" data-placement="top" title="">
                          FEE
                        </th>
                        <th data-toggle="tooltip" data-placement="top" title="">
                          LAST VOTE
                        </th>
                      </tr>
                      {this.state.validators.isLoading ? (
                        <tr>
                          <td colSpan="6">Loading...</td>
                        </tr>
                      ) : this.state.validators.data.length ? (
                        this.state.validators.data.map((validator, i) => {
                          return (
                            <tr>
                              <td>{i + 1} </td>
                              <td>
                                <i
                                  class="fa fa-chevron-circle-down"
                                  aria-hidden="true"
                                ></i>{' '}
                                <AddressLink
                                  style={{ color: '#fff' }}
                                  value={validator.validator.address}
                                  type="address"
                                />{' '}
                              </td>
                              <td>
                                <div>{validator.amount}</div>
                                <div>
                                  {(
                                    (validator.amount /
                                      this.cummulativeStakes) *
                                    100
                                  ).toFixed(2)}{' '}
                                  %
                                </div>
                              </td>
                              <td>{validator.cummulativeStakes}</td>
                              <td>{validator.per_thousand_commission / 10}</td>
                              <td>
                                {validator.lastBlock?.block_number}{' '}
                                <i
                                  class="fa fa-chevron-down"
                                  aria-hidden="true"
                                ></i>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="6">No Validators Listed</td>
                        </tr>
                      )}
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="mt40">
              <Col lg={12}>
                <div className="second-section-es card">
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
